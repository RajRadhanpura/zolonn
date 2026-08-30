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
    id: 'zbc-02',
    name: 'Oval Shaped ZBC-02',
    category: 'bracket-cover-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Bracket-cover railing system with an oval and angled cover, easy to install without a professional, suitable for any commercial or residential application.',
    features: [
      'High structural strength provides maximum safety',
      'Strongest architectural by oval and angled cover',
      'Comfort with assembly and installation',
      'With the design it saves space'
    ],
    specs: {
      material: 'Extruded Aluminium Bracket-Cover Profile (Oval)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 4 ft (48") toughened glass'
    },
    information: [
      'Slope aluminium railing is also easy to install and does not require a professional to install',
      'Perfect for any commercial or residential application and will not rust, rot, or corrode',
      'Bracket covered with continue profile, maximum length of 16 ft',
      'Best used bracket at every 2.5 ft of distance'
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
    id: 'zbc-03',
    name: 'Heavy Bottom ZBC-03',
    category: 'bracket-cover-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Heavy-duty bracket-cover railing system suitable for deck and porch railings, engineered for frameless use even without a handrail.',
    features: [
      'Suitable for frameless system',
      'High structural strength provides maximum security',
      'No need a system for water drainage',
      'Specially for residence, hotels, high rise buildings'
    ],
    specs: {
      material: 'Extruded Aluminium Bracket-Cover Profile (Heavy Bottom)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 4 ft (48") toughened glass, frameless compatible'
    },
    information: [
      'This is the perfect solution for any type of railing, including deck railings and porch railings',
      'Corrosion resistance also extends to an easy to maintain, attractive design',
      'Bracket covered with continue profile, maximum length of 16 ft',
      'Best used bracket at every 2.5 ft of distance'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': 'both', 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': true } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zbc-04',
    name: 'Side Mounted ZBC-04',
    category: 'bracket-cover-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Side-mounted bracket-cover railing profile designed to look completely frameless, offering clear views from areas enclosed by floor.',
    features: [
      'Clear views from areas enclosed by floor',
      'Slim line, elegant design and low maintenance',
      'Space saving minimalist design',
      'High resistance to deformation provides high strength to the system'
    ],
    specs: {
      material: 'Extruded Aluminium Bracket-Cover Profile (Side Mounted)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 3 ft (36") toughened glass'
    },
    information: [
      'This profile is designed in a way that completely looks frameless',
      'The best part is that this railing is maintenance-free and will never rust',
      'Bracket covered with continue profile, maximum length of 16 ft',
      'Best used bracket at every 2.5 ft of distance'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': 'both', '48 Feet': 'both', 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zbr-01',
    name: 'Large Bottom ZBR-01',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Large bottom glass bracket system for balconies, stairs, and outdoor staircases, available in 70 mm and 140 mm bracket lengths.',
    features: [
      'Suitable for staircase and balcony',
      'Easy installation, easy maintenance',
      'Economical and compatible',
      'Perfect aesthetic view'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm / 140 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 1100 mm (43") toughened glass'
    },
    information: [
      'This is often a concern for people who live in homes that have balconies, stairs, or outdoor staircases',
      'Bracket lengths are available in 70 mm and 140 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': 'both', '32 Feet': true, '48 Feet': true, 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zbr-02',
    name: '"T" Type ZBR-02',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Clean-lined, minimalist T-type aluminium glass bracket, available in 70 mm length, mostly used in commercial buildings.',
    features: [
      'Economical and compatible',
      'Easy installation saves workmanship and time',
      'Space saving and minimalist design',
      'Mostly used in commercial buildings'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 1000 mm (39") toughened glass'
    },
    information: [
      'With its clean lines and minimalist design, the aluminium glass T bracket is the perfect way to complete your decor',
      'The bracket length is available in 70 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': true, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zbr-03',
    name: 'Step Bottom ZBR-03',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Sleek and modern step-bottom aluminium glass bracket mounting solution, available in 70 mm and 140 mm lengths.',
    features: [
      'Suitable for staircase and balcony',
      'Easy installation, easy maintenance',
      'Economical and compatible',
      'Perfect aesthetic view'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm / 140 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 1000 mm (39") toughened glass'
    },
    information: [
      'A slope aluminum glass bracket is a sleek and modern mounting solution for attaching a glass panel to a surface',
      'Bracket lengths are available in 70 mm and 140 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
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
    id: 'zbr-04',
    name: 'Diamond ZBR-04',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Diamond aluminium glass bracket crafted for light commercial and residential use, lightweight and strong.',
    features: [
      'Light commercial and residential use',
      'Economical design',
      'Widely used for stairs and balconies'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm / 140 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 900 mm (35") toughened glass'
    },
    information: [
      'This bracket is crafted from high-quality aluminum, and the design makes it lightweight and strong',
      'Bracket lengths are available in 70 mm and 140 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
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
    id: 'zbr-05',
    name: 'Ferry ZBR-05',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Ferry aluminium glass bracket, the perfect solution for mounting glass on a porch or balcony.',
    features: [
      'Light commercial and residential use',
      'Economical design',
      'Widely used for stairs and balconies'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm / 140 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 900 mm (35") toughened glass'
    },
    information: [
      'Our ferry glass aluminum bracket is the perfect solution for mounting glass on your porch or balcony',
      'Bracket lengths are available in 70 mm and 140 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
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
    id: 'zbr-06',
    name: '"L" Type ZBR-06',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Versatile and stylish L-shaped bottom glass bracket, available in 70 mm length, mostly used in commercial buildings.',
    features: [
      'Economical and compatible',
      'Easy installation saves workmanship and time',
      'Space saving and minimalist design',
      'Mostly used in commercial buildings'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 1000 mm (39") toughened glass'
    },
    information: [
      'The "L" shaped bottom glass bracket is a versatile and stylish bracket that can be used in many different ways',
      'The bracket length is available in 70 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
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
    id: 'zbr-07',
    name: 'Step ZBR-07',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Versatile square aluminium glass bracket suited for balcony and stairs applications seamlessly.',
    features: [
      'Suitable for staircase and balcony',
      'Easy installation, easy maintenance',
      'Economical and compatible',
      'Perfect aesthetic view'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm / 140 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 1000 mm (39") toughened glass'
    },
    information: [
      'The square aluminium glass bracket is a very versatile product that can be used in balcony and stairs seamlessly',
      'Bracket lengths are available in 70 mm and 140 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
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
    id: 'zbr-08',
    name: 'Oval ZBR-08',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Oval aluminium glass bracket with a sleek and elegant design, perfect for any modern home, commercial or residential use.',
    features: [
      'Suitable for staircase and balcony',
      'Easy installation, easy maintenance',
      'Economical and compatible',
      'Perfect aesthetic view'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm / 140 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 1200 mm (47") toughened glass'
    },
    information: [
      'The oval aluminium glass bracket is perfect for any modern home',
      'The sleek and elegant design of the bracket makes it perfect for both commercial and residential use',
      'Brackets can be used at every 3 ft of distance',
      'Designed for saving workmanship and time'
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
    id: 'zbr-10',
    name: '70mm Old Ferry Bracket ZBR-10',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Classic 70 mm ferry aluminium glass bracket, the perfect solution for mounting glass on a porch or balcony.',
    features: [
      'Light commercial and residential use',
      'Economical design',
      'Widely used for stairs and balconies'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm / 140 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 900 mm (35") toughened glass'
    },
    information: [
      'Our ferry glass aluminum bracket is the perfect solution for mounting glass on your porch or balcony',
      'Bracket lengths are available in 70 mm and 140 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
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
    id: 'zbr-11',
    name: 'Heavy ZBR-11',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Ultra-slender base-bottom bracket system that allows you to create balcony railing with endless view.',
    features: [
      'Suitable for staircase and balcony',
      'Easy installation, easy maintenance',
      'Economical and compatible',
      'Perfect aesthetic view'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm / 140 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 1300 mm (51") toughened glass'
    },
    information: [
      'Easy glass up ultra-slender and base bottom bracket system, allowing you to create balcony railing with endless view',
      'Bracket lengths are available in 70 mm and 140 mm',
      'Brackets can be used at every 3 ft of distance',
      'Designed for saving workmanship and time'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': true } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': null, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': null, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zbr-12',
    name: 'A Type Bottom Bracket ZBR-12',
    category: 'glass-fittings',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Clean-lined, minimalist A-type bottom aluminium glass bracket, available in 70 mm length, mostly used in commercial buildings.',
    features: [
      'Economical and compatible',
      'Easy installation saves workmanship and time',
      'Space saving and minimalist design',
      'Mostly used in commercial buildings'
    ],
    specs: {
      material: 'Cast Aluminium Glass Bracket (70 mm)',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden',
      glassThickness: 'Up to 1000 mm (39") toughened glass'
    },
    information: [
      'With its clean lines and minimalist design, the aluminium glass T bracket is the perfect way to complete your decor',
      'The bracket length is available in 70 mm',
      'Brackets can be used at every 2.5 ft of distance',
      'Designed for saving workmanship and time'
    ],
    chart: {
      title: 'Recommended Railing Length Chart',
      columns: ['16 Feet', '32 Feet', '48 Feet', 'Unlimited'],
      rows: [
        { glass_height: '24 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '30 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '36 Inch', balcony_length: { '16 Feet': true, '32 Feet': true, '48 Feet': true, 'Unlimited': null } },
        { glass_height: '42 Inch', balcony_length: { '16 Feet': null, '32 Feet': null, '48 Feet': null, 'Unlimited': null } }
      ]
    }
  },
  {
    id: 'zhr-01',
    name: 'ZHR-01 (50 mm) ROUND',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '50 mm ROUND handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-02',
    name: 'ZHR-02 (50 x 50 mm) SQUARE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '50 x 50 mm SQUARE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-03',
    name: 'ZHR-03 (65 x 45 mm) RECTANGLE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '65 x 45 mm RECTANGLE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-04',
    name: 'ZHR-04 (55 x 55 mm) ‘U’ TYPE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '55 x 55 mm ‘U’ TYPE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-05',
    name: 'ZHR-05 (80 x 35 mm) INCLINE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '80 x 35 mm INCLINE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-06',
    name: 'ZHR-06 (40 x 40 mm) SQUARE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '40 x 40 mm SQUARE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-07',
    name: 'ZHR-07 (25 x 25 mm) SLIM LINE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '25 x 25 mm SLIM LINE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-08',
    name: 'ZHR-08 (65 x 40 mm) CLUB',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '65 x 40 mm CLUB handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-09',
    name: 'ZHR-09 (70 x 35 mm) LED',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '70 x 35 mm LED handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-10',
    name: 'ZHR-10 (25 x 75 mm) RECTANGLE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '25 x 75 mm RECTANGLE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-11',
    name: 'ZHR-11 (32 x 32 mm) SLEEK HANDRAIL',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '32 x 32 mm SLEEK HANDRAIL handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-13',
    name: 'ZHR-13 (35 x 40 mm) EASY LINE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '35 x 40 mm EASY LINE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-14',
    name: 'ZHR-14 (83 x 38 mm) ROUND INCLINE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '83 x 38 mm ROUND INCLINE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-15',
    name: 'ZHR-15 (65 x 35 mm) DIAMOND',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '65 x 35 mm DIAMOND handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-16',
    name: 'ZHR-16 (70 x 30 mm) DUAL LED',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '70 x 30 mm DUAL LED handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-17',
    name: 'ZHR-17 (50 x 50 mm) LED HANDRAIL',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '50 x 50 mm LED HANDRAIL handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-18',
    name: 'ZHR-18 (50 x 35 mm) STAR',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '50 x 35 mm STAR handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-20',
    name: 'ZHR-20 (60 x 40 mm) RECTANGLE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '60 x 40 mm RECTANGLE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-21',
    name: 'ZHR-21 (17 x 19 mm) SLIM HANDRAIL',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '17 x 19 mm SLIM HANDRAIL handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-22',
    name: 'ZHR-22 (38 mm) ROUND HANDRAIL',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '38 mm ROUND HANDRAIL handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-23',
    name: 'ZHR-23 (38 x 38 mm) OCTAGON',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '38 x 38 mm OCTAGON handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-24',
    name: 'ZHR-24 (38 x 38 mm) RADIUS',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '38 x 38 mm RADIUS handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-25',
    name: 'ZHR-25 (38 mm) FULL ROUND HANDRAIL',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '38 mm FULL ROUND HANDRAIL handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-26',
    name: 'ZHR-26 (50 mm) FULL ROUND HANDRAIL',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '50 mm FULL ROUND HANDRAIL handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-27',
    name: 'ZHR-27 (40 x 40 mm) FULL SQUARE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '40 x 40 mm FULL SQUARE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-28',
    name: 'ZHR-28 (50 x 50 mm) FULL SQUARE',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '50 x 50 mm FULL SQUARE handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-29',
    name: 'ZHR-29 (25 x 25 mm) SQUARE PLAIN',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '25 x 25 mm SQUARE PLAIN handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zhr-32',
    name: 'ZHR-32 (40 x 40 mm) LED',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: '40 x 40 mm LED handrail profile.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zahc-01',
    name: 'ZAHC-01 Glass to glass aluminium 180° connectors',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Glass to glass aluminium 180° connectors.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zahc-02',
    name: 'ZAHC-02 Glass to glass aluminium 90° connectors',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Glass to glass aluminium 90° connectors.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zahc-03',
    name: 'ZAHC-03 Wall to glass aluminum connector',
    category: 'handrail-accessories',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Wall to glass aluminum connector.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Anodized / Wooden'
    }
  },
  {
    id: 'zacs-01',
    name: 'ZACS-01 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-02',
    name: 'ZACS-02 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-03',
    name: 'ZACS-03 (9 Inch)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 9 Inch.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-04',
    name: 'ZACS-04 (9 Inch)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 9 Inch.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-05',
    name: 'ZACS-05 (9 Inch)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 9 Inch.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-06',
    name: 'ZACS-06 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-07',
    name: 'ZACS-07 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-08',
    name: 'ZACS-08 (9 Inch)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 9 Inch.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-09',
    name: 'ZACS-09 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-10',
    name: 'ZACS-10 (9 Inch)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 9 Inch.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-11',
    name: 'ZACS-11 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-12',
    name: 'ZACS-12 (9 Inch)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 9 Inch.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-13',
    name: 'ZACS-13 (6 & 10 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 10 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-14',
    name: 'ZACS-14 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-15',
    name: 'ZACS-15 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-16',
    name: 'ZACS-16 (6 & 10 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 10 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-17',
    name: 'ZACS-17 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-18',
    name: 'ZACS-18 (9 Inch)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 9 Inch.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-19',
    name: 'ZACS-19 (6 & 10 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 10 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-20',
    name: 'ZACS-20 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-21',
    name: 'ZACS-21 (12 Inch)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 12 Inch.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zacs-22',
    name: 'ZACS-22 (6 & 9 Inches)',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Aluminium spigot, 6 & 9 Inches.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zarf-01',
    name: 'ZARF-01 Glass to pipe square connectors',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Glass to pipe square connectors.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zarf-02',
    name: 'ZARF-02 Glass to pipe round connectors',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Glass to pipe round connectors.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zarf-03',
    name: 'ZARF-03 Wall to pipe square connectors',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Wall to pipe square connectors.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zarf-04',
    name: 'ZARF-04 Wall to pipe round connectors',
    category: 'aluminium-spigots',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Wall to pipe round connectors.',
    features: [],
    specs: {
      material: 'Aluminium',
      finish: 'Mill Finish / Powder Coating / Wooden'
    }
  },
  {
    id: 'zb-01',
    name: 'ZB-01 (Patta Type (12 mm x 50 mm))',
    category: 'balustrade-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Balustrade system post, Patta Type (12 mm x 50 mm).',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zb-02',
    name: 'ZB-02 (Pipe Type (50Ø / 40Ø mm))',
    category: 'balustrade-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Balustrade system post, Pipe Type (50Ø / 40Ø mm).',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zb-03',
    name: 'ZB-03 (Pipe Type (40 mm x 40 mm))',
    category: 'balustrade-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Balustrade system post, Pipe Type (40 mm x 40 mm).',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zb-04',
    name: 'ZB-04 (Pipe Type (40 mm x 40 mm))',
    category: 'balustrade-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Balustrade system post, Pipe Type (40 mm x 40 mm).',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zb-05',
    name: 'ZB-05 (Pipe Type (50Ø / 40Ø mm))',
    category: 'balustrade-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Balustrade system post, Pipe Type (50Ø / 40Ø mm).',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zb-06',
    name: 'ZB-06 (Pipe Type (50Ø / 40Ø mm))',
    category: 'balustrade-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Balustrade system post, Pipe Type (50Ø / 40Ø mm).',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zb-07',
    name: 'ZB-07 (Pipe Type (12 mm x 50 mm))',
    category: 'balustrade-system',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Balustrade system post, Pipe Type (12 mm x 50 mm).',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'side-mount-flat-patta',
    name: 'Side Mount Flat Patta (12 x 50 mm)',
    category: 'side-mount',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Side mount balustrade fitting, 12 x 50 mm.',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'side-mount-pipe',
    name: 'Side Mount Pipe (40 x 40 mm)',
    category: 'side-mount',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Side mount balustrade fitting, 40 x 40 mm.',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'side-mount-round',
    name: 'Side Mount Round (50Ø / 40Ø mm)',
    category: 'side-mount',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Side mount balustrade fitting, 50Ø / 40Ø mm.',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zs-01',
    name: 'ZS-01 (10 x 40 mm)',
    category: 'spigot',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Spigot base, 10 x 40 mm, Height: 8” / 9” / 10”.',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zs-02',
    name: 'ZS-02 (10 x 40 mm)',
    category: 'spigot',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Spigot base, 10 x 40 mm, Height: 6”.',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
    }
  },
  {
    id: 'zs-03',
    name: 'ZS-03 (10 x 40 mm)',
    category: 'spigot',
    productimage: zcr01aImage,
    image: zcr01aImage,
    description: 'Spigot base, 10 x 40 mm, Height: 8” / 9” / 10” / 12”.',
    features: [],
    specs: {
      material: 'Stainless Steel (SS 304 / SS 316 Grade)',
      finish: 'Stainless Steel (SS 304/316 Grade)'
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
