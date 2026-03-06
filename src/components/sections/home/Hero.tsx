import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import {  Palette, Award } from 'lucide-react';
import { heroData } from '../../../data/hero';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Effet de parallax subtil sur la souris
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animation variants avec typage correct
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const backgroundVariants: Variants = {
        initial: { scale: 1 },
        animate: {
            scale: 1.05,
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
            },
        },
    };


    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Image de fond avec overlay et animation */}
            <motion.div
                variants={backgroundVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 z-0"
                style={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="T-shirts en sérigraphie"
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Overlay avec gradient sophistiqué */}
                <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/70"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30"></div>

                {/* Éléments décoratifs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
            </motion.div>

            {/* Contenu principal */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center text-white"
            >

                {/* Titre principal */}
                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-4"
                >
                    <span className="block">{heroData.title.line1}</span>
                    <span className="block text-gold">{heroData.title.line2}</span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.h2
                    variants={itemVariants}
                    className="text-xl md:text-2xl lg:text-3xl font-light mb-6 max-w-3xl mx-auto text-white/90"
                >
                    {heroData.subtitle}
                </motion.h2>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10"
                >
                    {heroData.description}
                </motion.p>

                {/* Boutons CTA */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 mb-16"
                >
                    <a
                        href={heroData.cta.primary.link}
                        className="group relative px-8 py-4 bg-gold text-black font-medium rounded-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/30"
                    >
                        <span className="relative z-10">{heroData.cta.primary.text}</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                    </a>

                    <a
                        href={heroData.cta.secondary.link}
                        className="px-8 py-4 border-2 border-white text-white font-medium rounded-none hover:bg-white hover:text-black transition-all duration-300"
                    >
                        {heroData.cta.secondary.text}
                    </a>
                </motion.div>

                {/* Statistiques */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center space-x-12 md:space-x-16"
                >
                    {heroData.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-gold mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs md:text-sm uppercase tracking-wider text-white/60">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>


            {/* Éléments décoratifs supplémentaires */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold/50 to-transparent"></div>

            <motion.div
                className="absolute top-20 right-20 text-gold/20"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <Palette size={80} />
            </motion.div>

            <motion.div
                className="absolute bottom-20 left-20 text-gold/10"
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                <Award size={120} />
            </motion.div>
        </section>
    );
};

export default Hero;