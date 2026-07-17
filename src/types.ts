/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: 'railings' | 'door-hardware' | 'bathroom-fittings' | 'glass-fittings';
  description: string;
  image: string;
  features: string[];
  specs: {
    material: string;
    finish: string;
    loadCapacity?: string;
    glassThickness?: string;
    durability?: string;
  };
}

export interface TimelineItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}
