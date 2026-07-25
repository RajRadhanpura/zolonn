/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface RailingChartRow {
  glass_height: string;
  balcony_length: Record<string, boolean | 'gold' | 'both' | null>;
}

export interface RailingChart {
  title: string;
  columns: string[];
  rows: RailingChartRow[];
}

export interface Product {
  id: string;
  name: string;
  category: 'continue-systems' | 'profile-system' | 'bracket-cover-system' | 'glass-fittings';
  description: string;
  image: string;
  productimage?: string;
  features: string[];
  information?: string[];
  specs: {
    material: string;
    finish: string;
    loadCapacity?: string;
    glassThickness?: string;
    durability?: string;
  };
  chart?: RailingChart;
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
