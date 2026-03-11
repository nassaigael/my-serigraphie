import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Check, Maximize2 } from 'lucide-react';
import { type ProductColor } from '../../types/product';

interface ProductGalleryProps {
    images: string[];
    colors: ProductColor[];
    productName: string;
}

const ProductGallery = ({ images, colors, productName }: ProductGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]?.id || '');
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [isZoomed] = useState(false);

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <>
            {/* Galerie principale - Hauteur fixe pour éviter le scroll */}
            <div className="relative h-90 lg:h-100 w-full group">
                {/* Image principale */}
                <div className="relative h-full rounded-2xl lg:rounded-3xl overflow-hidden bg-zinc-100 shadow-xl">
                    <motion.img
                        key={selectedImage}
                        src={images[selectedImage]}
                        alt={`${productName} - Vue ${selectedImage + 1}`}
                        className="w-full h-full object-cover cursor-zoom-in"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setLightboxOpen(true)}
                        style={{
                            scale: isZoomed ? 1.5 : 1,
                            transition: 'scale 0.3s ease'
                        }}
                    />

                    {/* Bouton plein écran */}
                    <button
                        onClick={() => setLightboxOpen(true)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-[#D4AF37] transition-colors z-10"
                    >
                        <Maximize2 size={18} className="text-white" />
                    </button>

                    {/* Indicateur de position */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                        {selectedImage + 1} / {images.length}
                    </div>
                </div>

                {/* Boutons de navigation */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D4AF37] hover:text-white"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#D4AF37] hover:text-white"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>

            {/* Sélecteur de couleurs */}
            {colors.length > 0 && (
                <div className="mt-4">
                    <div className="flex gap-3">
                        {colors.map((color) => (
                            <button
                                key={color.id}
                                onClick={() => {
                                    setSelectedColor(color.id);
                                }}
                                className={`group relative`}
                                title={color.name}
                            >
                                <div
                                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                                        selectedColor === color.id
                                            ? 'border-[#D4AF37] scale-110'
                                            : 'border-transparent hover:scale-105'
                                    }`}
                                    style={{ backgroundColor: color.hex }}
                                />
                                {selectedColor === color.id && (
                                    <motion.div
                                        layoutId="selectedColor"
                                        className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <Check size={10} className="text-white" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Lightbox améliorée */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors z-10"
                        >
                            <X size={24} className="text-white" />
                        </button>

                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={images[selectedImage]}
                                alt={`${productName} - Agrandi`}
                                className="max-h-[85vh] max-w-[85vw] object-contain"
                                onClick={(e) => e.stopPropagation()}
                            />

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            prevImage();
                                        }}
                                        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"
                                    >
                                        <ChevronLeft size={24} className="text-white" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            nextImage();
                                        }}
                                        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"
                                    >
                                        <ChevronRight size={24} className="text-white" />
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProductGallery;