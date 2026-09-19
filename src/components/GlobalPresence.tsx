/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { feature } from 'topojson-client';
import { geoEquirectangular, geoPath } from 'd3-geo';
import landTopology from 'world-atlas/land-110m.json';
import { MapPin } from 'lucide-react';

interface Location {
  city: string;
  country: string;
  lat: number;
  lng: number;
  hq?: boolean;
}

// Placeholder data: edit this list to change the chips, markers and stats.
const LOCATIONS: Location[] = [
  { city: 'Rajkot', country: 'India', lat: 22.3039, lng: 70.8022, hq: true },
  { city: 'Ahmedabad', country: 'India', lat: 23.0225, lng: 72.5714 },
  { city: 'Surat', country: 'India', lat: 21.1702, lng: 72.8311 },
  { city: 'Mumbai', country: 'India', lat: 19.076, lng: 72.8777 },
  { city: 'Pune', country: 'India', lat: 18.5204, lng: 73.8567 },
  { city: 'Delhi', country: 'India', lat: 28.6139, lng: 77.209 },
  { city: 'Bengaluru', country: 'India', lat: 12.9716, lng: 77.5946 },
  { city: 'Hyderabad', country: 'India', lat: 17.385, lng: 78.4867 }
];

const HQ = LOCATIONS.find((l) => l.hq)!;
const CITY_COUNT = LOCATIONS.length;
const COUNTRY_COUNT = new Set(LOCATIONS.map((l) => l.country)).size;

const OCEAN = '#f7eed7';
const LAND = '#cca04f';
const MARKER = '#885f1e';
const ARC = '#ae8128';

function toVector(lat: number, lng: number, radius = 1) {
  const phi = THREE.MathUtils.degToRad(90 - lat);
  const theta = THREE.MathUtils.degToRad(lng + 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function buildTexture() {
  const width = 2048;
  const height = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = OCEAN;
  ctx.fillRect(0, 0, width, height);

  const land = feature(landTopology as any, (landTopology as any).objects.land);
  const projection = geoEquirectangular().fitSize([width, height], { type: 'Sphere' } as any);
  ctx.fillStyle = LAND;
  ctx.beginPath();
  geoPath(projection, ctx)(land as any);
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

export default function GlobalPresence() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    camera.position.z = 4.6;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = 'pan-y';
    renderer.domElement.style.cursor = 'grab';

    scene.add(new THREE.AmbientLight('#fff4dc', 1.15));
    const sun = new THREE.DirectionalLight('#ffffff', 1.6);
    sun.position.set(-3, 2.5, 4);
    scene.add(sun);

    const texture = buildTexture();
    const globe = new THREE.Group();
    const tilt = new THREE.Group();
    tilt.rotation.x = 0.4;
    tilt.add(globe);
    scene.add(tilt);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 96, 96),
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.9, metalness: 0 })
    );
    globe.add(sphere);

    const pulses: { mesh: THREE.Mesh; offset: number }[] = [];
    const markerGeo = new THREE.SphereGeometry(0.014, 16, 16);
    const hqGeo = new THREE.SphereGeometry(0.024, 16, 16);
    const ringGeo = new THREE.RingGeometry(0.02, 0.028, 32);
    const markerMat = new THREE.MeshBasicMaterial({ color: MARKER });
    const arcMat = new THREE.LineBasicMaterial({ color: ARC, transparent: true, opacity: 0.55 });
    const ringMats: THREE.Material[] = [];

    LOCATIONS.forEach((loc, i) => {
      const pos = toVector(loc.lat, loc.lng, 1.005);
      const dot = new THREE.Mesh(loc.hq ? hqGeo : markerGeo, markerMat);
      dot.position.copy(pos);
      globe.add(dot);

      const ringMat = new THREE.MeshBasicMaterial({
        color: MARKER,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      ringMats.push(ringMat);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(pos.clone().multiplyScalar(2));
      globe.add(ring);
      pulses.push({ mesh: ring, offset: i * 0.35 });

      if (!loc.hq) {
        const start = toVector(HQ.lat, HQ.lng, 1.005);
        const mid = start.clone().add(pos).multiplyScalar(0.5);
        mid.setLength(1 + start.distanceTo(pos) * 0.35);
        const curve = new THREE.QuadraticBezierCurve3(start, mid, pos);
        const arc = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)),
          arcMat
        );
        globe.add(arc);
      }
    });

    // Face the head office towards the camera.
    const baseRotation = THREE.MathUtils.degToRad(-90 - HQ.lng);
    globe.rotation.y = baseRotation;

    let dragging = false;
    let lastX = 0;
    let velocity = 0;
    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      renderer.domElement.style.cursor = 'grabbing';
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      globe.rotation.y += dx * 0.006;
      velocity = dx * 0.006;
    };
    const onUp = () => {
      dragging = false;
      renderer.domElement.style.cursor = 'grab';
    };
    renderer.domElement.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);

    const resize = () => {
      const size = mount.clientWidth;
      renderer.setSize(size, size);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clock = new THREE.Clock();
    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!dragging) {
        velocity *= 0.95;
        globe.rotation.y += velocity + (reduceMotion ? 0 : 0.0012);
      }
      pulses.forEach(({ mesh, offset }) => {
        const p = ((t + offset) % 2) / 2;
        mesh.scale.setScalar(1 + p * 2.5);
        (mesh.material as THREE.MeshBasicMaterial).opacity = (1 - p) * 0.6;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      renderer.domElement.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      texture.dispose();
      sphere.geometry.dispose();
      (sphere.material as THREE.Material).dispose();
      markerGeo.dispose();
      hqGeo.dispose();
      ringGeo.dispose();
      markerMat.dispose();
      arcMat.dispose();
      ringMats.forEach((m) => m.dispose());
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="global-presence" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
              Our Presence
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-gray-900 tracking-tight">
              Global <span className="text-gold-500">Reach</span>
            </h2>
            <div className="h-0.5 w-16 bg-gold-500" />
            <p className="font-sans text-[15px] text-gray-600 leading-relaxed max-w-md">
              Headquartered in {HQ.city}, Gujarat &mdash; Zolon delivers premium architectural
              hardware &amp; aluminum glass railing systems to clients across India and beyond.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <div className="font-sans font-bold text-3xl text-gray-900">{CITY_COUNT}+</div>
              <div className="font-sans text-xs text-gray-500 mt-1">Cities Served</div>
            </div>
            <div>
              <div className="font-sans font-bold text-3xl text-gray-900">{COUNTRY_COUNT}+</div>
              <div className="font-sans text-xs text-gray-500 mt-1">
                {COUNTRY_COUNT === 1 ? 'Country' : 'Countries'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {LOCATIONS.map((loc) => (
              <span
                key={loc.city}
                className="inline-flex items-center gap-1.5 rounded-full border border-gold-200 bg-gold-50 px-4 py-2 font-sans text-[13px] font-medium text-gray-800"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-600" />
                {loc.city}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-lg border border-gray-100">
            <MapPin className="w-5 h-5 text-gold-600" />
            <div>
              <div className="font-sans text-sm font-bold text-gray-900">{HQ.city}</div>
              <div className="font-sans text-xs text-gray-500">{HQ.country} &mdash; Head Office</div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[560px] mx-auto">
          <div className="absolute inset-8 rounded-full bg-gold-500/20 blur-3xl" />
          <div ref={mountRef} className="relative w-full aspect-square" />
        </div>
      </div>
    </section>
  );
}
