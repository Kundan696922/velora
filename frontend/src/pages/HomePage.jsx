import React, { useEffect } from 'react'
import CategoryItem from '../components/CategoryItem';
import { useProductStore } from '../stores/useProductStore';
import FeaturedProducts from '../components/FeaturedProducts';


const categories = [
  { href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
  { href: "/tshirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
  { href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
  { href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
  { href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
  { href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
  { href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
  const { fetchFeaturedProducts, products, isLoading } = useProductStore();
  
  useEffect(() => { 
    fetchFeaturedProducts();
  },[fetchFeaturedProducts])
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-10 py-5">
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-teal-400 mb-4 mt-6">
          Discover Your Style
        </h1>
        <p className="text-center text-sm md:text-lg lg:text-xl text-gray-300 mb-12">
          Find products that match your unique taste
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryItem category={category} key={category.name} />
          ))}
        </div>
        {!isLoading && products.length > 0 && (
          <FeaturedProducts featuredProducts={products} />
        )}
      </div>
    </div>
  );
}

export default HomePage
