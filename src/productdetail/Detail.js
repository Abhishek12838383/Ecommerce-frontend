import { useContext } from "react";
import { Selectedproduct } from '../ContextAPI';
import { toast } from "react-toastify";

const Detail = () => {
  const { selectedData } = useContext(Selectedproduct);

    const handleAddToCart = (selectedData) => {
    
    toast.success("Item added to cart 🛒");
  };

  return (
      <div className="max-w-6xl mx-auto p-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={selectedData.image}
            alt={selectedData.title}
            className="w-full max-w-sm rounded-lg shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{selectedData.title}</h1>
          <p className="text-gray-500 capitalize">{selectedData.category}</p>

          <p className="text-4xl font-semibold text-green-600">
            ${selectedData.price}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {selectedData.description}
          </p>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button onClick={handleAddToCart} className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg">
              Add to Cart
            </button>
            
          </div>

          {/* Extra Details */}
          <div className="border-t pt-4 mt-6 text-sm text-gray-500">
            <p>✅ Free delivery in 3–5 days</p>
            <p>🔄 30-day return policy</p>
            <p>🔒 Secure payment guarantee</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail