import type { Product } from './product.types';

export const mockPCProducts: Product[] = [
  {
    id: '1',
    name: 'Night Kitten I',
    tags: ['Ryzen 7 5700X3D', 'RTX 4070'],
    price: 1249,
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
    createdAt: '2025-09-15T10:00:00Z',
    updatedAt: '2025-09-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'Panther I',
    tags: ['Ryzen 9 5900X', 'RX 7800 XT'],
    price: 1249,
    currency: 'EUR',
    description: {
      en: 'High-performance workstation built around the AMD Ryzen 9 5900X and Radeon RX 7800 XT. Excellent for multitasking, streaming, and AAA gaming at high settings.',
      fi: 'Korkean suorituskyvyn työasema, joka perustuu AMD Ryzen 9 5900X:ään ja Radeon RX 7800 XT:hen. Erinomainen moniajon, suoratoiston ja AAA-pelien pelaamiseen korkeilla asetuksilla.',
    },
    images: [
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759537353/panther-1-main_uct7rp.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759537351/panther-1-side_m0on3k.webp',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759524601/HWinfo_xqpr0n.png',
      'https://res.cloudinary.com/dlhzbr2to/image/upload/v1759524602/3dmark_hn0gfr.png',
    ],
    createdAt: '2025-09-20T14:30:00Z',
    updatedAt: '2025-09-20T14:30:00Z',
  },
];
