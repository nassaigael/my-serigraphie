import Header from './components/layout/Header';
import Footer from './components/layout/Footer'; // Import du nouveau footer
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Truck, Shield, ArrowRight } from 'lucide-react';
import './App.css';
import Hero from './components/sections/home/hero';
import Categories from './components/sections/home/Categories';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      <Categories />

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