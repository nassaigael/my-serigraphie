import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Sparkles, Star, ChevronRight } from 'lucide-react';
import { categoriesData } from '../../../data/categories';

const Categories = () => {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
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
      scale: 1.05,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-bl from-gold/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-linear-to-tr from-gold/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Motif subtil de points */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* En-tête de section premium */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
          className="text-center mb-20"
        >
          <motion.div variants={titleVariants} className="inline-block">
            {/* Badge premium */}
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"></div>
              <Sparkles size={16} className="text-gold/70" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold/60 font-light">
                Collection 2024
              </span>
              <Sparkles size={16} className="text-gold/70" />
              <div className="w-8 h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"></div>
            </div>

            {/* Titre principal */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4">
              <span className="font-bold relative">
                CATEGORIES
                <motion.span 
                  className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-linear-to-r from-transparent via-gold to-transparent"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>

            {/* Sous-titre élégant */}
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
              {categoriesData.subtitle}
            </p>

            {/* Séparateur décoratif */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <Star size={12} className="text-gold/40" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold/30">excellence</span>
              <Star size={12} className="text-gold/40" />
            </div>
          </motion.div>
        </motion.div>

        {/* Grille des catégories premium */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {categoriesData.categories.map((category, index) => (
            <motion.a
              key={category.id}
              href={category.link}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative block"
            >
              {/* Conteneur de l'image */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 mb-4">
                <motion.div
                  variants={imageVariants}
                  className="aspect-4/5 overflow-hidden"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Badge de catégorie (toujours visible) */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                  <span className="text-xs font-medium text-gray-900">{category.name}</span>
                </div>

                {/* Compteur d'articles (toujours visible) */}
                <div className="absolute top-4 right-4 bg-gold text-black px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                  {category.count} pièces
                </div>
              </div>

              {/* Description et détails - TOUJOURS VISIBLES */}
              <div className="px-1">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Lien Découvrir toujours visible */}
                <div className="flex items-center text-gold text-sm font-medium group/link">
                  <span>Découvrir</span>
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronRight size={16} className="ml-1" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA élégant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20"
        >
          <a
            href={categoriesData.cta.link}
            className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-black text-white font-medium overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {/* Effet de fond au hover */}
            <motion.div
              className="absolute inset-0 bg-gold"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            
            {/* Contenu */}
            <span className="relative z-10 text-sm uppercase tracking-wider group-hover:text-black transition-colors">
              {categoriesData.cta.text}
            </span>
            <ArrowRight size={16} className="relative z-10 group-hover:text-black group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;