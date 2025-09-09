

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover our story, mission, and the values that drive us.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              alt="Our Store"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-6">
              At <span className="font-semibold text-indigo-600">ShopEasy</span>,
              we believe shopping should be simple, enjoyable, and affordable.
              Since our launch in 2020, we’ve been committed to delivering
              high-quality products with exceptional customer service.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              Our mission is to make everyday shopping convenient for everyone.
              We aim to bring you the latest trends and timeless classics, all
              at unbeatable prices.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li>✅ Quality products sourced from trusted suppliers</li>
              <li>✅ Affordable prices with seasonal discounts</li>
              <li>✅ Fast and reliable delivery services</li>
              <li>✅ 24/7 customer support to assist you anytime</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                  alt="Team Member"
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  John Doe
                </h3>
                <p className="text-sm text-gray-500">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About