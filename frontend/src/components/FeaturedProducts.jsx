import { useEffect, useState } from "react";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const FeaturedProducts = ({ featuredProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const { addToCart } = useCartStore();

  // Responsive items per page (max 4)
  useEffect(() => {
    const handleResize = () => {
      let perPage;
      if (window.innerWidth < 640) perPage = 1;
      else if (window.innerWidth < 1024) perPage = 2;
      else if (window.innerWidth < 1280) perPage = 3;
      else perPage = 4;

      setItemsPerPage(Math.min(perPage, 4));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage >= featuredProducts.length
          ? 0
          : prevIndex + itemsPerPage
      );
    }, 5000); // slower auto-slide

    return () => clearInterval(interval);
  }, [itemsPerPage, featuredProducts.length]);

  // Left/Right click handlers
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? featuredProducts.length - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= featuredProducts.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative py-12 ">
      <h2 className="text-center text-3xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-6">
        Featured
      </h2>
      <div className="container mx-auto px-4 overflow-hidden">
        {/* Carousel */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {featuredProducts?.map((product) => (
            <div
              key={product._id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 flex-shrink-0 px-2"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl border border-emerald-500/30">
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {product.name}
                  </h3>
                  <p className="text-teal-300 font-medium mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left / Right buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full bg-teal-600 hover:bg-teal-500 transition-colors duration-300"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full bg-teal-600 hover:bg-teal-500 transition-colors duration-300"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6">
          {Array.from(
            { length: Math.ceil(featuredProducts.length / itemsPerPage) },
            (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i * itemsPerPage)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentIndex / itemsPerPage === i
                    ? "bg-teal-400"
                    : "bg-gray-500/50"
                }`}
              ></button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
