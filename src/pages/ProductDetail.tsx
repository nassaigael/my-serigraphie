import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProductGallery from '../components/products/ProductGallery';
import ProductInfo from '../components/products/ProductInfo';
import ProductDetails from '../components/products/ProductDetails'; // Nouvel import
import { productsData } from '../data/productDetail';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productsData[productId || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900 mb-4">Produit non trouvé</h2>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-[#D4AF37] hover:underline"
          >
            <ChevronLeft size={16} />
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </div>
    );
  }

  const images = [
    product.mainImage,
    ...product.colors.map(c => c.image)
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header spacer */}
      <div className="h-24 lg:h-28"></div>

      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Fil d'Ariane */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <span className="text-gray-900">{product.category}</span>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Contenu principal - Hauteur fixe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Galerie - Hauteur fixe */}
          <div className="lg:sticky lg:top-28 h-fit">
            <ProductGallery
              images={images}
              colors={product.colors}
              productName={product.name}
            />
          </div>

          {/* Informations - Hauteur fixe avec scroll interne */}
          <div className="lg:h-[calc(100vh-12rem)]">
            <ProductInfo
              name={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
              longDescription={product.longDescription}
              sizes={product.sizes}
              features={product.features}
              specifications={product.specifications}
            />
          </div>
        </div>

        {/* Détails supplémentaires - EN BAS de la galerie et des infos */}
        <ProductDetails
          features={product.features}
          specifications={product.specifications}
          longDescription={product.longDescription}
        />
      </div>
    </div>
  );
};

export default ProductDetail;