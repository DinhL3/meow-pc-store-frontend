import type { Product } from './product.types';

export const mockPCProducts: Product[] = [
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
          {
            label: 'CPU',
            value: 'AMD Ryzen 5 7500F (6 ydintä/ 12 säiettä)',
          },
          {
            label: 'GPU',
            value: 'SAPPHIRE PURE AMD Radeon™ RX 9060 XT 16GB OC',
          },
          {
            label: 'Muisti',
            value: 'Kingston Fury Beast 32GB DDR5 6000 MHz CL36',
          },
          {
            label: 'Tallennustila',
            value: 'WD Blue SN5000 2TB NVMe SSD',
          },
          {
            label: 'Emolevy',
            value: 'Gigabyte B650M Gaming Plus WiFi (Rev 1.1)',
          },
          {
            label: 'Virtalähde',
            value: 'Phanteks AMP GH750 | 80 Plus Gold',
          },
          {
            label: 'Kotelo',
            value: 'DeepCool CH260 WH',
          },
          {
            label: 'CPU-jäähdytin',
            value: 'Thermalright Assassin Spirit 120 EVO White ARGB',
          },
          {
            label: 'Lämpötahna',
            value: "Arctic MX-6 (Tom's Hardware -lehden mukaan vuoden 2025 paras lämpötahna)",
          },
          {
            label: 'Kotelotuulettimet',
            value: '3x Thermalright TL-C12CW-S ARGB',
          },
          {
            label: 'Langaton yhteys',
            value: 'Wifi 6E & Bluetooth 5.3',
          },
        ],
      },
      en: {
        title: 'Components',
        items: [
          {
            label: 'CPU',
            value: 'AMD Ryzen 5 7500F (6 cores/ 12 threads)',
          },
          {
            label: 'GPU',
            value: 'SAPPHIRE PURE AMD Radeon™ RX 9060 XT 16GB OC',
          },
          {
            label: 'Memory',
            value: 'Kingston Fury Beast 32GB DDR5 6000 MHz CL36',
          },
          {
            label: 'Storage',
            value: 'WD Blue SN5000 2TB NVMe SSD',
          },
          {
            label: 'Motherboard',
            value: 'Gigabyte B650M Gaming Plus WiFi (Rev 1.1)',
          },
          {
            label: 'Power Supply',
            value: 'Phanteks AMP GH750 | 80 Plus Gold',
          },
          {
            label: 'Case',
            value: 'DeepCool CH260 WH',
          },
          {
            label: 'CPU Cooler',
            value: 'Thermalright Assassin Spirit 120 EVO White ARGB',
          },
          {
            label: 'Thermal Paste',
            value: "Arctic MX-6 (Tom's Hardware's best thermal paste of 2025)",
          },
          {
            label: 'Case Fans',
            value: '3x Thermalright TL-C12CW-S ARGB',
          },
          {
            label: 'Wireless',
            value: 'Wifi 6E & Bluetooth 5.3',
          },
        ],
      },
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760146722/snow-kitten-1-main_zg2ujm.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760146722/snow-kitten-1-side_mc9hhb.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760472117/snow-kitten-1-time-spy_vmjlrm.png',
    ],
    isAvailable: false,
    isVisible: true,
    createdAt: '2025-10-11T04:49:00Z',
    updatedAt: '2025-11-29T11:49:00Z',
  },
  {
    id: 'tempest-lynx',
    name: 'Tempest Lynx',
    tags: ['Ryzen 5 9600X', 'RTX 5070'],
    price: 1699,
    currency: 'EUR',
    description: {
      en: 'An all-white PC that looks great on your desk, and can play the latest games at max graphics. Generous storage that will let you install many large games and softwares. High-quality parts inside, so you can enjoy gaming for many years to come. Comes with Windows 11 Pro.',
      fi: 'Täysin valkoinen PC, joka näyttää hyvältä työpöydällä. Se pyörittää uusimmat pelit korkeilla grafiikka-asetuksilla. Paljon tallennustilaa isoille peleille ja ohjelmille. Laadukkaat osat takaavat pitkän käyttöiän. Mukana Windows 11 Pro.',
    },
    components: {
      fi: {
        title: 'Komponentit',
        items: [
          {
            label: 'CPU',
            value: 'AMD Ryzen 5 9600X (6 ydintä/ 12 säiettä)',
          },
          {
            label: 'GPU',
            value: 'INNO3D GeForce RTX™ 5070 TWIN X2 12GB GDDR7',
          },
          {
            label: 'Muisti',
            value: 'Crucial Pro Overclocking 32GB DDR5 6000 MHz CL36',
          },
          {
            label: 'Tallennustila',
            value: 'WD Black SN770 2TB NVMe SSD',
          },
          {
            label: 'Emolevy',
            value: 'MSI B850M GAMING PLUS WIFI6E',
          },
          {
            label: 'Virtalähde',
            value: 'Phanteks AMP GH 750W | 80 Plus Gold',
          },
          {
            label: 'Kotelo',
            value: 'NZXT H3 Flow (PC Gamer -lehden mukaan vuoden 2025 paras m-ATX kotelo)',
          },
          {
            label: 'CPU-jäähdytin',
            value: 'Thermalright Assassin X 120 Refined SE White ARGB',
          },
          {
            label: 'Lämpötahna',
            value: "Arctic MX-6 (Tom's Hardware -lehden mukaan vuoden 2025 paras lämpötahna)",
          },
          {
            label: 'Kotelotuulettimet',
            value: '3x Thermalright TL-C12CW-S ARGB',
          },
          {
            label: 'Langaton yhteys',
            value: 'Wifi 6E & Bluetooth 5.3',
          },
        ],
      },
      en: {
        title: 'Components',
        items: [
          {
            label: 'CPU',
            value: 'AMD Ryzen 5 9600X (6 cores/ 12 threads)',
          },
          {
            label: 'GPU',
            value: 'INNO3D GeForce RTX™ 5070 TWIN X2 12GB GDDR7',
          },
          {
            label: 'Memory',
            value: 'Crucial Pro Overclocking 32GB DDR5 6000 MHz CL36',
          },
          {
            label: 'Storage',
            value: 'WD Black SN770 2TB NVMe SSD',
          },
          {
            label: 'Motherboard',
            value: 'MSI B850M GAMING PLUS WIFI6E',
          },
          {
            label: 'Power Supply',
            value: 'Phanteks AMP GH 750W | 80 Plus Gold',
          },
          {
            label: 'Case',
            value: "NZXT H3 Flow (PC Gamer's best m-ATX case of 2025)",
          },
          {
            label: 'CPU Cooler',
            value: 'Thermalright Assassin X 120 Refined SE White ARGB',
          },
          {
            label: 'Thermal Paste',
            value: "Arctic MX-6 (Tom's Hardware's best thermal paste of 2025)",
          },
          {
            label: 'Case Fans',
            value: '3x Thermalright TL-C12CW-S ARGB',
          },
          {
            label: 'Wireless',
            value: 'Wifi 6E & Bluetooth 5.3',
          },
        ],
      },
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1761755496/tempest-lynx-main_uysnux.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1761755495/tempest-lynx-side_ft9qta.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1761755548/tempest-lynx-timespy_fvugdj.png',
    ],
    isAvailable: true,
    isVisible: true,
    createdAt: '2025-10-26T16:48:00Z',
    updatedAt: '2025-10-29T18:34:00Z',
  },
];
