import { motion, type Variants } from 'framer-motion';
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
  Truck
} from 'lucide-react';
import { productsData } from '../../../data/products';
import { Link } from 'react-router-dom';

const Products = () => {
  const productIcons: { [key: string]: React.ElementType } = {
    'HOODIES': Shirt,
    'T-SHIRTS': Shirt,
    'SWEATS': Shirt,
    'ACCESSOIRES': ShoppingBag,
    'default': Sparkles
  };

  // Fonction pour obtenir l'ID du produit
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

  // Animation variants améliorés
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

  return (
    <section id="products" className="relative py-8 md:py-8 bg-white overflow-hidden">
      {/* Éléments décoratifs de fond premium */}
      <div className="absolute inset-0">
        {/* Grands cercles lumineux */}
        <div className="absolute top-0 -left-40 w-125 h-125 bg-linear-to-br from-[#D4AF37]/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-150 h-150 bg-linear-to-tl from-[#D4AF37]/5 via-transparent to-transparent rounded-full blur-3xl"></div>
        
        {/* Lignes de lumière croisées */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-[#D4AF37]/10 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-linear-to-b from-transparent via-[#D4AF37]/10 to-transparent"></div>
        
        {/* Motif de points sophistiqué */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Motif de lignes fines */}
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

            {/* Titre principal avec effet de profondeur */}
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

            {/* Sous-titre élégant */}
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
              <motion.div
                key={product.id}
                variants={cardVariants}
                custom={index}
                whileHover="hover"
                className="group"
              >
                <Link
                  to={`/product/${productId}`}
                  className="block"
                >
                  {/* Carte produit avec design */}
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    
                    {/* Image container avec overlay */}
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

                      {/* Badges  */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                        {/* Badge de catégorie avec icône */}
                        <motion.div
                          variants={badgeVariants}
                          className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-[#D4AF37]/20"
                        >
                          <span className="text-xs font-bold text-gray-900 flex items-center space-x-1.5">
                            <ProductIcon size={12} className="text-[#D4AF37]" />
                            <span>{product.name}</span>
                          </span>
                        </motion.div>

                        {/* Badge de prix */}
                        <motion.div
                          variants={badgeVariants}
                          className="bg-[#D4AF37] text-black px-3 py-1.5 rounded-full shadow-lg"
                        >
                          <span className="text-xs font-bold">{product.price}</span>
                        </motion.div>
                      </div>

                      {/* Actions rapides au hover */}
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
                      {/* Ligne décorative */}
                      <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Tags supplémentaires */}
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[8px] text-gray-600 uppercase tracking-wider">
                          Nouveau
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 rounded-full text-[8px] text-gray-600 uppercase tracking-wider">
                          En stock
                        </span>
                      </div>
                      
                      {/* Métriques */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star size={10} className="text-[#D4AF37] fill-current" />
                          <Star size={10} className="text-[#D4AF37] fill-current" />
                          <Star size={10} className="text-[#D4AF37] fill-current" />
                          <Star size={10} className="text-[#D4AF37] fill-current" />
                          <Star size={10} className="text-[#D4AF37] fill-current" />
                          <span className="text-[10px] text-gray-500 ml-1">(24)</span>
                        </div>
                        <span className="text-[10px] text-gray-400">
                          {product.count} modèles
                        </span>
                      </div>

                      {/* Lien Découvrir */}
                      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                        <span className="text-[10px] text-gray-400">Délai de livraison: 3-5 jours</span>
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
                </Link>
              </motion.div>
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

        {/* CTA élégant */}
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
    </section>
  );
};

export default Products;