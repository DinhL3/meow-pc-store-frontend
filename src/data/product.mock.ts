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
    isVisible: false,
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
    isAvailable: false,
    isVisible: false,
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
  {
    id: 'void-lynx',
    name: 'Void Lynx',
    tags: ['Ryzen 5 7500F', 'RX 9070'],
    price: 1499,
    currency: 'EUR',
    description: {
      en: 'The MeowPC™ Void Lynx is a stylish and powerful gaming PC built entirely with brand-new components. The Ryzen 5 7500F offers the best price-to-performance on the market, while the AM5 platform ensures easy future upgrades. Experience exceptional gaming at 1440p Ultra settings or 4K High settings with the RX 9070, featuring the latest FSR 4 support. It also comes with Windows 11 Pro pre-installed, a generous 32GB of fast DDR5 RAM, a 2TB NVMe SSD for large AAA titles, and a high-quality Corsair power supply with 7-year manufacturer warranty.',
      fi: 'MeowPC™ Void Lynx on tyylikäs ja tehokas pelitietokone, koottu täysin uusista komponenteista. Ryzen 5 7500F ja RX 9070 tarjoavat erinomaista suorituskykyä, AM5-alusta mahdollistaa tulevat päivitykset, ja pelaaminen onnistuu 1440p Ultra- tai 4K High -asetuksilla uusimmalla FSR 4 -tuella. Mukana myös Windows 11 Pro, nopeat 32 GB DDR5 -muistia, 2 TB NVMe SSD tilaa isoille AAA-peleille sekä laadukas Corsairin virtalähde (7 vuoden valmistajan takuu).',
    },
    components: {
      fi: {
        title: 'Komponentit',
        items: [
          { label: 'CPU', value: 'AMD Ryzen 5 7500F (6 ydintä/ 12 säiettä)' },
          {
            label: 'GPU',
            value: 'PowerColor Reaper AMD Radeon™ RX 9070 16GB GDDR6',
          },
          {
            label: 'Muisti',
            value: 'Corsair Vengeance 32GB DDR5 6000 MHz CL36',
          },
          { label: 'Tallennustila', value: 'WD Blue SN5000 2TB NVMe SSD' },
          {
            label: 'Emolevy',
            value: 'ASUS TUF GAMING B650M-PLUS WIFI',
          },
          { label: 'Virtalähde', value: 'Corsair RM650e | 80 Plus Gold' },
          { label: 'Kotelo', value: 'DeepCool MATREXX 40 3FS' },
          {
            label: 'CPU-jäähdytin',
            value: 'Thermalright Assassin X 120 Refined SE ARGB',
          },
          {
            label: 'Lämpötahna',
            value:
              "Arctic MX-6 (Tom's Hardware -lehden mukaan vuoden 2025 paras lämpötahna)",
          },
          { label: 'Langaton yhteys', value: 'Wifi 6 & Bluetooth 5.2' },
        ],
      },
      en: {
        title: 'Components',
        items: [
          { label: 'CPU', value: 'AMD Ryzen 5 7500F (6 cores/ 12 threads)' },
          {
            label: 'GPU',
            value: 'PowerColor Reaper AMD Radeon™ RX 9070 16GB GDDR6',
          },
          {
            label: 'Memory',
            value: 'Corsair Vengeance 32GB DDR5 6000 MHz CL36',
          },
          { label: 'Storage', value: 'WD Blue SN5000 2TB NVMe SSD' },
          {
            label: 'Motherboard',
            value: 'ASUS TUF GAMING B650M-PLUS WIFI',
          },
          { label: 'Power Supply', value: 'Corsair RM650e | 80 Plus Gold' },
          { label: 'Case', value: 'DeepCool MATREXX 40 3FS' },
          {
            label: 'CPU Cooler',
            value: 'Thermalright Assassin X 120 Refined SE ARGB',
          },
          {
            label: 'Thermal Paste',
            value: "Arctic MX-6 (Tom's Hardware's best thermal paste of 2025)",
          },
          { label: 'Wireless', value: 'Wifi 6 & Bluetooth 5.2' },
        ],
      },
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760649675/void-lynx-main_rsh2vb.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760649674/void-lynx-side_e4xqmu.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1760649697/void-lynx-timespy-extreme_wlrqve.png',
    ],
    isAvailable: false,
    isVisible: false,
    createdAt: '2025-10-17T00:26:00Z',
    updatedAt: '2025-10-17T00:26:00Z',
  },
  {
    id: 'tempest-lynx',
    name: 'Tempest Lynx',
    tags: ['Ryzen 5 9600X', 'RTX 5070'],
    price: 1799,
    currency: 'EUR',
    description: {
      en: 'The MeowPC™ Tempest Lynx is a stylish all-white, powerful PC built entirely with brand-new components. Featuring the Ryzen 5 9600X with among the fastest single-core performance available, this system excels at both gaming and productivity tasks. The RTX 5070 GPU delivers exceptional performance for creative work, AI applications, and content creation, while also providing outstanding 1440p Ultra gaming with the latest DLSS 4 support. The AM5 platform ensures easy future upgrades. Comes with Windows 11 Pro pre-installed, a generous 32GB of fast DDR5 RAM, a 2TB NVMe SSD for large projects and AAA titles, and a high-quality Phanteks power supply with 8-year manufacturer warranty. Includes a free copy of ARC Raiders',
      fi: 'MeowPC™ Tempest Lynx on tyylikäs, täysin valkoinen ja tehokas tietokone, joka on koottu pelkästään uusista komponenteista. Ryzen 5 9600X -prosessori tarjoaa markkinoiden nopeimpiin kuuluvan yksiydinsuorituskyvyn, joten järjestelmä loistaa sekä pelaamisessa että tuottavuustehtävissä. RTX 5070 -näytönohjain tarjoaa erinomaisen suorituskyvyn luovaan työhön, tekoälysovelluksiin ja sisällöntuotantoon – ja samalla huippuluokan 1440p Ultra-pelaamisen uusimman DLSS 4 -tuella. AM5-alusta takaa vaivattomat tulevat päivitykset. Tietokoneessa on valmiiksi asennettu Windows 11 Pro, 32 Gt nopeaa DDR5-muistia, 2 Tt NVMe-SSD suurille projekteille ja AAA-peleille sekä laadukas Phanteks-virtalähde 8 vuoden valmistajan takuulla. Sisältää ilmaisen kopion ARC Raiders -pelistä.',
    },
    components: {
      fi: {
        title: 'Komponentit',
        items: [
          { label: 'CPU', value: 'AMD Ryzen 9 9600X (6 ydintä/ 12 säiettä)' },
          {
            label: 'GPU',
            value: 'INNO3D GeForce RTX™ 5070 TWIN X2 12GB GDDR7',
          },
          {
            label: 'Muisti',
            value: 'Crucial Pro Overclocking 32GB DDR5 6000 MHz CL36',
          },
          { label: 'Tallennustila', value: 'WD Black SN770 2TB NVMe SSD' },
          {
            label: 'Emolevy',
            value: 'MSI B850M GAMING PLUS WIFI6E',
          },
          { label: 'Virtalähde', value: 'Phanteks AMP GH 750W | 80 Plus Gold' },
          {
            label: 'Kotelo',
            value:
              'NZXT H3 Flow (PC Gamer -lehden mukaan vuoden 2025 paras m-ATX kotelo)',
          },
          {
            label: 'CPU-jäähdytin',
            value: 'Thermalright Assassin X 120 Refined SE White ARGB',
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
          { label: 'CPU', value: 'AMD Ryzen 9 9600X (6 cores/ 12 threads)' },
          {
            label: 'GPU',
            value: 'INNO3D GeForce RTX™ 5070 TWIN X2 12GB GDDR7',
          },
          {
            label: 'Memory',
            value: 'Crucial Pro Overclocking 32GB DDR5 6000 MHz CL36',
          },
          { label: 'Storage', value: 'WD Black SN770 2TB NVMe SSD' },
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
          { label: 'Case Fans', value: '3x Thermalright TL-C12CW-S ARGB' },
          { label: 'Wireless', value: 'Wifi 6E & Bluetooth 5.3' },
        ],
      },
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1761491828/nzxt_h3_flow_yqonzr.webp',
    ],
    isAvailable: true,
    isVisible: true,
    createdAt: '2025-10-26T16:48:00Z',
    updatedAt: '2025-10-26T16:48:00Z',
  },
];
