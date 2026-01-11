import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

export default function About() {
    return (
        <main className="bg-white min-h-screen flex flex-col items-center">
            <Navbar />

            {/* HERO */}
            <section className="max-w-7xl px-6 pt-20 pb-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900">
                    About DD Bangles
                </h1>
                <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
                    DD Bangles is dedicated to creating and curating elegant bangles that
                    celebrate tradition, beauty, and everyday style.
                </p>
            </section>

            {/* IMAGE GRID + CENTER CARD */}
            <section className="max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-2 mb-24">
                {/* Left Images */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2">
                    <img
                        src="/images/about/about-1.jpg"
                        className="rounded-2xl object-cover aspect-square w-full"
                    />
                    <img
                        src="/images/about/about-2.jpg"
                        className="rounded-2xl object-cover aspect-square w-full"
                    />
                    <img
                        src="/images/about/about-4.jpg"
                        className="rounded-2xl object-cover aspect-square w-full hidden md:block lg:hidden"
                    />
                </div>

                {/* Center Card */}
                <div className="bg-gray-900 text-white rounded-3xl p-10 flex flex-col justify-center text-center">
                    <h3 className="text-base md:text-xl font-semibold mb-4">
                        A Brand Committed to Timeless Beauty
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                        DD Bangles brings together craftsmanship, quality, and elegance.
                        Every piece is designed to reflect grace and cultural richness,
                        while being comfortable for modern everyday wear.
                    </p>
                </div>

                {/* Right Images */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-2">
                    <img
                        src="/images/about/about-3.jpg"
                        className="rounded-2xl object-cover aspect-square w-full"
                    />
                    <img
                        src="/images/about/about-6.jpg"
                        className="rounded-2xl object-cover aspect-square w-full"
                    />
                    <img
                        src="/images/about/about-5.jpg"
                        className="rounded-2xl object-cover aspect-square w-full hidden md:block lg:hidden"
                    />
                </div>
            </section>

            {/* PRINCIPLES */}
            <section className="max-w-7xl mx-auto px-6 mb-22">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 justify-stretch">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Guided by Trust and Principles
                    </h2>

                    <p className="text-gray-500 px-20">
                        Our values shape every decision we make. They reflect who we are and how
                        we aim to deliver beautiful, trustworthy jewellery to our customers.
                    </p>
                </div>

                {/* Card Container */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x md:py-12 px-12 md:px-0">

                        {/* Card 1 */}
                        <div className="p-8 text-center">
                            <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-person text-lg mt-1"></i>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Customer First</h3>
                            <p className="text-gray-500 text-sm">
                                Our customers and their satisfaction come before everything else.
                                When they are happy, we grow.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="p-8 text-center">
                            <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-heart text-lg mt-1"></i>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Craft with Care</h3>
                            <p className="text-gray-500 text-sm">
                                Every bangle is selected and finished with attention to detail and
                                love for traditional craftsmanship.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="p-8 text-center">
                            <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center mx-auto mb-4">
                                <i className="bi bi-check-circle text-lg mt-1"></i>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Grow Together</h3>
                            <p className="text-gray-500 text-sm">
                                We believe in building long-term relationships with our customers,
                                growing together with trust.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="max-w-7xl w-full mx-auto px-6">
                <div className="rounded-3xl bg-linear-to-br from-green-100 to-green-50 p-14 text-center relative overflow-hidden">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Discover Your Perfect Bangles
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                        Explore our collections and order directly through WhatsApp for a
                        smooth and personal shopping experience.
                    </p>

                    <a
                        href="/"
                        className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90"
                    >
                        Start Shopping
                    </a>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Footer */}
            <Footer />
        </main>
    );
}
