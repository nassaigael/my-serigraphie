import { Check } from 'lucide-react';

interface ProductDetailsProps {
  features: string[];
  specifications: {
    material: string;
    weight: string;
    care: string;
    origin: string;
  };
  longDescription: string;
}

const ProductDetails = ({
  features,
  specifications,
  longDescription
}: ProductDetailsProps) => {
  return (
    <div className="max-w-5xl mx-auto mt-16 md:mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-3">
          <span className="font-bold">DÉTAILS</span> DU PRODUIT
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Caractéristiques */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <span className="w-1 h-5 bg-[#D4AF37] rounded-full mr-3"></span>
            Caractéristiques
          </h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <Check size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Spécifications techniques */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <span className="w-1 h-5 bg-[#D4AF37] rounded-full mr-3"></span>
            Détails techniques
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">Matière</span>
              <span className="text-sm font-medium text-gray-900">{specifications.material}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">Grammage</span>
              <span className="text-sm font-medium text-gray-900">{specifications.weight}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <span className="text-sm text-gray-500">Entretien</span>
              <span className="text-sm font-medium text-gray-900">{specifications.care}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Origine</span>
              <span className="text-sm font-medium text-gray-900">{specifications.origin}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Description longue */}
      <div className="mt-8 bg-linear-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
        <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
          <span className="w-1 h-5 bg-[#D4AF37] rounded-full mr-3"></span>
          Description détaillée
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {longDescription}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;