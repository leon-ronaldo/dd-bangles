import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product_data";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { useSearch } from "../contexts/SearchContext";
import Lottie from "lottie-react";

import emptyAnimation from "../assets/animations/no-orders-animation.json";
import { useEffect } from "react";

const EmptySearch = () => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">

            <Lottie
                animationData={emptyAnimation}
                loop
                className="w-48 h-48"
            />

            <h3 className="text-lg font-medium text-gray-900 mt-4">
                No products found
            </h3>

            <p className="text-sm text-gray-500 mt-1 max-w-xs">
                Try searching with a different name or keyword.
            </p>
        </div>
    );
};

export default function HomePage() {
    const navigate = useNavigate();

    const { query, setQuery, isSearchOpen } = useSearch();

    const slugify = (text: string) =>
        text.toLowerCase().replace(/\s+/g, "-");

    const handleViewProduct = (product: any) => {
        navigate(`/product/${slugify(product.name)}`);
    };

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        document.title = `Buy Bangles at DD Bangles`
    }, [])

    return <main className="flex flex-col items-center p-4 min-h-screen gap-4">
        <Navbar />
        <HeroSection image="/images/hero-image-1.jpg" />
        <div className="flex justify-between items-center w-full pt-6">
            <p className="text-xl"> Products </p>
            {/* <p className="text-sm"> View all </p> */}
        </div>

        {isSearchOpen && (
            <input
                type="text"
                placeholder="Search bangles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
        )}


        <section className="w-full pb-12">
            {query && filteredProducts.length === 0 ? (
                <EmptySearch />
            ) : (
                <div className="grid grid-cols-2 gap-4">
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
}