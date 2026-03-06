import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { 
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Shield,
  Truck,
  RefreshCw,
  Flag,
  Heart,
  Sparkles,
  Award,
  Users,
  ChevronRight,
  Star,
  Gem,
  ArrowUp,
  // eslint-disable-next-line no-shadow-restricted-names
  Infinity
} from 'lucide-react';
import { footerData } from '../../data/footer';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Détecter le scroll pour afficher/masquer le bouton
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const iconMap: { [key: string]: React.ElementType } = {
    Instagram: Instagram,
    Facebook: Facebook,
    Linkedin: Linkedin,
    Shield: Shield,
    Truck: Truck,
    RefreshCw: RefreshCw,
    Flag: Flag,
  };

  // Animation variants avec typage correct
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" // Changé de cubic-bezier à "easeOut"
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 1.2, ease: "easeInOut" }
    }
  };

  const scrollButtonVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20 
      }
    },
    exit: { 
      scale: 0, 
      opacity: 0,
      transition: { duration: 0.3 }
    },
    hover: { 
      scale: 1.1,
      y: -5,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

    const newLocal = "absolute top-20 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent";
  return (
    <footer className="relative bg-black text-white pt-24 pb-8 overflow-hidden">
      {/* Bouton Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            variants={scrollButtonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            whileHover="hover"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 group"
            aria-label="Remonter en haut"
          >
            <div className="relative">
              {/* Effet de glow */}
              <div className="absolute inset-0 bg-linear-to-r from-white/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Cercle principal */}
              <div className="relative w-14 h-14 bg-linear-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border border-white/20 group-hover:border-white/40 transition-all">
                <ArrowUp size={24} className="text-black group-hover:-translate-y-1 transition-transform" />
              </div>
              
              {/* Cercles concentriques décoratifs */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
              <div className="absolute inset-2 rounded-full border border-white/10"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Arrière-plan ultra-premium */}
      <div className="absolute inset-0">
        {/* Gradient de base */}
        <div className="absolute inset-0 bg-linear-to-br from-zinc-900 via-black to-zinc-900"></div>
        
        {/* Motif de lignes fines */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Cercles lumineux sophistiqués */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[128px]"></div>
        
        {/* Lignes de lumière */}
        <div className={newLocal}></div>
        <div className="absolute bottom-20 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* En-tête élégant avec titre */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 font-light mb-3 block">
              L'Art de la Sérigraphie
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight">
              <span className="font-bold bg-linear-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                HIGHWAY
              </span>
            </h2>
          </motion.div>
          
          <motion.div 
            variants={lineVariants}
            className="w-24 h-px bg-linear-to-r from-transparent via-white/40 to-transparent mx-auto mt-6"
          ></motion.div>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-16"
        >
          {/* Company Info - Version luxe */}
          <motion.div variants={itemVariants} className="lg:col-span-4 text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start space-x-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-linear-to-br from-white/10 to-white/5 p-3 rounded-xl border border-white/10 backdrop-blur-sm">
                  <Gem size={36} className="text-white" />
                </div>
              </div>
              <span className="text-3xl font-light tracking-tight">
                <span className="font-bold">HIGH</span>
                <span className="font-light text-white/60">WAY</span>
              </span>
            </div>
            
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              {footerData.company.description}
            </p>
            
            {/* Signature élégante */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Sparkles size={14} className="text-yellow-500/70" />
              <p className="text-white/40 text-xs italic font-light tracking-wide">
                "{footerData.company.slogan}"
              </p>
            </div>
            
            {/* Badges luxueux */}
            <div className="grid grid-cols-2 gap-3 mt-8 max-w-sm mx-auto lg:mx-0">
              {footerData.badges.map((badge, index) => {
                const Icon = iconMap[badge.icon] || Shield;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative bg-white/5 backdrop-blur-sm px-3 py-2.5 rounded-lg border border-white/5 hover:border-white/20 transition-all">
                      <div className="flex items-center justify-center space-x-2">
                        <Icon size={14} className="text-white/70 group-hover:text-white" />
                        <span className="text-xs font-light text-white/70 group-hover:text-white">{badge.name}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Links - Design épuré */}
          <motion.div variants={itemVariants} className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg font-light mb-6 tracking-wider">
              <span className="relative inline-block">
                EXPLORER
                <motion.span 
                  className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-8 h-px bg-white/30"
                ></motion.span>
              </span>
            </h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 3 }}
                  className="transform transition-transform"
                >
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white transition-all text-sm inline-flex items-center group"
                  >
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg font-light mb-6 tracking-wider">
              <span className="relative inline-block">
                SERVICES
                <motion.span 
                  className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-8 h-px bg-white/30"
                ></motion.span>
              </span>
            </h3>
            <ul className="space-y-3">
              {footerData.services.map((service) => (
                <motion.li 
                  key={service.name}
                  whileHover={{ x: 3 }}
                  className="transform transition-transform"
                >
                  <a
                    href={service.href}
                    className="text-white/50 hover:text-white transition-all text-sm inline-flex items-center group"
                  >
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants} className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg font-light mb-6 tracking-wider">
              <span className="relative inline-block">
                SUPPORT
                <motion.span 
                  className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-8 h-px bg-white/30"
                ></motion.span>
              </span>
            </h3>
            <ul className="space-y-3">
              {footerData.support.map((item) => (
                <motion.li 
                  key={item.name}
                  whileHover={{ x: 3 }}
                  className="transform transition-transform"
                >
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white transition-all text-sm inline-flex items-center group"
                  >
                    <ChevronRight size={12} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact - Design luxe */}
          <motion.div variants={itemVariants} className="lg:col-span-2 text-center lg:text-left">
            <h3 className="text-lg font-light mb-6 tracking-wider">
              <span className="relative inline-block">
                CONTACT
                <motion.span 
                  className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-8 h-px bg-white/30"
                ></motion.span>
              </span>
            </h3>
            
            <div className="space-y-4 mb-8">
              <motion.a 
                whileHover={{ x: 3 }}
                href={`tel:${footerData.contact.phone}`}
                className="flex items-center justify-center lg:justify-start space-x-3 text-white/50 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <Phone size={14} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-light">{footerData.contact.phone}</span>
              </motion.a>
              
              <motion.a 
                whileHover={{ x: 3 }}
                href={`mailto:${footerData.contact.email}`}
                className="flex items-center justify-center lg:justify-start space-x-3 text-white/50 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <Mail size={14} />
                </div>
                <span className="text-sm font-light">{footerData.contact.email}</span>
              </motion.a>
              
              <motion.div 
                whileHover={{ x: 3 }}
                className="flex items-center justify-center lg:justify-start space-x-3 text-white/50"
              >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span className="text-sm font-light">{footerData.contact.address}</span>
              </motion.div>
            </div>

            {/* Social Links - Design raffiné */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4">Réseaux</h4>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {footerData.social.map((social) => {
                  const Icon = iconMap[social.icon] || Instagram;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="group relative"
                      aria-label={social.name}
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/10 transition-all">
                        <Icon size={16} className="text-white/60 group-hover:text-white" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter - Design épuré */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative py-12 mb-12"
        >
          <div className="absolute inset-0 bg-linear-to-r from-white/5 via-transparent to-white/5 rounded-3xl"></div>
          
          <div className="relative max-w-2xl mx-auto text-center px-6">
            <Star size={24} className="text-white/20 mx-auto mb-4" />
            <h3 className="text-2xl font-light mb-3 tracking-wide">
              {footerData.newsletter.title}
            </h3>
            <p className="text-white/40 text-sm mb-8">
              {footerData.newsletter.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={footerData.newsletter.placeholder}
                className="flex-1 px-5 py-3 bg-white/5 border border-white/10 rounded-full focus:outline-none focus:border-white/30 focus:ring-2 focus:ring-white/5 transition-all text-white placeholder-white/30 text-center sm:text-left"
              />
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-black font-light rounded-full hover:bg-white/90 transition-all shadow-lg"
              >
                {footerData.newsletter.buttonText}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer bottom - Élégant */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative pt-8"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="flex flex-col items-center space-y-6">
            {/* Badges de confiance */}
            <div className="flex items-center space-x-8 text-white/30">
              <div className="flex items-center space-x-2">
                <Award size={14} />
                <span className="text-xs font-light">Qualité certifiée</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={14} />
                <span className="text-xs font-light">+15 ans d'expertise</span>
              </div>
              <div className="flex items-center space-x-2">
                <Infinity size={14} />
                <span className="text-xs font-light">Satisfaction garantie</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-white/30 font-light text-center">
              {footerData.copyright.text.replace('2024', currentYear.toString())}
            </div>
            
            {/* Made with love */}
            <div className="text-xs text-white/20 flex items-center space-x-2">
              <span>{footerData.copyright.madeWith}</span>
              <Heart size={12} className="text-red-500/50 fill-current" />
              <span>{footerData.copyright.by}</span>
            </div>
            
            {/* Legal links */}
            <div className="flex flex-wrap justify-center gap-8 text-xs">
              <a href="/legal" className="text-white/30 hover:text-white/70 transition-colors font-light tracking-wide">Mentions légales</a>
              <a href="/privacy" className="text-white/30 hover:text-white/70 transition-colors font-light tracking-wide">Confidentialité</a>
              <a href="/cookies" className="text-white/30 hover:text-white/70 transition-colors font-light tracking-wide">Cookies</a>
              <a href="/terms" className="text-white/30 hover:text-white/70 transition-colors font-light tracking-wide">CGV</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;