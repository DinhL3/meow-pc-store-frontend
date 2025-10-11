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
  components?: {
    en?: ComponentList;
    fi?: ComponentList;
  };
  images: string[];
  isAvailable: boolean;
  isVisible: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ComponentList {
  title: string;
  items: ComponentItem[];
}

export interface ComponentItem {
  label: string;
  value: string;
}
