export interface Product {
  id: string;
  name: string;
  tags: string[];
  price: number;
  currency: string;
  description: {
    en: string;
    fi: string;
  };
  images: string[];
  isAvailable: boolean;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
}
