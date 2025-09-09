

const Footer = () => {
  return (
     <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-white">ShopEase</h1>
          <p className="mt-3 text-sm">
            Your one-stop shop for fashion, electronics, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/" className="hover:text-white transition">Shop</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/" className="hover:text-white transition">Returns</a></li>
            <li><a href="/" className="hover:text-white transition">Shipping</a></li>
            <li><a href="/" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="/" className="hover:text-white transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="hover:text-white transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="hover:text-white transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" className="hover:text-white transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer