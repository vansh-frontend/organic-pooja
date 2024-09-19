import PropTypes from 'prop-types';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black bg-opacity-60">
      <div className="relative w-full max-w-lg p-6 transition-all transform scale-95 bg-white rounded-lg shadow-2xl sm:p-8 md:p-10 md:max-w-xl lg:max-w-2xl">
        {/* Close Button */}
        <button
  className="absolute text-2xl text-gray-600 transition-colors duration-200 hover:text-gray-900 top-2 right-2 sm:top-4 sm:right-4 md:top-6 md:right-6 md:text-3xl lg:text-4xl" // Adjusted positioning
  onClick={onClose}
  aria-label="Close modal"
>
  &times;
</button>


        {/* Modal Content */}
        <div className="flex flex-col sm:flex-row sm:gap-6">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-64 rounded-lg sm:w-1/2 sm:h-auto"
          />

          {/* Product Details */}
          <div className="mt-4 sm:mt-0 sm:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800">{product.name}</h3>
            <p className="mt-2 text-xl font-semibold text-green-600">{product.price}</p>

            <p className="mt-4 leading-relaxed text-gray-700">
              This is a detailed description of the product. You can add more information about the product's features, usage, and benefits here. Keep it concise but informative to enhance the user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProductModal;
