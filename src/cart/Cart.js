import { useContext} from "react";
import { Productdata } from "../ContextAPI";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {



  const { productdata, removeFromCart, incrementQty, decrementQty } =
    useContext(Productdata);

  if (productdata.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-gray-500">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-8235491-6565379.png"
          alt="empty cart"
          className="w-60 mb-6"
        />
        <p className="text-lg font-medium">Your cart is empty</p>
      </div>
    );
  }

  // subtotal
  const subtotal = productdata.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        <div className="divide-y">
          {productdata.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 py-4 hover:bg-gray-50 rounded-lg transition"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-lg"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-base font-medium text-gray-800 truncate">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-1">
                  {item.description}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <span className="text-green-600 font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 border rounded-lg px-2">
                <button
                  onClick={() => decrementQty(item.id)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Minus size={16} />
                </button>
                <span className="px-3 text-gray-700">{item.quantity}</span>
                <button
                  onClick={() => incrementQty(item.id)}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Subtotal */}
              <div className="w-24 text-right font-medium text-gray-700">
                ${(item.price * item.quantity).toFixed(2)}
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 ml-3"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Tax (5%)</span>
          <span>${(subtotal * 0.05).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-800 border-t pt-2">
          <span>Total</span>
          <span>${(subtotal * 1.05).toFixed(2)}</span>
        </div>
        <Link to="/checkout">
          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl shadow-md transition">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
