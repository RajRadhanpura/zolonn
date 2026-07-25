/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, TimelineItem, StatItem, ProjectItem, TestimonialItem } from './types';
import zcr01Image from './assets/products/photo2.jpg';
import zcr01pImage from './assets/products/zcr01.jpg';
import zcr02Image from './assets/products/photo3.jpg';
import zcr03Image from './assets/products/photo4.jpg';
import zcr04Image from './assets/products/photo5.jpg';
import zcr05Image from './assets/products/photo6.jpg';
import zcr01aImage from './assets/products/zbc01a.jpg';


export const PRODUCTS: Product[] = [
  {
    id: 'zbc-01a',
    name: 'Step Bottom ZBC-01A',
    productimage: zcr01aImage,
    category: 'bracket-cover-system',
    description: 'Bracket-cover railing system with a slope design for a perfect aesthetic view. An attractive, corrosion-free alternative to standard metal railing, suitable for concrete floor and steel construction in interior or exterior public applications.',
    image: zcr05Image,
    features: [
      'Slope design for perfect aesthetic view',
      'Can be used in interior and exterior settings',
      'Suitable for concrete floor and steel construction',
      'Will not rust, rot, or corrode; perfect for commercial or residential use',
      'Bracket covered with continue profile, maximum length 16 ft; best used with brackets every 2.5 ft'
    ],
    specs: {
      material: 'Extruded Aluminium Bracket-Cover Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      loadCapacity: 'Up to 24" glass height (with handrail) on 16-32 ft spans; 24"-42" glass height rated without handrail on 16-48 ft spans',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    }
  },
  {
    id: 'zcr-05',
    name: 'Medium ZCR-05',
    productimage: zcr01aImage,
    category: 'profile-system',
    description: 'Concealed profile, top mount railing system with slim-line, elegant styling. Top, ceiling, or conceal-mounted for high structural strength and maximum security, optimally suited for concrete upstand applications.',
    image: zcr04Image,
    features: [
      'Top, ceiling, and conceal mounting',
      'High structural strength provides maximum security',
      'Slim line, elegant design and low maintenance',
      'Optimally suited for concrete upstand',
      'Profile comes in 16 ft lengths, compatible with up to 3.5 ft glass height, and can also be used frameless'
    ],
    specs: {
      material: 'Extruded Aluminium Concealed/Top Mount Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      loadCapacity: 'Up to 24" glass height (with handrail) on 16 ft spans; 24"-42" glass height rated without handrail on 16-48 ft spans',
      glassThickness: 'Up to 3.5 ft (42") toughened glass, frameless compatible'
    }
  },
  {
    id: 'zcr-03',
    name: 'Large ZCR-03',
    category: 'continue-systems',
    description: 'Heavy-duty continue system profile with aluminium cladding and a stainless steel effect, engineered for high-rise buildings and public-area applications. Offers easy glass installation and can be run frameless.',
    image: zcr03Image,
    features: [
      'Easy glass installation',
      'Can be used in high-rise buildings',
      'Aluminium cladding with a stainless steel effect',
      'Corrosion-resistant; suited for public area applications',
      'Profile comes in 12 ft lengths, compatible with up to 4 ft glass height, and can also be used frameless'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile with Stainless Steel Effect Cladding',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      loadCapacity: 'Up to 42" glass height (with handrail) on 16-32 ft spans; rated for unlimited balcony length (without handrail) at 24"-42" glass height',
      glassThickness: 'Up to 4 ft (48") toughened glass, frameless compatible'
    }
  },
  {
    id: 'zcr-02',
    name: 'Slope ZCR-02',
    category: 'continue-systems',
    description: 'Oval and angled continue system rail profile engineered for maximum unobstructed views. Corrosion-resistant, lightweight, and quick to install, it suits both indoor and outdoor residential or public installations.',
    image: zcr02Image,
    features: [
      'Architectural aesthetics from an oval and angled rail profile',
      'Aesthetic design with maximum view',
      'Easy installation saves workmanship and time',
      'Sturdy, corrosion-resistant, and lightweight; comes in 16 ft lengths compatible with up to 3 ft (36") glass height'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      loadCapacity: 'Up to 30" glass height (with handrail) on 16 ft balcony spans; 24" glass height rated up to 48 ft spans (without handrail)',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    }
  },
  {
    id: 'zcr-01',
    name: 'Diamond ZCR-01',
    productimage: zcr01pImage,
    category: 'continue-systems',
    description: 'Space-saving continue system railing profile with a minimalist, economical design. Sturdy, easy to install, and completely maintenance-free, it is ideal for residences, hotels, and public areas in both indoor and outdoor settings.',
    image: zcr01Image,
    features: [
      'Space-saving and minimalist design',
      'Economical with good aesthetic appeal',
      'Sturdy and easy to install; maintenance-free and will never rust',
      'Profile supplied in 16 ft lengths, compatible with up to 3 ft (36") glass height'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      loadCapacity: 'Up to 42" glass height (with handrail) on 16 ft balcony spans; 24" glass height rated for unlimited balcony length',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    },
    information: [
      'This railing is both sturdy and easy to install, so you can create the perfect look with minimal hassle',
      'The best part is that this railing is maintenance-free and will never rust',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3 ft height of glass'
    ],
    chart:
    {
      "title": "Recommended Railing Length Chart",
      "columns": ["16 Feet", "32 Feet", "48 Feet", "Unlimited"],
      "rows": [
        {
          "glass_height": "24 Inch",
          "balcony_length": {
            "16 Feet": "both",
            "32 Feet": "gold",
            "48 Feet": "gold",
            "Unlimited": null
          }
        },
        {
          "glass_height": "30 Inch",
          "balcony_length": {
            "16 Feet": true,
            "32 Feet": true,
            "48 Feet": false,
            "Unlimited": false
          }
        },
        {
          "glass_height": "36 Inch",
          "balcony_length": {
            "16 Feet": true,
            "32 Feet": false,
            "48 Feet": false,
            "Unlimited": false
          }
        },
        {
          "glass_height": "42 Inch",
          "balcony_length": {
            "16 Feet": true,
            "32 Feet": false,
            "48 Feet": false,
            "Unlimited": false
          }
        }
      ]
    }
  },
  // {
  //   id: 's-500',
  //   name: 'Zolon Spigot S-500',
  //   category: 'railings',
  //   description: 'Ultra-premium floor mount spigot designed for heavy-duty structural glass railings. Self-draining, adjustable, and engineered to withstand extreme wind loads without cutting into glass.',
  //   image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=1200',
  //   features: [
  //     'No glass drilling required for installation',
  //     'Duplex 2205 Marine Grade Stainless Steel construction',
  //     'Corrosion-resistant gold PVD coating',
  //     'Supports 12mm to 19mm heavy toughened glass'
  //   ],
  //   specs: {
  //     material: 'Duplex 2205 Marine Grade Stainless Steel',
  //     finish: 'PVD Mirror Gold / Satin Brass / Matte Black',
  //     loadCapacity: 'Up to 3.5 kN/m (engineered for coastal winds)',
  //     glassThickness: '12mm - 19mm Toughened / Laminated'
  //   }
  // },
  // {
  //   id: 'p-10',
  //   name: 'Zolon Pivot-Lux P-10',
  //   category: 'glass-fittings',
  //   description: 'Premium self-closing hydraulic glass door pivot hinge. Offers dual speed adjustments, 90-degree hold-open, and pristine alignment controls concealed inside an ultra-slim plate.',
  //   image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
  //   features: [
  //     'Concealed high-pressure hydraulic core',
  //     'Dual-zone speed regulation (closing and latching)',
  //     '90° stay-open position for high-traffic corridors',
  //     'Exquisite PVD gold plating options'
  //   ],
  //   specs: {
  //     material: 'Forged Brass body with SUS 304 outer plates',
  //     finish: 'Champagne Gold / PVD Satin Gold / Matte Obsidian',
  //     durability: '500,000 cycles certified',
  //     glassThickness: '10mm - 12mm Tempered Glass'
  //   }
  // },
  // {
  //   id: 'h-75',
  //   name: 'Zolon Signature Lever H-75',
  //   category: 'door-hardware',
  //   description: 'Exquisitely engineered heavy-duty lever handle crafted from solid forged brass. Designed with a high-torque internal spring mechanism for a lifetime of perfectly crisp operation.',
  //   image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200',
  //   features: [
  //     'Precision solid-brass hand-polished construction',
  //     'Heavy-duty return spring core eliminates lever sag',
  //     'Compatible with euro-profile high-security locksets',
  //     'Textured luxury cross-knurled grip accent'
  //   ],
  //   specs: {
  //     material: 'Forged Solid Architectural Brass',
  //     finish: 'Satin Brass Gold / Brushed Champagne / Antique Gold',
  //     durability: 'Lifetime Structural Warranty'
  //   }
  // },
  // {
  //   id: 'h-200',
  //   name: 'Zolon HydroGlide H-200',
  //   category: 'bathroom-fittings',
  //   description: 'A minimalist sliding glass door system with whisper-quiet rollers and a structural circular header bar. Designed to elevate walk-in steam showers with clean visual lines.',
  //   image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200',
  //   features: [
  //     'Ultra-smooth whisper-quiet dual bearing wheels',
  //     'Heavy-wall round slide-track for structural support',
  //     'Soft-close door dampeners prevent glass vibrations',
  //     'Anti-jump safety locks ensure pristine operation'
  //   ],
  //   specs: {
  //     material: 'Solid Brass & SUS 304 Stainless Steel',
  //     finish: 'PVD Polished Gold / Satin Brass / Mirror Chrome',
  //     loadCapacity: 'Up to 65 kg door weight limit',
  //     glassThickness: '8mm - 10mm Toughened Glass'
  //   }
  // },
  // {
  //   id: 'm-90',
  //   name: 'Zolon SmartTouch M-90',
  //   category: 'door-hardware',
  //   description: 'High-security luxury smart lock featuring immediate 3D fingerprint recognition, dynamic scramble-pad codes, and mechanical override keys in a pristine brass housing.',
  //   image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200',
  //   features: [
  //     'Advanced 3D capacitive scanner unlocks in 0.28 seconds',
  //     'Scrambled PIN codes prevent passenger observation',
  //     'Gold PVD weather-proof casing (IP65 rated)',
  //     'Fail-safe Type-C emergency power terminal'
  //   ],
  //   specs: {
  //     material: 'High-density zinc alloy & Solid Forged Brass',
  //     finish: 'Champagne Gold with High-Gloss Acrylic panel',
  //     durability: 'Grade 1 Security Certification'
  //   }
  // },
  // {
  //   id: 'c-40',
  //   name: 'Zolon GlassClaw C-40',
  //   category: 'railings',
  //   description: 'Heavy-duty steel-core standoff bracket crafted for side-mounting laminated structural glass stairs. Features full adjustment controls for seamless, ultra-precise glass alignment.',
  //   image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200',
  //   features: [
  //     'Double-axial alignment control adjustable from front',
  //     'Heavy-duty internal structural steel core',
  //     'Includes high-performance silicone safety dampeners',
  //     'Supplied with M12 high-tensile epoxy anchor bolts'
  //   ],
  //   specs: {
  //     material: 'Grade 316 Marine Stainless Steel',
  //     finish: 'Mirror Gold / Satin Stainless',
  //     loadCapacity: 'Up to 4.2 kN per standoff point',
  //     glassThickness: '12mm - 21.5mm Toughened Laminated'
  //   }
  // }
];

export const TIMELINE: TimelineItem[] = [
  {
    step: '01',
    title: 'Consultation & Specifying',
    subtitle: 'Tailoring Structural Demands',
    description: 'Our engineering consultants coordinate with your architects, review load-bearing requirements, and specify code-compliant fittings for your specific structural needs.'
  },
  {
    step: '02',
    title: 'Premium Alloys',
    subtitle: 'Pure Duplex 2205 & Solid Brass',
    description: 'We procure only certified, mill-tested materials. From Marine-grade Duplex 2205 to premium solid-lead-free forged brass, ensuring absolute corrosion resistance.'
  },
  {
    step: '03',
    title: 'Forging & CNC Milling',
    subtitle: 'Zero-Tolerance Manufacturing',
    description: 'Parts are forged at extremely high pressure and CNC-milled to ultra-fine tolerances within 0.1mm. High-precision machining prevents any structural wiggle over time.'
  },
  {
    step: '04',
    title: 'PVD Luster Finish',
    subtitle: 'Vaporized Durability',
    description: 'We apply Physical Vapor Deposition (PVD) gold in clean rooms. This produces a molecular bond that never flakes, chips, or tarnishes, even in extreme salt-air coastal environments.'
  },
  {
    step: '05',
    title: 'Architectural Support',
    subtitle: 'Site Checklists & Templates',
    description: 'We deliver comprehensive glass drilling templates, precise AutoCAD blueprints, and direct site engineering support so that installation runs flawlessly.'
  }
];

export const STATS: StatItem[] = [
  {
    value: '18+',
    label: 'Years of Engineering',
    sublabel: 'Dedicated exclusively to premium hardware'
  },
  {
    value: '2,500+',
    label: 'Elite Projects Completed',
    sublabel: 'Luxury hotels, private estates, high-rises'
  },
  {
    value: '0.1mm',
    label: 'Precision Tolerance',
    sublabel: 'High-precision CNC micro-forging process'
  },
  {
    value: '100%',
    label: 'Coastal Certified',
    sublabel: 'Duplex 2205 guaranteed anti-corrosive'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'The Grand Horizon Estate',
    category: 'Glass Railings & Custom Levers',
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200'
  },
  {
    id: 'proj-2',
    title: 'Apex Financial Tower',
    category: 'Structural Glass Patch Fittings',
    location: 'Singapore District',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200'
  },
  {
    id: 'proj-3',
    title: 'Onyx Marina Penthouse',
    category: 'Sliding Shower Systems & Pivots',
    location: 'Dubai Marina, UAE',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: 'Zolons spigots and structural hardware are the finest we have worked with. The PVD gold finish remains completely immaculate after three years in an oceanfront saltwater environment. Absolutely extraordinary.',
    author: 'Michael Vance',
    role: 'Lead Architect',
    company: 'Vance & Associates Malibu'
  },
  {
    quote: 'For luxury projects, tolerances are everything. Zolon products fit with micron precision. The self-closing hydraulic pivot system is smooth, quiet, and completely reliable. High-end construction requires this standard.',
    author: 'Samanatha Lin',
    role: 'Senior Project Developer',
    company: 'Apex Premium Build Group'
  }
];
