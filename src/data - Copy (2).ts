/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, TimelineItem, StatItem, ProjectItem, TestimonialItem } from './types';
import zcr01r from './assets/products/photo2.jpg';
import zcr01 from './assets/products/zcr01.jpg';
import zcr02Image from './assets/products/photo3.jpg';
import zcr03Image from './assets/products/photo4.jpg';
import zcr04Image from './assets/products/photo5.jpg';
import zcr05Image from './assets/products/photo6.jpg';
import zcr01aImage from './assets/products/zbc01a.jpg';
import zcr4Image from './assets/products/zcr04.jpg';


export const PRODUCTS: Product[] = [
  {
    id: 'zcr-02',
    name: 'Slope ZCR-02',
    category: 'continue-systems',
    description: 'Oval and angled continue system rail profile engineered for maximum unobstructed views. Corrosion-resistant, lightweight, and quick to install, it suits both indoor and outdoor residential or public installations.',
    productimage: zcr02Image,
    image: zcr02Image,
    features: [
      'Architectural aesthetics from an oval and angled rail profile',
      'Aesthetic design with maximum view',
      'Easy installation saves workmanship and time',
      'Ideal for indoor and outdoor use'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    },
    information: [
      'The sturdy construction and high-quality materials make this railing the perfect investment for any homeowner',
      'Corrosion resistance and light weight extend to an easy to maintain, attractive design',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-03',
    name: 'Large ZCR-03',
    category: 'continue-systems',
    description: 'Heavy-duty continue system profile with aluminium cladding and a stainless steel effect, engineered for high-rise buildings and public-area applications. Offers easy glass installation and can be run frameless.',
    productimage: zcr03Image,
    image: zcr03Image,
    features: [
      'Easy glass installation',
      'Can be used in high-rise buildings',
      'Aluminium cladding with a stainless steel effect',
      'For application in the public area'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile with Stainless Steel Effect Cladding',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 4 ft (48") toughened glass, frameless compatible'
    },
    information: [
      'A sturdy railing that can be used to protect people from the side of a staircase or a balcony',
      'Aluminum railing will not corrode, making it the perfect material for a railing that will last',
      'This profile comes in 12 ft length',
      'Profile is compatible for upto 4 ft height of glass and can also be used frameless'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': 'both', 'Unlimited': 'both' } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': 'both', 'Unlimited': true } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } }
      ]
    }
  },
  {
    id: 'zcr-04',
    name: 'Heavy ZCR-04',
    category: 'continue-systems',
    description: 'Sleek and simple continue system profile made of sturdy aluminium, suited for commercial or residential porch and balcony applications, with slim-line, low-maintenance styling.',
    productimage: zcr4Image,
    image: zcr4Image,
    features: [
      'Slim line, elegant design and low maintenance',
      'Can be used in interior and exterior',
      'Suitable for concrete floor and steel construction',
      'For applications in the public area'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 4 ft (48") toughened glass, frameless compatible'
    },
    information: [
      'This railing is made of sturdy aluminium and will be a beautiful addition to any porch; the design is sleek and simple',
      'Perfect for any commercial or residential application and will not rust, rot or corrode',
      'This profile comes in 12 ft length',
      'Profile is compatible for upto 4 ft height of glass and can also be used frameless'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': 'both', 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': true } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': true } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': true } }
      ]
    }
  },
  {
    id: 'zcr-05',
    name: 'Medium ZCR-05',
    category: 'profile-system',
    description: 'Concealed profile, top mount railing system with slim-line, elegant styling. Top, ceiling, or conceal-mounted for high structural strength and maximum security, optimally suited for concrete upstand applications.',
    productimage: zcr05Image,
    image: zcr05Image,
    features: [
      'Top, ceiling, and conceal mounting',
      'High structural strength provides maximum security',
      'Slim line, elegant design and low maintenance',
      'Optimally suited for concrete upstand'
    ],
    specs: {
      material: 'Extruded Aluminium Concealed/Top Mount Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3.5 ft (42") toughened glass, frameless compatible'
    },
    information: [
      'This railing is built to be both elegant and functional, and is easy to install',
      'The best part is that this railing is maintenance-free and will never rust',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3.5 ft height of glass and can also be used frameless'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-06',
    name: 'Small ZCR-06',
    category: 'continue-systems',
    description: 'Light and slim aluminium continue system railing, a space-saving and minimalist solution for areas where traditional railing cannot be installed.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Space saving and minimalist design',
      'Economical with good aesthetic design',
      'Specially for residence, hotels and public area',
      'Ideal for indoor and outdoor'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    },
    information: [
      'The light and slim aluminium railing is a perfect solution for areas where traditional railing can\'t be installed',
      'Aluminum railing will not corrode, making it the perfect material for a railing that will last',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': null, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-07',
    name: 'Slope Continue Railing Strip Ferry ZCR-07',
    category: 'continue-systems',
    description: 'Oval and angled continue system rail profile with an attractive strip ferry design, delivering good aesthetics with sturdy, corrosion-resistant construction.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Architectural aesthetics by oval and angled rail profile',
      'Aesthetic design with maximum view',
      'Easy installation saves workmanship and time',
      'Ideal for indoor and outdoor'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    },
    information: [
      'The sturdy construction and high-quality materials make this railing the perfect investment for any homeowner',
      'Corrosion resistance and light weight extend to an easy to maintain, attractive design',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-08',
    name: 'Easy Line Bottom Railing Profile ZCR-08',
    category: 'continue-systems',
    description: 'Light and slim aluminium continue system railing profile with a space-saving, minimalist design, ideal for residential indoor applications.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Space saving and minimalist design',
      'Ideal for indoor',
      'Specially for residence',
      'Economical with good aesthetic design'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    },
    information: [
      'The light and slim aluminium railing is a perfect solution for areas where traditional railing can\'t be installed',
      'Aluminum railing will not corrode, making it the perfect material for a railing that will last',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': null, '32 Feet': null, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': null, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-10',
    name: '100×37mm Bottom Railing Profile ZCR-10',
    category: 'continue-systems',
    description: 'Concealed, top-mount continue system railing profile with a 100×37mm bottom section, built to be elegant, functional, and easy to install.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Top, ceiling, and conceal mounting',
      'High structural strength provides maximum security',
      'Slim line, elegant design and low maintenance',
      'Optimally suited for concrete upstand'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3.5 ft (42") toughened glass, frameless compatible'
    },
    information: [
      'This railing is built to be both elegant and functional, and is easy to install',
      'The best part is that this railing is maintenance-free and will never rust',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3.5 ft height of glass and can also be used frameless'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-11',
    name: 'Step Bottom Railing Profile ZCR-11',
    category: 'continue-systems',
    description: 'Heavy-duty continue system profile with aluminium cladding and a stainless steel effect, designed to protect people from the side of a staircase or balcony.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Easy glass installation',
      'Can be used in high-rise buildings',
      'Aluminium cladding with a stainless steel effect',
      'For application in the public area'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile with Stainless Steel Effect Cladding',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 4 ft (48") toughened glass, frameless compatible'
    },
    information: [
      'A sturdy railing that can be used to protect people from the side of a staircase or a balcony',
      'Aluminum railing will not corrode, making it the perfect material for a railing that will last',
      'This profile comes in 12 ft length',
      'Profile is compatible for upto 4 ft height of glass and can also be used frameless'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-14',
    name: '86×50mm Medium Continue Railing Profile ZCR-14',
    category: 'continue-systems',
    description: 'Concealed, top-mount 86×50mm continue system railing profile built to be elegant, functional, and easy to install, optimally suited for concrete upstand applications.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Top, ceiling, and conceal mounting',
      'High structural strength provides maximum security',
      'Slim line, elegant design and low maintenance',
      'Optimally suited for concrete upstand'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3.5 ft (42") toughened glass, frameless compatible'
    },
    information: [
      'This railing is built to be both elegant and functional, and is easy to install',
      'The best part is that this railing is maintenance-free and will never rust',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3.5 ft height of glass and can also be used frameless'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': true } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-15',
    name: '120×45mm Side Mount Continue Railing Profile ZCR-15',
    category: 'continue-systems',
    description: 'Side mount 120×45mm continue system railing profile designed to look completely frameless, offering clear views from areas enclosed by floor.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Clear views from areas enclosed by floor',
      'Slim line, elegant design and low maintenance',
      'Space saving minimalist design',
      'High resistance to deformation provides high strength to the system'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3.5 ft (42") toughened glass'
    },
    information: [
      'This profile is designed in a way that completely looks frameless',
      'The best part is that this railing is maintenance-free and will never rust',
      'This system available in 12 ft length',
      'Profile is compatible for upto 3.5 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': 'both', 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-16',
    name: '90×55mm Concealed Continue Railing Profile ZCR-16',
    category: 'continue-systems',
    description: 'Concealed 90×55mm continue system railing profile, built to be elegant and functional, optimally suited for concrete upstand applications with top, ceiling, or conceal mounting.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Top, ceiling, and conceal mounting',
      'High structural strength provides maximum security',
      'Optimally suited for concrete upstand',
      'Slim line, elegant design and low maintenance'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3.5 ft (42") toughened glass, frameless compatible'
    },
    information: [
      'This railing is built to be both elegant and functional, and is easy to install',
      'The best part is that this railing is maintenance-free and will never rust',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3.5 ft height of glass and can also be used frameless'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-19',
    name: '105×55mm Bottom Continue Railing Profile ZCR-19',
    category: 'continue-systems',
    description: 'Bottom-mount 105×55mm continue system railing profile designed to look completely frameless, suited for interior and exterior public area applications.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Slim line, elegant design and low maintenance',
      'Can be used in interior and exterior',
      'Suitable for concrete floor and steel construction',
      'For applications in the public area'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3.5 ft (42") toughened glass'
    },
    information: [
      'This profile is designed in a way that completely looks frameless',
      'The best part is that this railing is maintenance-free and will never rust',
      'This system available in 16 ft length',
      'Profile is compatible for upto 3.5 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-20',
    name: '90×50mm LED Bottom Continue Railing Profile ZCR-20',
    category: 'continue-systems',
    description: 'Precision engineered 90×50mm continue system railing profile with an integrated LED bottom rail in premium aluminium, ideal for indoor and outdoor use in residences, hotels, and public areas.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Precision engineered elegance — integrated LED bottom rail in premium aluminium',
      'Specially for residence, hotels and public area',
      'Ideal for indoor and outdoor'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile with Integrated LED Bottom Rail',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3.5 ft (42") toughened glass'
    },
    information: [
      'This railing is built to be both elegant and functional, and is easy to install',
      'The best part is that this railing is maintenance-free and will never rust',
      'This profile comes in 16 ft length',
      'Profile is compatible for upto 3.5 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': 'both', 'Unlimited': 'both' } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': 'both', 'Unlimited': true } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': true } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-21',
    name: '120×60mm Bottom Continue Railing Profile ZCR-21',
    category: 'continue-systems',
    description: 'Bottom-mount 120×60mm continue system railing profile designed to look completely frameless, offering clear views from areas enclosed by floor.',
    productimage: zcr01aImage,
    image: zcr01aImage,
    features: [
      'Clear views from areas enclosed by floor',
      'Slim line, elegant design and low maintenance',
      'Space saving minimalist design',
      'High resistance to deformation provides high strength to the system'
    ],
    specs: {
      material: 'Extruded Aluminium Continue Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3.5 ft (42") toughened glass'
    },
    information: [
      'This profile is designed in a way that completely looks frameless',
      'The best part is that this railing is maintenance-free and will never rust',
      'This system available in 12 ft length',
      'Profile is compatible for upto 3.5 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
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
    },
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zbc-01b',
    name: 'Step Bottom ZBC-01B',
    productimage: zcr01aImage,
    category: 'bracket-cover-system',
    description: 'Square-cover bracket-cover railing system, an attractive and sturdy alternative to standard metal railing for any deck or patio, suitable for interior and exterior public applications.',
    image: zcr05Image,
    features: [
      'Premium design in the segment',
      'Can be used in interior and exterior settings',
      'Suitable for concrete floor and steel construction',
      'Maintenance-free and will never rust',
      'Bracket covered with continue profile, maximum length 16 ft; best used with brackets every 2.5 ft'
    ],
    specs: {
      material: 'Extruded Aluminium Bracket-Cover Profile',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    },
    information: [
      'A square cover aluminium railing is an attractive and sturdy railing for any deck or patio',
      'The best part is that this railing is maintenance-free and will never rust',
      'Bracket covered with continue profile, maximum length of 16 ft',
      'Profile is compatible for upto 3 ft height of glass'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zcr-01',
    name: 'Diamond ZCR-01',
    productimage: zcr01r,
    category: 'continue-systems',
    description: 'Space-saving continue system railing profile with a minimalist, economical design. Sturdy, easy to install, and completely maintenance-free, it is ideal for residences, hotels, and public areas in both indoor and outdoor settings.',
    image: zcr01,
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
  }
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
