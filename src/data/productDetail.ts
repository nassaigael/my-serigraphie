import type { ProductDetail } from '../types/product';

export const productsData: { [key: string]: ProductDetail } = {
  'tshirts': {
    id: 1,
    name: "T-SHIRT CLASSIC",
    category: "T-SHIRTS",
    price: 29,
    description: "T-shirt en coton bio peigné, impressions résistantes et coupes adaptées",
    longDescription: "Nos t-shirts sont confectionnés à partir de coton biologique peigné de la plus haute qualité. L'impression est réalisée à la main dans notre atelier parisien, garantissant une tenue parfaite dans le temps. La coupe est étudiée pour offrir un confort optimal tout en conservant une allure streetwear élégante.",
    mainImage: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    colors: [
      { id: 'black', name: 'Noir', hex: '#000000', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
      { id: 'white', name: 'Blanc', hex: '#FFFFFF', image: 'https://images.unsplash.com/photo-1583743814966-8936e5ef7d91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
      { id: 'navy', name: 'Bleu Marine', hex: '#000080', image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
      { id: 'red', name: 'Rouge', hex: '#FF0000', image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    ],
    sizes: [
      { id: 'xs', name: 'XS', available: true },
      { id: 's', name: 'S', available: true },
      { id: 'm', name: 'M', available: true },
      { id: 'l', name: 'L', available: true },
      { id: 'xl', name: 'XL', available: false },
      { id: 'xxl', name: 'XXL', available: false },
    ],
    features: [
      "Coton bio peigné 180g/m²",
      "Impression sérigraphique hautement résistante",
      "Coupe regular fit",
      "Certifié GOTS",
      "Fabrication éthique"
    ],
    specifications: {
      material: "100% coton biologique",
      weight: "180 g/m²",
      care: "Lavage à 30°C, ne pas utiliser de javel",
      origin: "Imprimé à Paris, France"
    },
    relatedProducts: [2, 3, 4]
  },
  'hoodies': {
    id: 2,
    name: "HOODIE OVERSIZE",
    category: "HOODIES",
    price: 45,
    description: "Sweatshirt premium avec impressions sérigraphiées, coton bio épais et coupe oversize",
    longDescription: "Notre hoodie oversize est conçu pour un confort maximal avec une coupe décontractée. Le coton bio épais offre une chaleur optimale tout en restant respirant. Les impressions sérigraphiées sont réalisées à la main et résistent parfaitement au lavage.",
    mainImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    colors: [
      { id: 'black', name: 'Noir', hex: '#000000', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
      { id: 'grey', name: 'Gris', hex: '#808080', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
      { id: 'navy', name: 'Bleu Marine', hex: '#000080', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    ],
    sizes: [
      { id: 's', name: 'S', available: true },
      { id: 'm', name: 'M', available: true },
      { id: 'l', name: 'L', available: true },
      { id: 'xl', name: 'XL', available: true },
    ],
    features: [
      "Coton bio épais 300g/m²",
      "Coupe oversize confortable",
      "Capuche doublée",
      "Poche kangourou",
      "Cordon de serrage renforcé"
    ],
    specifications: {
      material: "100% coton biologique",
      weight: "300 g/m²",
      care: "Lavage à 30°C, séchage à l'air libre",
      origin: "Imprimé à Paris, France"
    },
    relatedProducts: [1, 3, 4]
  }
};