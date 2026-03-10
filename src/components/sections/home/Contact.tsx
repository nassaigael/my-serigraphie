import React, { useState } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Send,
    ShoppingBag,
    CheckCircle,
    AlertCircle,
    X
} from 'lucide-react';
import { contactData } from '../../../data/contact';

const Contact = () => {
    const [mode, setMode] = useState<'contact' | 'order'>('contact');
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [isSubmitting, setIsSubmitting] = useState(false);

    // États pour les formulaires
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [orderForm, setOrderForm] = useState({
        name: '',
        email: '',
        phone: '',
        productType: '',
        quantity: '',
        deadline: '',
        budget: '',
        description: ''
    });

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

    const formVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
        },
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };

    const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setOrderForm({
            ...orderForm,
            [e.target.name]: e.target.value
        });
    };

    const resetForms = () => {
        setContactForm({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        setOrderForm({
            name: '',
            email: '',
            phone: '',
            productType: '',
            quantity: '',
            deadline: '',
            budget: '',
            description: ''
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi
        setTimeout(() => {
            setIsSubmitting(false);
            setFormStatus('success');
            resetForms(); // Réinitialisation des formulaires

            // Reset du statut après 5 secondes
            setTimeout(() => {
                setFormStatus('idle');
            }, 5000);
        }, 1500);
    };

    // Animation variants pour les messages
    const messageVariants: Variants = {
        hidden: { opacity: 0, y: -20, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                type: "spring",
                stiffness: 500,
                damping: 30
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.9,
            transition: { duration: 0.2 }
        }
    };

    const newLocal = "absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-[#D4AF37]/5 to-transparent rounded-full blur-3xl";
    return (
        <section id="contact" className="relative py-12  bg-linear-to-b from-white to-zinc-50 overflow-hidden">
            {/* Éléments décoratifs de fond */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
                <div className={newLocal}></div>

                <div className="absolute top-40 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>
                <div className="absolute bottom-40 left-0 w-full h-px bg-linear-to-r from-transparent via-[#D4AF37]/10 to-transparent"></div>

                <div className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
                {/* En-tête - Centré */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="text-center mb-16"
                >
                    <motion.div variants={titleVariants} className="inline-block">

                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-4">                                
                            <span className="font-bold relative inline-block">
                                {contactData.title.bold}
                                <motion.span
                                    className="absolute -bottom-3 left-0 w-full h-1 bg-linear-to-r from-[#D4AF37] to-transparent"
                                    initial={{ scaleX: 0, originX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                />
                            </span>
                            <span className="block text-[#D4AF37] text-4xl md:text-5xl lg:text-6xl mt-4">
                                {contactData.title.accent}
                            </span>
                        </h2>

                        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                            {contactData.description}
                        </p>
                    </motion.div>
                </motion.div>

                {/* Toggle Switch - Centré */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex justify-center mb-12"
                >
                    <div className="bg-white p-1 rounded-full shadow-lg border border-zinc-100 inline-flex">
                        <button
                            onClick={() => setMode('contact')}
                            className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${mode === 'contact'
                                ? 'text-white'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {mode === 'contact' && (
                                <motion.div
                                    layoutId="activeMode"
                                    className="absolute inset-0 bg-[#D4AF37] rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center space-x-2">
                                <Mail size={16} />
                                <span>Contact</span>
                            </span>
                        </button>

                        <button
                            onClick={() => setMode('order')}
                            className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${mode === 'order'
                                ? 'text-white'
                                : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            {mode === 'order' && (
                                <motion.div
                                    layoutId="activeMode"
                                    className="absolute inset-0 bg-[#D4AF37] rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center space-x-2">
                                <ShoppingBag size={16} />
                                <span>Commande</span>
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Formulaire principal - Centré dans la page */}
                <motion.div
                    key={mode}
                    variants={formVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    {/* Formulaire */}
                    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border border-zinc-100 relative overflow-hidden">
                        {/* Décoration de fond du formulaire */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-[#D4AF37]/5 to-transparent rounded-full blur-3xl"></div>
                        
                        {/* Status Messages Premium */}
                        <AnimatePresence mode="wait">
                            {formStatus === 'success' && (
                                <motion.div
                                    key="success"
                                    variants={messageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="relative mb-8 overflow-hidden rounded-2xl bg-linear-to-r from-[#D4AF37]/10 to-[#D4AF37]/5 border border-[#D4AF37]/20"
                                >
                                    {/* Barre de progression dorée */}
                                    <motion.div
                                        className="absolute top-0 left-0 h-1 bg-[#D4AF37]"
                                        initial={{ width: '100%' }}
                                        animate={{ width: '0%' }}
                                        transition={{ duration: 5, ease: "linear" }}
                                    />
                                    
                                    <div className="relative p-5 flex items-center space-x-4">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-md"></div>
                                            <div className="relative w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
                                                <CheckCircle size={24} className="text-white" />
                                            </div>
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h4 className="text-[#D4AF37] font-semibold text-lg mb-1">
                                                {mode === 'contact' ? 'Message envoyé !' : 'Commande reçue !'}
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {mode === 'contact' 
                                                    ? contactData.contact.form.success 
                                                    : contactData.order.form.success}
                                            </p>
                                        </div>
                                        
                                        <button
                                            onClick={() => setFormStatus('idle')}
                                            className="p-2 hover:bg-white/50 rounded-full transition-colors"
                                        >
                                            <X size={18} className="text-gray-400 hover:text-gray-600" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {formStatus === 'error' && (
                                <motion.div
                                    key="error"
                                    variants={messageVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="relative mb-8 overflow-hidden rounded-2xl bg-linear-to-r from-red-50 to-red-50/50 border border-red-200"
                                >
                                    {/* Barre de progression rouge */}
                                    <motion.div
                                        className="absolute top-0 left-0 h-1 bg-red-500"
                                        initial={{ width: '100%' }}
                                        animate={{ width: '0%' }}
                                        transition={{ duration: 5, ease: "linear" }}
                                    />
                                    
                                    <div className="relative p-5 flex items-center space-x-4">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-md"></div>
                                            <div className="relative w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                                                <AlertCircle size={24} className="text-white" />
                                            </div>
                                        </div>
                                        
                                        <div className="flex-1">
                                            <h4 className="text-red-600 font-semibold text-lg mb-1">
                                                Oups ! Une erreur
                                            </h4>
                                            <p className="text-gray-600 text-sm">
                                                {mode === 'contact' 
                                                    ? contactData.contact.form.error 
                                                    : contactData.order.form.error}
                                            </p>
                                        </div>
                                        
                                        <button
                                            onClick={() => setFormStatus('idle')}
                                            className="p-2 hover:bg-white/50 rounded-full transition-colors"
                                        >
                                            <X size={18} className="text-gray-400 hover:text-gray-600" />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Formulaire de contact */}
                        {mode === 'contact' && (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                            {contactData.contact.form.name}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={contactForm.name}
                                            onChange={handleContactChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                            placeholder="Jean Dupont"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                            {contactData.contact.form.email}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={contactForm.email}
                                            onChange={handleContactChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                            placeholder="jean@exemple.fr"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                        {contactData.contact.form.subject}
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={contactForm.subject}
                                        onChange={handleContactChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                        placeholder="Sujet de votre message"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                        {contactData.contact.form.message}
                                    </label>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        value={contactForm.message}
                                        onChange={handleContactChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                                        placeholder="Votre message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative group overflow-hidden bg-black text-white py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-rr from-[#D4AF37] to-[#C5A028]"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                <span>Envoi en cours...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{contactData.contact.form.submit}</span>
                                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        )}

                        {/* Formulaire de commande */}
                        {mode === 'order' && (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                            {contactData.order.form.name}
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={orderForm.name}
                                            onChange={handleOrderChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                            placeholder="Jean Dupont"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                            {contactData.order.form.email}
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={orderForm.email}
                                            onChange={handleOrderChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                            placeholder="jean@exemple.fr"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                            {contactData.order.form.phone}
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={orderForm.phone}
                                            onChange={handleOrderChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                            placeholder="06 12 34 56 78"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                            {contactData.order.form.productType}
                                        </label>
                                        <select
                                            name="productType"
                                            value={orderForm.productType}
                                            onChange={handleOrderChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                        >
                                            <option value="">Sélectionnez</option>
                                            {contactData.order.productTypes.map((type) => (
                                                <option key={type} value={type}>{type}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                            {contactData.order.form.quantity}
                                        </label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={orderForm.quantity}
                                            onChange={handleOrderChange}
                                            min="1"
                                            required
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                            placeholder="50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                            {contactData.order.form.deadline}
                                        </label>
                                        <input
                                            type="date"
                                            name="deadline"
                                            value={orderForm.deadline}
                                            onChange={handleOrderChange}
                                            required
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                        {contactData.order.form.budget}
                                    </label>
                                    <input
                                        type="text"
                                        name="budget"
                                        value={orderForm.budget}
                                        onChange={handleOrderChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                        placeholder="500€ - 1000€"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                                        {contactData.order.form.description}
                                    </label>
                                    <textarea
                                        rows={4}
                                        name="description"
                                        value={orderForm.description}
                                        onChange={handleOrderChange}
                                        required
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none"
                                        placeholder="Description détaillée de votre projet..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative group overflow-hidden bg-black text-white py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-linear-to-r from-[#D4AF37] to-[#C5A028]"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: 0 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <span className="relative z-10 flex items-center justify-center space-x-2">
                                        {isSubmitting ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                <span>Envoi en cours...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>{contactData.order.form.submit}</span>
                                                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;