import { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product_data";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useSearch } from "../contexts/SearchContext";
import { heroslides } from "../data/hero_slides";
import { handleViewProduct } from "../utils/misc";
import EmptyResult from "../components/EmptyResultMessage";

export default function HomePage() {
  const { query, setQuery, isSearchOpen } = useSearch();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    document.title = "Buy Bangles at DD Bangles";
  }, []);

  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <HeroSection slides={heroslides} />

      {/* Products Section */}
      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg sm:text-xl font-medium">Products</p>
        </div>

        {isSearchOpen && (
          <input
            type="text"
            placeholder="Search bangles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full mb-6 px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black"
          />
        )}

        {query && filteredProducts.length === 0 ? (
          <EmptyResult title="No products found" message="Try searching with a different name or keyword." />
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {(query ? filteredProducts : products).map((item, key) => (
              <ProductCard
                key={key}
                product={item}
                onViewProduct={handleViewProduct}
              />
            ))}
          </div>
        )}
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
}
