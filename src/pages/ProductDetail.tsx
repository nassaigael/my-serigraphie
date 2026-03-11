import ProductGallery from '../components/products/ProductGallery';
import ProductInfo from '../components/products/ProductInfo';
import ProductDetails from '../components/products/ProductDetails';
import type { ProductDetail as ProductDetailType } from '../types/product';

interface ProductDetailProps {
  product: ProductDetailType;
  onClose: () => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  quantity: number;
  setQuantity: (quantity: number) => void;
  setShowSizeGuide: (show: boolean) => void;
}

const ProductDetail = ({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
}: ProductDetailProps) => {
  const images = [
    product.mainImage,
    ...product.colors.map(c => c.image)
  ];

  return (
    <div>
      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Galerie */}
        <div>
          <ProductGallery
            images={images}
            colors={product.colors}
            productName={product.name}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>

        {/* Informations */}
        <div>
          <ProductInfo
            name={product.name}
            category={product.category}
            price={product.price}
            description={product.description}
            longDescription={product.longDescription}
            sizes={product.sizes}
            features={product.features}
            specifications={product.specifications}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>

      {/* Détails supplémentaires */}
      <div className="mt-12">
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