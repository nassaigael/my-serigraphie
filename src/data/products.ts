import product from "../assets/tee-shirt.png";

export const productsData = {
  title: "NOS PRODUITS",
  subtitle: "Des pièces uniques pour un style authentique",
  categories: [
    {
      id: 1,
      name: "T-SHIRTS",
      description: "T-shirts en coton bio peigné, impressions résistantes et coupes adaptées",
      image: product,
      link: "/products/tshirts",
      count: 56,
      price: "À partir de 29€",
      color: "from-amber-900/20 to-red-900/20"
    },
    {
      id: 2,
      name: "HOODIES",
      description: "Sweatshirts premium avec impressions sérigraphiées, coton bio épais et coupe oversize",
      image: product,
      link: "/products/hoodies",
      count: 24,
      price: "À partir de 45€",
      color: "from-blue-900/20 to-purple-900/20"
    },
    {
      id: 3,
      name: "SWEATS",
      description: "Sweatshirts confortables avec doublure molletonnée, parfaits pour le streetwear",
      image: product,
      link: "/products/sweats",
      count: 15,
      price: "À partir de 55€",
      color: "from-emerald-900/20 to-teal-900/20"
    },
    {
      id: 4,
      name: "ACCESSOIRES",
      description: "Tote bags, casquettes et bandanas avec designs exclusifs",
      image: product,
      link: "/products/accessories",
      count: 12,
      price: "À partir de 15€",
      color: "from-purple-900/20 to-pink-900/20"
    }
  ],
  cta: {
    text: "VOIR TOUTE LA COLLECTION",
    link: "/gallery"
  }
};