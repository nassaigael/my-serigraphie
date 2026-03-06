import Header from './components/layout/Header';
import Footer from './components/layout/Footer'; // Import du nouveau footer
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Truck, Shield, ArrowRight } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section avec image de fond */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="T-shirts en sérigraphie"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-4"
          >
            HIT THE ROAD
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-light mb-6"
          >
            IN STYLE
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Elevate Your Streetwear Game with Highway!
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg mb-12 max-w-3xl mx-auto text-white/80"
          >
            Highway is your ultimate destination for trendy, street-style fashion that keeps you ahead of the curve.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors rounded-none">
              SHOP NOW
            </button>
            <button className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white hover:text-black transition-colors rounded-none">
              SEE COLLECTION
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Catégories section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            CATEGORIES
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Hoodies */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-900 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Hoodies"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg font-medium border-2 border-white px-6 py-3">SHOP NOW</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">HOODIES</h3>
            </motion.div>

            {/* T-shirts */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-900 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80" 
                  alt="T-shirts"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg font-medium border-2 border-white px-6 py-3">SHOP NOW</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">T-SHIRTS</h3>
            </motion.div>

            {/* Tops */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-gray-900 aspect-square mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80" 
                  alt="Tops"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg font-medium border-2 border-white px-6 py-3">SHOP NOW</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center">TOPS</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bannière promo */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl mb-2">🏆 BEST STREETWEAR I'VE</p>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">FREE DELIVERY ON ORDERS ABOVE RS 499</h3>
            <button className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2">
              SEE ALL PRODUCTS <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={32} />
              </div>
              <h4 className="font-bold mb-2">Custom Your Unique Design</h4>
              <p className="text-gray-600 text-sm">Créez vos t-shirts personnalisés</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck size={32} />
              </div>
              <h4 className="font-bold mb-2">Quick Turnaround Time</h4>
              <p className="text-gray-600 text-sm">Livraison rapide garantie</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={32} />
              </div>
              <h4 className="font-bold mb-2">Ethically Quality Control</h4>
              <p className="text-gray-600 text-sm">Qualité irréprochable</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag size={32} />
              </div>
              <h4 className="font-bold mb-2">Lower Your Inventory Risk</h4>
              <p className="text-gray-600 text-sm">Production à la demande</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supprimer l'ancienne section Newsletter car elle est déjà dans le Footer */}
      {/* La section Newsletter est maintenant intégrée dans le Footer */}

      {/* Nouveau Footer - Remplacer l'ancien footer simplifié */}
      <Footer />
    </div>
  );
}

export default App;