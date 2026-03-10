import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Calendar, 
  Shirt, 
  Users, 
  Heart, 
  CheckCircle, 
  Quote,
  Award,
  Star,
  Feather
} from 'lucide-react';
import { aboutData } from '../../../data/about';

const About = () => {
  // Animation variants sophistiqués
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

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5 + i * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const iconMap: { [key: string]: React.ElementType } = {
    Calendar: Calendar,
    Shirt: Shirt,
    Users: Users,
    Heart: Heart,
  };

  return (
    <section id="about" className="relative py-28 md:py-36 bg-white overflow-hidden">
      {/* Éléments décoratifs de fond sophistiqués */}
      <div className="absolute inset-0">
        {/* Cercles lumineux */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-linear-to-br from-gold/10 to-transparent rounded-full blur-[128px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-linear-to-tl from-gold/10 to-transparent rounded-full blur-[128px]"></div>
        
        {/* Lignes de lumière */}
        <div className="absolute top-40 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>
        <div className="absolute bottom-40 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/20 to-transparent"></div>
        
        {/* Motif de points élégant */}
        <div className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #D4AF37 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Motif de lignes croisées */}
        <div className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: 'linear-gradient(45deg, #D4AF37 1px, transparent 1px), linear-gradient(-45deg, #D4AF37 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Contenu texte - côté gauche (inchangé) */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Élément décoratif */}
            <div className="absolute -top-10 -left-10 w-32 h-32 border border-gold/10 rounded-full"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-gold/10 rounded-full"></div>

            {/* Titre principal */}
            <motion.div variants={titleVariants} className="mb-8">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 leading-[1.1]">
                <span className="block">{aboutData.title.light}</span>
                <span className="font-bold relative inline-block mt-2">
                  {aboutData.title.bold}
                  <motion.span 
                    className="absolute -bottom-3 left-0 w-full h-1 bg-linear-to-r from-gold to-transparent"
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
                <span className="block text-gold text-4xl md:text-5xl lg:text-6xl mt-4">
                  {aboutData.title.accent}
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={contentVariants} className="space-y-6 mb-10">
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed text-lg font-light">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Features list */}
            <motion.div variants={contentVariants} className="space-y-4 mb-12">
              {aboutData.features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CheckCircle size={20} className="text-gold relative z-10" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-lg">{feature.title}</h4>
                    <p className="text-gray-500 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div 
              variants={contentVariants} 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-gold via-gold/50 to-transparent"></div>
              <div className="flex items-center space-x-6 pl-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/30 rounded-full blur-xl"></div>
                  <div className="relative w-16 h-16 rounded-full bg-linear-to-br from-gold to-gold/50 flex items-center justify-center">
                    <Quote size={28} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="font-serif text-2xl italic text-gray-800 mb-1">"{aboutData.signature}"</p>
                  <p className="text-sm text-gray-500 tracking-wide">{aboutData.signatureRole}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image et statistiques - côté droit (IMAGE RÉDUITE) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative lg:max-w-md lg:mx-auto" 
          >
            {/* Cadre décoratif - ajusté */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-2 border-gold/20 rounded-2xl lg:-top-6 lg:-right-6 lg:w-48 lg:h-48"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-gold/20 rounded-2xl lg:-bottom-6 lg:-left-6 lg:w-48 lg:h-48"></div>

            {/* Image principale */}
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl lg:shadow-3xl transform group">
              <div className="aspect-3/4 lg:aspect-4/5"> {/* Ratio plus carré sur PC */}
                <img
                  src={aboutData.image}
                  alt="Atelier HIGHWAY"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              
              {/* Overlay artistique */}
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20"></div>
              
              {/* Motif doré superposé */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 2px, transparent 2px, transparent 10px)',
                }}
              />
              
              {/* Légende élégante */}
              <motion.div 
                className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="bg-black/60 backdrop-blur-md rounded-full px-3 py-1.5 lg:px-4 lg:py-2 inline-block border border-gold/30">
                  <p className="text-white text-xs lg:text-sm flex items-center">
                    <Award size={12} className="mr-1.5 lg:mr-2 text-gold" />
                    {aboutData.imageCaption}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Statistiques flottantes - grille ajustée */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 mt-6 lg:mt-8">
              {aboutData.stats.map((stat, index) => {
                const Icon = iconMap[stat.icon] || Heart;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={statVariants}
                    whileHover="hover"
                    className="group relative bg-linear-to-br from-white to-gray-50 rounded-xl lg:rounded-2xl p-4 lg:p-5 shadow-lg lg:shadow-xl hover:shadow-xl lg:hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    {/* Éclat au hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-gold/0 via-gold/0 to-gold/10 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2 lg:mb-3">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-linear-to-br from-gold/20 to-gold/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon size={18} className="lg:size-5.5 text-gold" />
                        </div>
                        <Star size={12} className="lg:size-3.5 text-gold/30" />
                      </div>
                      <div className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-[10px] lg:text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Élément décoratif - plus petit */}
            <motion.div 
              className="absolute -bottom-3 -right-3 w-12 h-12 lg:-bottom-4 lg:-right-4 lg:w-20 lg:h-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Feather size={40} className="lg:size-20 text-gold/20" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;