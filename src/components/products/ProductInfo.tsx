import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { type ProductSize } from '../../types/product';

interface ProductInfoProps {
  name: string;
  category: string;
  price: number;
  description: string;
  longDescription: string;
  sizes: ProductSize[];
  features: string[];
  specifications: {
    material: string;
    weight: string;
    care: string;
    origin: string;
  };
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

const ProductInfo = ({
  name,
  category,
  price,
  description,
  sizes,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
}: ProductInfoProps) => {

  return (
    <div className="overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      <div className="space-y-6">
        {/* Catégorie et badge */}
        <div className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-wider text-[#D4AF37] font-light bg-[#D4AF37]/5 px-3 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Titre et prix */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-3">
            {name}
          </h1>
          <div className="flex items-baseline gap-3">
            <p className="text-2xl font-medium text-gray-900">
              {price}€
            </p>
            <span className="text-sm text-gray-500">TTC</span>
            <span className="text-sm text-[#D4AF37] bg-[#D4AF37]/5 px-2 py-0.5 rounded-full">
              En stock
            </span>
          </div>
        </div>

        {/* Description courte */}
        <p className="text-gray-600 leading-relaxed border-l-2 border-[#D4AF37] pl-4 italic">
          {description}
        </p>

        {/* Sélecteur de taille */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-900">
              Sélectionnez votre taille
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button
                key={size.id}
                onClick={() => size.available && setSelectedSize(size.id)}
                disabled={!size.available}
                className={`relative min-w-15 px-4 py-3 rounded-lg border transition-all ${
                  selectedSize === size.id
                    ? 'border-[#D4AF37] bg-[#D4AF37]/5 text-[#D4AF37] shadow-md'
                    : size.available
                      ? 'border-gray-200 hover:border-[#D4AF37] hover:shadow-md text-gray-700'
                      : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed line-through'
                }`}
              >
                {size.name}
                {selectedSize === size.id && (
                  <motion.div
                    layoutId="selectedSize"
                    className="absolute inset-0 border-2 border-[#D4AF37] rounded-lg"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Quantité */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-3">Quantité</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#D4AF37] transition-colors"
            >
              -
            </button>
            <span className="w-16 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:border-[#D4AF37] transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Actions principales */}
        <div className="flex gap-3 pt-4">
          <button className="flex-1 bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
            <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
            <span>Commander</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;