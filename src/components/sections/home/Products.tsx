import { motion, type Variants } from 'framer-motion';
import { 
  ArrowRight, 
  Star, 
  ChevronRight, 
  Sparkles, 
  Eye,
  Shirt,
  ShoppingBag
} from 'lucide-react';
import { productsData } from '../../../data/products';

const Products = () => {
  const productIcons: { [key: string]: React.ElementType } = {
    'HOODIES': Shirt,
    'T-SHIRTS': Shirt,
    'SWEATS': Shirt,
    'ACCESSOIRES': ShoppingBag,
    'default': Sparkles
  };

  // Animation variants
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    hover: {
      y: -12,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.4 },
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
        damping: 15,
      },
    },
  };


  return (
    <section className="relative py-28 md:py-36 bg-white overflow-hidden">
      {/* Éléments décoratifs de fond sophistiqués */}
      <div className="absolute inset-0">
        {/* Cercles lumineux dorés */}
        <div className="absolute top-40 -left-20 w-80 h-80 bg-linear-to-br from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-80 h-80 bg-linear-to-tl from-[#D4AF37]/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* Lignes de lumière */}
        <div className="absolute top-60 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
        <div className="absolute bottom-60 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
        
        {/* Motif de points élégant */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Motif de lignes fines */}
        <div className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 30px)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* En-tête de section ultra-premium */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="text-center mb-20"
        >
          <motion.div variants={titleVariants} className="inline-block">
            {/* Titre principal avec effet de relief */}
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-6 relative">
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-[#D4AF37]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative">
                  <span className="font-black bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    NOS PRODUITS
                  </span>
                </span>
              </span>
              <motion.span 
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h2>

            {/* Sous-titre élégant avec effet de fondu */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light italic"
            >
              "{productsData.subtitle}"
            </motion.p>

            {/* Séparateur décoratif animé */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="h-px bg-linear-to-r from-transparent via-[#D4AF37]/30 to-transparent mx-auto mt-8"
            />
          </motion.div>
        </motion.div>

        {/* Grille des produits premium */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={sectionVariants}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {productsData.categories.map((product, index) => {
            const ProductIcon = productIcons[product.name] || Sparkles;
            
            return (
              <motion.a
                key={product.id}
                href={product.link}
                custom={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative block"
              >
                {/* Conteneur de la carte avec effet de profondeur */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-700">
                  {/* Conteneur de l'image avec cadre élégant */}
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

                    {/* Overlay premium avec gradient sophistiqué */}
                    <motion.div
                      variants={overlayVariants}
                      className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"
                    />

                    {/* Badge du produit avec animation - avec icône spécifique */}
                    <motion.div
                      variants={badgeVariants}
                      className="absolute top-4 left-4 z-20"
                    >
                      <div className="bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-colors">
                         <span className="text-xs font-bold text-gray-900 flex items-center space-x-1.5">
                          <ProductIcon size={12} className="text-[#D4AF37]" />
                          <span>{product.name}</span>
                         </span>
                      </div>
                    </motion.div>

                    {/* Badge de prix */}
                    <motion.div
                      variants={badgeVariants}
                      className="absolute top-4 right-4 z-20"
                    >
                      <div className="bg-[#D4AF37] text-black px-2.5 py-1 rounded-full shadow-lg">
                        <span className="text-[10px] font-bold">{product.price}</span>
                      </div>
                    </motion.div>

                    {/* Bouton de visualisation au hover */}
                    <motion.div
                      variants={overlayVariants}
                      className="absolute inset-0 flex items-center justify-center z-20"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/20 backdrop-blur-md rounded-full p-3 border-2 border-white/30 group-hover:border-white/50 transition-all"
                      >
                        <Eye size={20} className="text-white" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Contenu de la carte avec séparation élégante */}
                  <div className="relative p-5 bg-white">
                    {/* Ligne décorative */}
                    <div className="absolute top-0 left-5 right-5 h-px bg-linear-to-r from-transparent via-[#D4AF37]/20 to-transparent"></div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Compteur de pièces et lien */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-gray-400">
                        {product.count} modèles
                      </span>
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
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA élégant avec animation sophistiquée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href={productsData.cta.link}
            className="group relative inline-flex items-center space-x-4 px-10 py-5 bg-black text-white font-medium overflow-hidden rounded-full transition-all duration-500 shadow-2xl hover:shadow-[#D4AF37]/20"
          >
            {/* Effet de fond avec particules */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-[#D4AF37] to-[#C5A028]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            />
            
            {/* Cercles décoratifs */}
            <motion.div
              className="absolute -top-10 -right-10 w-20 h-20 bg-white/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Contenu */}
            <span className="relative z-10 text-sm uppercase tracking-wider group-hover:text-black transition-colors duration-300 flex items-center space-x-2">
              <Star size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              <span>{productsData.cta.text}</span>
              <Star size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <ArrowRight size={18} className="relative z-10 group-hover:text-black group-hover:translate-x-2 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;