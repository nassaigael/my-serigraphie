import { useState } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  ChevronRight, 
  Sparkles, 
  Eye,
  Shirt,
  ShoppingBag,
  Share2,
  Clock,
  Shield,
  Truck,
  X,
} from 'lucide-react';
import { productsData } from '../../../data/products';
import { productsDetailData } from '../../../data/productDetail';
import { Link } from 'react-router-dom';
import ProductDetail from '../../../pages/ProductDetail';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const productIcons: { [key: string]: React.ElementType } = {
    'HOODIES': Shirt,
    'T-SHIRTS': Shirt,
    'SWEATS': Shirt,
    'ACCESSOIRES': ShoppingBag,
    'default': Sparkles
  };

  const getProductId = (productName: string): string => {
    switch(productName) {
      case 'T-SHIRTS':
        return 'tshirts';
      case 'HOODIES':
        return 'hoodies';
      case 'SWEATS':
        return 'sweats';
      case 'ACCESSOIRES':
        return 'accessories';
      default:
        return 'tshirts';
    }
  };

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const quickActionVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    hover: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  const handleDiscoverClick = (productId: string) => {
    if (selectedProduct === productId) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(productId);
      setSelectedSize('');
      setSelectedColor('');
      setQuantity(1);
    }
  };

  return (
    <section id="products" className="relative py-8 md:py-8 bg-white overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-40 w-125 h-125 bg-linear-to-br from-[#D4AF37]/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-150 h-150 bg-linear-to-tl from-[#D4AF37]/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        
        <div className="absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-[#D4AF37]/10 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-[#D4AF37]/10 to-transparent"></div>
        
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        />
        
        <div className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 40px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* En-tête de section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={titleVariants} className="inline-block">
            <h2 className="relative">
              <span className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 block leading-[1.1]">
                <span className="font-black bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                  NOS PRODUITS
                </span>
              </span>
              <motion.span 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light mt-8"
            >
              {productsData.subtitle}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Grille des produits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {productsData.categories.map((product, index) => {
            const ProductIcon = productIcons[product.name] || Sparkles;
            const productId = getProductId(product.name);
            
            return (
              <div key={product.id} className="relative">
                <motion.div
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  className="group cursor-pointer"
                  onClick={() => handleDiscoverClick(productId)}
                >
                  {/* Carte produit */}
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    
                    {/* Image container */}
                    <div className="relative overflow-hidden">
                      <motion.div
                        variants={imageVariants}
                        className="aspect-4/5 overflow-hidden"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Overlay au hover */}
                      <motion.div
                        variants={overlayVariants}
                        className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"
                      />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                        <motion.div
                          variants={badgeVariants}
                          className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-[#D4AF37]/20"
                        >
                          <span className="text-xs font-bold text-gray-900 flex items-center space-x-1.5">
                            <ProductIcon size={12} className="text-[#D4AF37]" />
                            <span>{product.name}</span>
                          </span>
                        </motion.div>

                        <motion.div
                          variants={badgeVariants}
                          className="bg-[#D4AF37] text-black px-3 py-1.5 rounded-full shadow-lg"
                        >
                          <span className="text-xs font-bold">{product.price}</span>
                        </motion.div>
                      </div>

                      {/* Actions rapides */}
                      <motion.div
                        variants={quickActionVariants}
                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-2"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg cursor-pointer hover:bg-[#D4AF37] transition-colors"
                        >
                          <Eye size={18} className="text-gray-700 hover:text-white transition-colors" />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="bg-white/90 backdrop-blur-md rounded-full p-2 shadow-lg cursor-pointer hover:bg-[#D4AF37] transition-colors"
                        >
                          <Share2 size={18} className="text-gray-700 hover:text-white transition-colors" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Informations produit */}
                    <div className="relative p-5 bg-white">
                      <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                      
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[8px] text-gray-600 uppercase tracking-wider">
                          Nouveau
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[8px] text-gray-600 uppercase tracking-wider">
                          En stock
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={10} className="text-[#D4AF37] fill-current" />
                          ))}
                          <span className="text-[10px] text-gray-500 ml-1">(24)</span>
                        </div>
                        <span className="text-[10px] text-gray-400">
                          {product.count} modèles
                        </span>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[10px] text-gray-400">Délai: 3-5 jours</span>
                        <motion.div
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                          className="flex items-center space-x-1 text-[#D4AF37]"
                        >
                          <span className="text-xs font-medium">Découvrir</span>
                          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* Section des avantages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20"
        >
          <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
              <Truck size={18} className="text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">Livraison rapide</h4>
              <p className="text-xs text-gray-500">3-5 jours ouvrés</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
              <Shield size={18} className="text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">Paiement sécurisé</h4>
              <p className="text-xs text-gray-500">CB, PayPal, Apple Pay</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
              <Clock size={18} className="text-[#D4AF37]" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">Service client</h4>
              <p className="text-xs text-gray-500">Réponse sous 24h</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            to="/gallery"
            className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-black text-white font-medium overflow-hidden rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-[#D4AF37] to-[#C5A028]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
            
            <span className="relative z-10 text-sm uppercase tracking-wider group-hover:text-black transition-colors duration-300">
              {productsData.cta.text}
            </span>
            <ArrowRight size={16} className="relative z-10 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* MODAL AVEC SCROLL POUR LES DÉTAILS PRODUIT */}
      <AnimatePresence>
        {selectedProduct && productsDetailData[selectedProduct] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* En-tête fixe avec le bouton de fermeture */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-light text-gray-900">
                  <span className="font-bold">{productsDetailData[selectedProduct].name}</span> - Détails du produit
                </h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Zone de contenu avec scroll */}
              <div className="overflow-y-auto p-6 md:p-8">
                <ProductDetail
                  product={productsDetailData[selectedProduct]}
                  onClose={() => setSelectedProduct(null)}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                  selectedSize={selectedSize}
                  setSelectedSize={setSelectedSize}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  setShowSizeGuide={setShowSizeGuide}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Guide des tailles */}
      <AnimatePresence>
        {showSizeGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4"
            onClick={() => setShowSizeGuide(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Guide des tailles</h3>
                <button
                  onClick={() => setShowSizeGuide(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 text-left">Taille</th>
                    <th className="p-2 text-left">Poitrine (cm)</th>
                    <th className="p-2 text-left">Longueur (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-2">XS</td><td>84-88</td><td>68</td></tr>
                  <tr><td className="p-2">S</td><td>88-92</td><td>70</td></tr>
                  <tr><td className="p-2">M</td><td>92-96</td><td>72</td></tr>
                  <tr><td className="p-2">L</td><td>96-100</td><td>74</td></tr>
                  <tr><td className="p-2">XL</td><td>100-104</td><td>76</td></tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;