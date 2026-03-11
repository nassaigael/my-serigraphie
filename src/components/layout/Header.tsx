import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Palette
} from 'lucide-react';
import { navigationItems, type NavItem } from '../../config/navigationConfig';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Gestion du scroll pour changer le style et détecter la section active
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Détecter la section active pour le surlignage du menu
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.clientHeight;
        if (sectionTop <= 150 && sectionTop + sectionHeight > 0) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Fermer le menu mobile quand on redimensionne
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fonction de smooth scroll vers les sections
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Fermer le menu mobile si ouvert
    setIsOpen(false);
    
    // Extraire l'ID de la section (enlever le #)
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerHeight = scrolled ? 80 : 120; // Hauteur du header selon l'état du scroll
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Animation variants
  const headerVariants: Variants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  const logoVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1, x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const navItemVariants: Variants = {
    hover: {
      y: -2,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.3, staggerChildren: 0.05 }
    },
    exit: { opacity: 0, y: -10 }
  };

  const dropdownItemVariants: Variants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const mobileMenuVariants: Variants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { type: 'spring', damping: 30, stiffness: 250 }
    },
    exit: { x: '100%' }
  };

  // Classes conditionnelles pour mobile
  const mobileMenuButtonClass = `lg:hidden p-2 rounded-lg transition-all duration-300 ${scrolled || isOpen
    ? 'text-gray-700 hover:text-black bg-gray-100 hover:bg-gray-200'
    : 'text-white hover:text-gray-200 bg-white/10 hover:bg-white/20 backdrop-blur-sm'
    }`;

  return (
    <>
      {/* Top Bar - Info de contact (cachée sur mobile) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`hidden lg:block transition-all duration-300 ${scrolled
          ? 'bg-black text-white py-1'
          : 'bg-black/80 backdrop-blur-sm text-white'
          } text-sm`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-8">
            <div className="flex items-center space-x-6">
              <a href="tel:+33123456789" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                <Phone size={14} />
                <span>+33 1 23 45 67 89</span>
              </a>
              <a href="mailto:contact@highway.fr" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                <Mail size={14} />
                <span>contact@highway.fr</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Instagram size={14} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">
                <Facebook size={14} />
              </a>
              <span className="text-xs">Sérigraphie d'exception depuis 2010</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header principal */}
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`sticky top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-3 md:py-5'
          }`}
        style={{ top: scrolled ? 0 : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 32 : 0) }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="/"
              variants={logoVariants}
              initial="initial"
              animate="animate"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="relative z-10 flex items-center space-x-2"
            >
              <Palette
                size={24}
                className={`transition-colors duration-300 ${scrolled || isOpen ? 'text-black' : 'text-black'
                  }`}
              />
              <span className={`text-xl md:text-3xl font-black tracking-tighter transition-colors duration-300 ${scrolled || isOpen ? 'text-black' : 'text-black'
                }`}>
                HIGHWAY
              </span>
            </motion.a>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <ul className="flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <li
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.a
                      href={item.href}
                      variants={navItemVariants}
                      whileHover="hover"
                      onClick={(e) => scrollToSection(e, item.href)}
                      className={`flex items-center space-x-1 px-4 py-2 font-medium  transition-colors ${
                        activeSection === item.href.replace('#', '')
                          ? 'text-[#D4AF37] border-b-2 border-[#D4AF37]'
                          : scrolled
                            ? 'text-gray-700 hover:text-black'
                            : 'text-black/90 hover:text-black'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                        />
                      )}
                    </motion.a>

                    {/* Dropdown */}
                    {item.hasDropdown && item.dropdownItems && (
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                          >
                            <div className="py-2">
                              {item.dropdownItems.map((dropdownItem) => (
                                <motion.a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  variants={dropdownItemVariants}
                                  onClick={(e) => scrollToSection(e, dropdownItem.href)}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                                >
                                  <div className="font-medium">{dropdownItem.name}</div>
                                  {dropdownItem.description && (
                                    <div className="text-xs text-gray-500 mt-0.5">
                                      {dropdownItem.description}
                                    </div>
                                  )}
                                </motion.a>
                              ))}
                            </div>

                            {/* CTA dans le dropdown */}
                            <div className="bg-gray-50 p-4 border-t border-gray-100">
                              <a
                                href="/contact"
                                onClick={(e) => scrollToSection(e, '#contact')}
                                className="block text-center text-sm font-medium text-black hover:underline"
                              >
                                Demander un devis →
                              </a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => scrollToSection(e, '#contact')}
                className={`px-6 py-2.5 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg ${scrolled
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-black text-white hover:bg-gray-800'
                  }`}
              >
                Devis gratuit
              </motion.a>
            </div>

            {/* Menu Mobile Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* CTA Mobile simplifié */}
              <a
                href="#contact"
                onClick={(e) => {
                  scrollToSection(e, '#contact');
                  setIsOpen(false);
                }}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 ${scrolled || isOpen
                  ? 'bg-black text-white'
                  : 'bg-black text-white'
                  }`}
              >
                Devis
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={mobileMenuButtonClass}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} className='text-black' />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col min-h-full">
                {/* En-tête du menu mobile */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Palette size={20} className="text-black" />
                    <span className="text-xl font-black tracking-tighter">
                      HIGHWAY
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Fermer le menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Navigation mobile */}
                <nav className="flex-1 p-4">
                  <ul className="space-y-1">
                    {navigationItems.map((item) => (
                      <li key={item.name}>
                        {item.hasDropdown && item.dropdownItems ? (
                          <MobileDropdown 
                            item={item} 
                            onLinkClick={(e, href) => {
                              scrollToSection(e, href);
                              setIsOpen(false);
                            }}
                          />
                        ) : (
                          <a
                            href={item.href}
                            onClick={(e) => {
                              scrollToSection(e, item.href);
                              setIsOpen(false);
                            }}
                            className={`block px-4 py-3 rounded-lg transition-colors font-medium text-base ${
                              activeSection === item.href.replace('#', '')
                                ? 'text-[#D4AF37] bg-[#D4AF37]/5 border-l-2 border-[#D4AF37]'
                                : 'text-gray-900 hover:bg-gray-50'
                            }`}
                          >
                            {item.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Footer du menu mobile */}
                <div className="p-4 border-t border-gray-100 bg-gray-50">
                  {/* Contact info */}
                  <div className="space-y-2 mb-4">
                    <a href="tel:+33123456789" className="flex items-center space-x-3 text-sm text-gray-700 hover:text-black">
                      <Phone size={16} />
                      <span>+33 1 23 45 67 89</span>
                    </a>
                    <a href="mailto:contact@highway.fr" className="flex items-center space-x-3 text-sm text-gray-700 hover:text-black">
                      <Mail size={16} />
                      <span>contact@highway.fr</span>
                    </a>
                  </div>

                  {/* Social links */}
                  <div className="flex space-x-3 mb-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                    >
                      <Facebook size={18} />
                    </a>
                  </div>

                  {/* CTA mobile */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      scrollToSection(e, '#contact');
                      setIsOpen(false);
                    }}
                    className="block w-full py-3 bg-black text-white text-center font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-md"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// Interface pour le composant MobileDropdown
interface MobileDropdownProps {
  item: NavItem;
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

// Composant pour le dropdown mobile
const MobileDropdown = ({ item, onLinkClick }: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownVariants: Variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="border-b border-gray-50 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors font-medium text-base"
        aria-expanded={isOpen}
      >
        <span>{item.name}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && item.dropdownItems && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-1">
              {item.dropdownItems.map((dropdownItem) => (
                <a
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  onClick={(e) => onLinkClick(e, dropdownItem.href)}
                  className="block px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {dropdownItem.name}
                  {dropdownItem.description && (
                    <span className="block text-xs text-gray-400 mt-0.5">
                      {dropdownItem.description}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;