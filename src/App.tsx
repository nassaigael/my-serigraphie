import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, Truck, Shield, ArrowRight } from 'lucide-react';

// Layout components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Section components
import Hero from './components/sections/home/Hero';
import About from './components/sections/home/About';
import Products from './components/sections/home/Products';
import Contact from './components/sections/home/Contact';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        <Routes>
          {/* Page d'accueil - Une seule route */}
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Products />
              <Contact />

              {/* Promo Banner */}
              <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-xl mb-2">🏆 BEST STREETWEAR I'VE</p>
                    <h3 className="text-4xl md:text-5xl font-bold mb-6">
                      FREE DELIVERY ON ORDERS ABOVE RS 499
                    </h3>
                    <button className="bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 rounded-full group">
                      <span>SEE ALL PRODUCTS</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </section>

              {/* Features Section */}
              <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all duration-300">
                        <Sparkles size={32} />
                      </div>
                      <h4 className="font-bold mb-2">Custom Your Unique Design</h4>
                      <p className="text-gray-600 text-sm">Créez vos t-shirts personnalisés</p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all duration-300">
                        <Truck size={32} />
                      </div>
                      <h4 className="font-bold mb-2">Quick Turnaround Time</h4>
                      <p className="text-gray-600 text-sm">Livraison rapide garantie</p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all duration-300">
                        <Shield size={32} />
                      </div>
                      <h4 className="font-bold mb-2">Ethically Quality Control</h4>
                      <p className="text-gray-600 text-sm">Qualité irréprochable</p>
                    </motion.div>

                    {/* Feature 4 */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D4AF37] group-hover:scale-110 transition-all duration-300">
                        <ShoppingBag size={32} />
                      </div>
                      <h4 className="font-bold mb-2">Lower Your Inventory Risk</h4>
                      <p className="text-gray-600 text-sm">Production à la demande</p>
                    </motion.div>
                  </div>
                </div>
              </section>
            </>
          } />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;