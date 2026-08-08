/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, Info, Check, ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ProductImageGallery from '../components/ProductImageGallery';
import SEO from '../components/SEO';
import { PRODUCTS } from '../data';

const Tick = ({ type }: { type: string | boolean | null | undefined }) => {
  if (!type) return null;

  return (
    <div className="flex justify-center items-center">
      {(type === 'gold' || type === 'both' || type === true) && (
        <Check
          className={`w-4 h-4 text-amber-500 stroke-[3] ${type === 'both' ? '-mr-2' : ''
            }`}
        />
      )}

      {(type === 'blue' || type === 'both') && (
        <Check className="w-4 h-4 text-sky-500 stroke-[3]" />
      )}
    </div>
  );
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const relatedProducts = product
    ? [
      ...PRODUCTS.filter((p) => p.id !== product.id && p.category !== product.category),
      ...PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category),
    ].slice(0, 3)
    : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <SEO
          title="Product Not Found | Zolon Hardware"
          description="The architectural hardware product you're looking for could not be found. Browse ZOLON's full catalog of railing systems, door fittings, and accessories."
        />
        <Header />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
          <h1 className="font-sans font-bold text-2xl text-gray-900">Product Not Found</h1>
          <p className="font-sans text-sm text-gray-500 mt-2">
            We couldn't find the model you're looking for.
          </p>
          <Link
            to="/"
            className="mt-6 bg-gray-900 hover:bg-gold-500 text-white font-sans font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-sm transition-all"
          >
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${product.name} | Zolon Hardware`}
        description={product.description}
      />
      <Header />

      {/* Hero-style Product Banner */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden bg-gray-950">
        <div className="absolute inset-0 z-0 select-none">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90" />
        </div>

        <div className="relative z-10 text-center px-6 pt-16">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-400 font-bold uppercase block mb-3">
            Product Specifications Blueprint
          </span>
          <h1 className="font-sans font-black text-4xl sm:text-5xl text-white uppercase tracking-tight">
            {product.name}
          </h1>
        </div>
      </section>

      <main className="pt-16 pb-24 max-w-6xl mx-auto px-6">
        <Link
          to="/"
          state={{ scrollTarget: 'products' }}
          className="inline-flex items-center space-x-2 text-xs font-sans font-semibold tracking-wider uppercase text-gray-500 hover:text-gold-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-12 items-start">
          {/* Left: Sticky Image Gallery */}
          <div className="lg:sticky lg:top-28">
            <ProductImageGallery
              images={Array.from(new Set([product.image, product.productimage].filter(Boolean))) as string[]}
              alt={product.name}
            />
          </div>

          {/* Right: Scrolling Content */}
          <div className="space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-sans font-bold text-sm text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                <Info className="w-4 h-4 text-gold-500" />
                <span>Product Overview</span>
              </h2>
              <p className="font-sans text-sm text-gray-800 leading-relaxed font-regular">
                {product.description}
              </p>
              <div className="flex items-center space-x-2 text-xs text-emerald-700 font-semibold bg-emerald-50 px-3 py-1.5 border border-emerald-100 rounded-sm w-fit">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="font-sans text-[10px]">Passed Marine Grade Salt-Spray testing</span>
              </div>
            </div>

            {/* Core Features */}
            <div className="space-y-3 border-t border-gray-200 pt-8">
              <h2 className="font-sans font-bold text-sm text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                <Info className="w-4 h-4 text-gold-500" />
                <span>Core Features & Design Advantages</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 font-sans text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 mt-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>


            {/* Recommended Railing Length Chart */}
            {product.chart && (
              <div className="space-y-3 border-t border-gray-200 pt-8">
                <div className="overflow-x-auto border border-gray-300">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr>
                        <th
                          colSpan={product.chart.columns.length + 1}
                          className="border bg-gray-100 py-2 font-sans font-bold text-sm text-gray-800 uppercase tracking-wider"
                        >
                          {product.chart.title}
                        </th>
                      </tr>

                      <tr>
                        <th className="border bg-gray-50"></th>
                        <th
                          colSpan={product.chart.columns.length}
                          className="font-sans border bg-gray-50 py-2 font-semibold"
                        >
                          Balcony Length
                        </th>
                      </tr>

                      <tr>
                        <th className="font-sans border bg-gray-100 py-2">
                          Glass Height
                        </th>

                        {product.chart.columns.map((column) => (
                          <th
                            key={column}
                            className="font-sans border bg-gray-100 py-2"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {product.chart.rows.map((row) => (
                        <tr key={row.glass_height}>
                          <td className="font-sans border bg-gray-50 font-medium text-center py-2">
                            {row.glass_height}
                          </td>

                          {product.chart!.columns.map((column) => (
                            <td
                              key={column}
                              className="font-sans border text-center py-2"
                            >
                              <Tick type={row.balcony_length[column]} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start justify-between space-y-2 pt-0 min-w-[220px]">
                  <div className="flex items-center gap-3">
                    <div className="flex">
                      <Check className="w-5 h-5 text-amber-500 stroke-[3] -mr-2" />
                      <Check className="w-5 h-5 text-amber-500 stroke-[3]" />
                    </div>
                    <p className="font-sans font-semibold text-gray-800">
                      Strength with Handrail
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex">
                      <Check className="w-5 h-5 text-sky-500 stroke-[3] -mr-2" />
                      <Check className="w-5 h-5 text-sky-500 stroke-[3]" />
                    </div>
                    <p className="font-sans font-semibold text-gray-800">
                      Strength without Handrail
                    </p>
                  </div>
                </div>
              </div>
            )}

            {product.information && (
              <div className="space-y-3 border-t border-gray-200 pt-8">
                <h2 className="font-sans font-bold text-sm text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                  <Info className="w-4 h-4 text-gold-500" />
                  <span>Why Choose {product.name}? </span>
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                  {product.information.map((information, idx) => (
                    <li key={idx} className="flex items-start space-x-2.5 font-sans text-sm text-gray-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0 mt-2" />
                      <span>{information}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Comprehensive Spec Matrix */}
            <div className="space-y-3 border-t border-gray-200 pt-8">
              <h2 className="font-sans font-bold text-sm text-gray-800 uppercase tracking-wider flex items-center space-x-2">
                <Info className="w-4 h-4 text-gold-500" />
                <span>Technical Architecture Specs</span>
              </h2>
              <div className="bg-gray-50 border border-gray-100 rounded-sm divide-y divide-gray-100 text-sm font-sans">
                <div className="grid grid-cols-3 p-4">
                  <span className="font-semibold text-gray-700 col-span-1">Base Material</span>
                  <span className="text-gray-600 col-span-2">{product.specs.material}</span>
                </div>
                <div className="grid grid-cols-3 p-4">
                  <span className="font-semibold text-gray-700 col-span-1">Finish / Coating</span>
                  <span className="text-gray-600 col-span-2">{product.specs.finish}</span>
                </div>
                {product.specs.loadCapacity && (
                  <div className="grid grid-cols-3 p-4">
                    <span className="font-semibold text-gray-700 col-span-1">Wind & Load Capacity</span>
                    <span className="text-gray-600 col-span-2 font-sans">{product.specs.loadCapacity}</span>
                  </div>
                )}
                {product.specs.glassThickness && (
                  <div className="grid grid-cols-3 p-4">
                    <span className="font-semibold text-gray-700 col-span-1">Glass Compatibility</span>
                    <span className="text-gray-600 col-span-2 font-sans">{product.specs.glassThickness}</span>
                  </div>
                )}
                {product.specs.durability && (
                  <div className="grid grid-cols-3 p-4">
                    <span className="font-semibold text-gray-700 col-span-1">Lifecycle Rating</span>
                    <span className="text-gold-700 font-semibold col-span-2">{product.specs.durability}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CAD Drawings Mock Area */}
            <div className="bg-amber-50/40 border border-amber-100 p-5 rounded-sm text-center">
              <p className="font-sans text-sm text-amber-800 leading-normal font-medium">
                <strong>Architect Support:</strong> For AutoCAD DWG files, 3D Revit families, or high-tensile anchor sizing matrices, please contact our engineering desk via the form below or email <strong>engineering@zolonhardware.com</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {
          relatedProducts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-gray-100">
              <h2 className="font-sans font-bold text-2xl text-gray-900 uppercase tracking-tight mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} showSpecs={false} />
                ))}
              </div>
            </div>
          )
        }
      </main >

      <Footer />
    </div >
  );
}
