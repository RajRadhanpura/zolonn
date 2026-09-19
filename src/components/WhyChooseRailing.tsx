/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Factory, Users2, HardHat } from 'lucide-react';

const POINTS = [
  {
    icon: Factory,
    text: 'In-house design, tooling and production for end-to-end control over Aluminum Railing quality.'
  },
  {
    icon: HardHat,
    text: 'Experienced team familiar with balcony railing, staircase railing, terrace railing and commercial glass railing requirements.'
  },
  {
    icon: Users2,
    text: 'Support for architects, interior designers, builders and homeowners in Rajkot seeking reliable Aluminum Glass Railing solutions.'
  }
];

const COMPARISON: [string, string, string][] = [
  ['Aluminium Grade', '100% 6063 grade aluminium suitable for anodizing', 'Mixed scrap extrusion or recycled aluminium, in which anodizing quality is not possible'],
  ['Structural Strength', 'Top 1.6 mm, bottom channel 2.0–3.2 mm, heavy sections', 'Lighter sections and inconsistent gauge'],
  ['Replacement Risk', 'We have our own extrusion plant, so we offer stable and consistent product availability', 'Profile may change frequently due to procuring from many different sources'],
  ['Surface Finish', 'Anodized finish available with superior durability, uniform and long lasting', 'Limited or poor anodizing due to mixed alloy composition with uneven finish'],
  ['Powder Coating Brand', 'Uses branded powders from Jotun / AkzoNobel approved applicators', 'Uses local or non-branded powder coating'],
  ['Powder Coating Process', 'In-house process with controlled application', 'Uncontrolled local powder application'],
  ['Powder Coating Warranty', '15–20 years written warranty', 'Verbal assurance only'],
  ['UV Resistance', 'High UV-resistant coating', 'Fading and chalking over time'],
  ['Testimony', 'Tested as per standards with approved lab', 'Often not tested'],
  ['EPDM Quality', 'Virgin-grade EPDM, temperature resistant', 'Non-standard EPDM, may crack/break'],
  ['Fitting Accessories', 'Virgin ABS packers, unbreakable', 'Non-ABS packers, may break during installation'],
  ['Maintenance Requirement', 'Low maintenance and long service life', 'Frequent repairs and maintenance due to non-standard material and design']
];

export default function WhyChooseRailing() {
  return (
    <section id="why-choose-railing" className="py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="font-sans text-[10px] tracking-[0.25em] text-gold-600 font-bold uppercase block">
            Built On Trust
          </span>
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Why Choose Zolon for Aluminum Railing
          </h2>
          <div className="h-0.5 w-16 bg-gold-500 mx-auto" />
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-gray-200 bg-white">
          {POINTS.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="border-r border-b border-gray-200 p-8 hover:bg-gold-50/20 transition-all duration-300 space-y-4"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gold-500/10 rounded-none shrink-0 border border-gold-500/30">
                  <Icon className="w-5 h-5 text-gold-600" />
                </div>
                <p className="font-sans text-[14px] text-gray-800 font-medium leading-relaxed">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div> */}

        <div className="mt-16 overflow-x-auto">
          <table className="w-full min-w-[720px] border border-gray-200 bg-white text-left">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="font-sans text-[11px] tracking-[0.15em] uppercase font-bold p-4 w-1/4">Feature</th>
                <th className="font-sans text-[11px] tracking-[0.15em] uppercase font-bold p-4 w-[37.5%] text-gold-500">Zolon Railing System</th>
                <th className="font-sans text-[11px] tracking-[0.15em] uppercase font-bold p-4 w-[37.5%]">Other Glass Railing Companies</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([feature, zolon, other]) => (
                <tr key={feature} className="border-t border-gray-200 hover:bg-gold-50/20 transition-colors">
                  <td className="font-sans text-[12px] font-bold uppercase tracking-wide text-gray-900 p-4 align-top">{feature}</td>
                  <td className="font-sans text-[14px] text-gray-800 p-4 align-top border-l border-gray-200">{zolon}</td>
                  <td className="font-sans text-[14px] text-gray-800 p-4 align-top border-l border-gray-200">{other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
