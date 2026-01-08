import EmptyResult from "../components/EmptyResultMessage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { getFavourites } from "../utils/cart";
import { handleViewProduct } from "../utils/misc";

export default function FavoritesPage() {

    const favourites = getFavourites();

    return <main className="min-h-screen flex flex-col items-center">
        <Navbar />

        {/* Products Section */}
        <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-2 pb-6">
            <div className="flex items-center justify-between mb-4">
                <p className="text-lg sm:text-xl font-medium">Favorites</p>
            </div>

            {favourites.length === 0 ? (
                <EmptyResult title="No product labeled favorite" message="Try adding some products as favorites." />
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {favourites.map((item, key) => (
                        <ProductCard
                            key={key}
                            product={item}
                            onViewProduct={handleViewProduct}
                        />
                    ))}
                </div>
            )}
        </section>

        <Footer />
    </main>
}