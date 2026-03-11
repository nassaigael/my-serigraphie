export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  image: string;
}

export interface ProductSize {
  id: string;
  name: string;
  available: boolean;
}

export interface ProductDetail {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  longDescription: string;
  mainImage: string;
  colors: ProductColor[];
  sizes: ProductSize[];
  features: string[];
  specifications: {
    material: string;
    weight: string;
    care: string;
    origin: string;
  };
  relatedProducts: number[];
}