import type { Product } from './product.types';

export const mockPCProducts: Product[] = [
  {
    id: 'night-kitten-1',
    name: 'Night Kitten I',
    tags: ['Ryzen 7 5700X3D', 'RTX 4070'],
    price: 1199,
    currency: 'EUR',
    description: {
      en: 'A powerful gaming PC featuring AMD Ryzen 7 5700X3D processor and NVIDIA RTX 4070 graphics card. Perfect for 1440p gaming and content creation with excellent performance-to-price ratio.',
      fi: 'Tehokas pelitietokone, jossa on AMD Ryzen 7 5700X3D -prosessori ja NVIDIA RTX 4070 -näytönohjain. Täydellinen 1440p-pelaamiseen ja sisällöntuotantoon erinomaisella hinta-laatusuhteella.',
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759533999/night-kitten-1-main_bdwzi3.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759533998/night-kitten-1-side_kuxb0t.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759524096/hwinfo64_rayvkh.png',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759524099/timespy_su7isn.png',
    ],
    isAvailable: false,
    isVisible: true,
    createdAt: '2025-09-15T10:00:00Z',
    updatedAt: '2025-09-15T10:00:00Z',
  },
  {
    id: 'panther-1',
    name: 'Panther I',
    tags: ['Ryzen 9 5900X', 'RX 7800 XT'],
    price: 1149,
    currency: 'EUR',
    description: {
      en: 'High-performance workstation built around the AMD Ryzen 9 5900X and Radeon RX 7800 XT. Excellent for multitasking, streaming, and AAA gaming at high settings.',
      fi: 'Korkean suorituskyvyn työasema, joka perustuu AMD Ryzen 9 5900X:ään ja Radeon RX 7800 XT:hen. Erinomainen moniajon, suoratoiston ja AAA-pelien pelaamiseen korkeilla asetuksilla.',
    },
    components: {
      fi: {
        title: 'Komponentit',
        items: [
          {
            label: 'CPU',
            value: 'AMD Ryzen 9 5900X (12 ydintä, 24 säiettä, ylikellotettava)',
          },
          { label: 'GPU', value: 'Sapphire PULSE AMD Radeon™ RX 7800 XT 16GB' },
          {
            label: 'Muisti',
            value: 'Crucial Ballistix 32GB (2x16GB) 3600 MHz DDR4',
          },
          { label: 'Tallennustila', value: 'WD Blue SN5000 2TB NVMe SSD' },
          { label: 'Virtalähde', value: 'Corsair RM650e | 80 Plus Gold' },
          { label: 'Emolevy', value: 'Asus TUF Gaming B550-Plus' },
          {
            label: 'CPU-jäähdytin',
            value: 'Thermalright Assassin X 120 Refined SE ARGB',
          },
          {
            label: 'Lämpötahna',
            value:
              "Arctic MX-6 (Tom's Hardware -lehden mukaan vuoden 2025 paras lämpötahna)",
          },
          {
            label: 'Kotelo',
            value:
              'Montech XR TG. Koko: 450 × 230 × 455 mm (pituus × leveys × korkeus)',
          },
          {
            label: 'Langaton yhteys',
            value:
              'Wifi 6 & Bluetooth 5.2 | TP-Link Archer TX55E AX3000 PCIe-kortti',
          },
        ],
      },
      en: {
        title: 'Components',
        items: [
          {
            label: 'CPU',
            value: 'AMD Ryzen 9 5900X (12 cores, 24 threads, overclockable)',
          },
          { label: 'GPU', value: 'Sapphire PULSE AMD Radeon™ RX 7800 XT 16GB' },
          {
            label: 'Memory',
            value: 'Crucial Ballistix 32GB (2x16GB) 3600 MHz DDR4',
          },
          { label: 'Storage', value: 'WD Blue SN5000 2TB NVMe SSD' },
          { label: 'Power Supply', value: 'Corsair RM650e | 80 Plus Gold' },
          { label: 'Motherboard', value: 'Asus TUF Gaming B550-Plus' },
          {
            label: 'CPU Cooler',
            value: 'Thermalright Assassin X 120 Refined SE ARGB',
          },
          {
            label: 'Thermal Paste',
            value: "Arctic MX-6 (Tom's Hardware's best thermal paste of 2025)",
          },
          {
            label: 'Case',
            value: 'Montech XR TG. Size: 450 × 230 × 455 mm (L × W × H)',
          },
          {
            label: 'Wireless',
            value:
              'Wifi 6 & Bluetooth 5.2 | TP-Link Archer TX55E AX3000 PCIe card',
          },
        ],
      },
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759537353/panther-1-main_uct7rp.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759537351/panther-1-side_m0on3k.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759524601/HWinfo_xqpr0n.png',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759524602/3dmark_hn0gfr.png',
    ],
    isAvailable: true,
    isVisible: true,
    createdAt: '2025-09-20T14:30:00Z',
    updatedAt: '2025-10-11T23:19:00Z',
  },
  {
    id: 'snow-kitten-1',
    name: 'Snow Kitten I',
    tags: ['Ryzen 5 7500F', 'RX 9060 XT'],
    price: 1349,
    currency: 'EUR',
    description: {
      en: 'The Meow PC™ Snow Kitten is a stylish, compact, and powerful gaming PC built entirely with brand-new components. The Ryzen 5 7500F and RX 9060 XT 16G offer the best price-to-performance on the market, while the AM5 platform ensures easy future upgrades. Enjoy smooth 1440p gaming at High to Ultra settings with the latest FSR 4 support. It also comes with Windows 11 Pro pre-installed, a generous 32GB of fast DDR5 RAM, a 2TB NVMe SSD for large AAA titles, and a high-quality Phanteks power supply with 8-year manufacturer warranty.',
      fi: 'Meow PC™ Snow Kitten on tyylikäs, kompakti ja tehokas pelitietokone, koottu täysin uusista komponenteista. Ryzen 5 7500F ja RX 9060 XT 16G tarjoavat markkinoiden parasta hinta–suorituskykyä, AM5-alusta mahdollistaa tulevat päivitykset, ja 1440p-pelaaminen onnistuu High–Ultra -asetuksilla uusimmalla FSR 4 -tuella. Mukana myös Windows 11 Pro, nopeat 32 GB DDR5 -muistia, 2 TB NVMe SSD tilaa isoille AAA-peleille sekä laadukas Phanteksin virtalähde (8 vuoden valmistajan takuu).',
    },
    components: {
      fi: {
        title: 'Komponentit',
        items: [
          { label: 'CPU', value: 'AMD Ryzen 5 7500F (6 ydintä/ 12 säiettä)' },
          {
            label: 'GPU',
            value: 'SAPPHIRE PURE AMD Radeon™ RX 9060 XT 16GB OC',
          },
          {
            label: 'Muisti',
            value: 'Kingston Fury Beast 32GB DDR5 6000 MHz CL36',
          },
          { label: 'Tallennustila', value: 'WD Blue SN5000 2TB NVMe SSD' },
          {
            label: 'Emolevy',
            value: 'Gigabyte B650M Gaming Plus WiFi (Rev 1.1)',
          },
          { label: 'Virtalähde', value: 'Phanteks AMP GH750 | 80 Plus Gold' },
          { label: 'Kotelo', value: 'DeepCool CH260 WH' },
          {
            label: 'CPU-jäähdytin',
            value: 'Thermalright Assassin Spirit 120 EVO White ARGB',
          },
          {
            label: 'Lämpötahna',
            value:
              "Arctic MX-6 (Tom's Hardware -lehden mukaan vuoden 2025 paras lämpötahna)",
          },
          {
            label: 'Kotelotuulettimet',
            value: '3x Thermalright TL-C12CW-S ARGB',
          },
          { label: 'Langaton yhteys', value: 'Wifi 6E & Bluetooth 5.3' },
        ],
      },
      en: {
        title: 'Components',
        items: [
          { label: 'CPU', value: 'AMD Ryzen 5 7500F (6 cores/ 12 threads)' },
          {
            label: 'GPU',
            value: 'SAPPHIRE PURE AMD Radeon™ RX 9060 XT 16GB OC',
          },
          {
            label: 'Memory',
            value: 'Kingston Fury Beast 32GB DDR5 6000 MHz CL36',
          },
          { label: 'Storage', value: 'WD Blue SN5000 2TB NVMe SSD' },
          {
            label: 'Motherboard',
            value: 'Gigabyte B650M Gaming Plus WiFi (Rev 1.1)',
          },
          { label: 'Power Supply', value: 'Phanteks AMP GH750 | 80 Plus Gold' },
          { label: 'Case', value: 'DeepCool CH260 WH' },
          {
            label: 'CPU Cooler',
            value: 'Thermalright Assassin Spirit 120 EVO White ARGB',
          },
          {
            label: 'Thermal Paste',
            value: "Arctic MX-6 (Tom's Hardware's best thermal paste of 2025)",
          },
          { label: 'Case Fans', value: '3x Thermalright TL-C12CW-S ARGB' },
          { label: 'Wireless', value: 'Wifi 6E & Bluetooth 5.3' },
        ],
      },
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760146722/snow-kitten-1-main_zg2ujm.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760146722/snow-kitten-1-side_mc9hhb.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760472117/snow-kitten-1-time-spy_vmjlrm.png',
    ],
    isAvailable: true,
    isVisible: true,
    createdAt: '2025-10-11T04:49:00Z',
    updatedAt: '2025-10-11T04:49:00Z',
  },
];
