import PropTypes from 'prop-types';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
          onClick={onClose} // Close the modal when clicked
        >
          &times;
        </button>
        <div className="p-6">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-64 mb-4 rounded-lg"
          />
          <h3 className="mb-2 text-xl font-bold">{product.name}</h3>
          <p className="mb-4 text-gray-600">{product.price}</p>
          <p className="text-gray-700">This is a detailed description of the product. You can add more information here.</p>
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
  onClose: PropTypes.func.isRequired, // Function to close the modal
};

export default ProductModal;
