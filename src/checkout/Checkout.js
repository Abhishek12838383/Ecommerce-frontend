import { useContext, useState } from "react";
import { Productdata } from "../ContextAPI";
import { CheckCircle } from "lucide-react";

const Checkout = () => {

const[Orderplaced,setOrderplaced]=useState(false);

  const { productdata } = useContext(Productdata);

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    card: "",
  });

  // subtotal
  const subtotal = productdata.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
setOrderplaced(true);
  };

  if (Orderplaced) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-center">
        <CheckCircle className="text-green-500 w-20 h-20 animate-bounce" />
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Order Placed Successfully 🎉
        </h2>
        <p className="text-gray-600 mt-2">
          Thank you for shopping with us. Your order will be shipped soon!
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Shipping Details */}
      <div className="lg:col-span-2 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-200"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-200"
            required
          />
          <textarea
            name="address"
            placeholder="Street Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-200"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-200"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP / Postal Code"
              value={form.zip}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={form.country}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-200"
            required
          />

          {/* Payment Section */}
          <h2 className="text-xl font-semibold mt-6">Payment Method</h2>
          <input
            type="text"
            name="card"
            placeholder="Card Number (xxxx-xxxx-xxxx-xxxx)"
            value={form.card}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:ring focus:ring-blue-200"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6 h-fit">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          {productdata.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-700">
              <span>
                {item.title} (x{item.quantity})
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Tax (5%)</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-800 border-t pt-2">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
