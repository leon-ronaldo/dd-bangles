import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

import keys from "../utils/keys";

const slides = [
    {
        center: "/images/landing/featured-jewel.jpg",
        floating: [
            "/images/landing/jewel1.jpg",
            "/images/landing/jewel2.jpg",
            "/images/landing/jewel3.jpg",
            "/images/landing/jewel4.jpg",
        ],
    },
    {
        center: "/images/landing/featured-jewel-2.jpg",
        floating: [
            "/images/landing/jewel5.jpg",
            "/images/landing/jewel6.jpg",
            "/images/landing/jewel7.jpg",
            "/images/landing/jewel8.jpg",
        ],
    },
    {
        center: "/images/landing/featured-jewel-3.jpg",
        floating: [
            "/images/landing/jewel9.jpg",
            "/images/landing/jewel10.jpg",
            "/images/landing/jewel11.jpg",
            "/images/landing/jewel12.jpg",
        ],
    },
];

const Landing: React.FC = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 3500);

        document.title = `Onboarding - DD Bangles`

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="bg-[#f6f7f8]">
            <div className="min-h-screen flex flex-col items-center justify-between px-4 py-6">
                {/* IMAGE COLLAGE */}
                <div className="relative w-full max-w-sm h-105 mt-4">
                    {/* Small floating images */}
                    <img
                        src={slides[index].floating[0]}
                        className="absolute top-0 left-6 w-16 h-16 rounded-xl object-cover transition-all duration-700"
                    />
                    <img
                        src={slides[index].floating[1]}
                        className="absolute top-6 right-4 w-16 h-16 rounded-xl object-cover transition-all duration-700"
                    />
                    <img
                        src={slides[index].floating[2]}
                        className="absolute top-28 left-2 w-16 h-16 rounded-xl object-cover transition-all duration-700"
                    />
                    <img
                        src={slides[index].floating[3]}
                        className="absolute top-32 right-0 w-16 h-16 rounded-xl object-cover transition-all duration-700"
                    />

                    {/* CENTER FEATURED IMAGE */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white rounded-3xl p-2 shadow-lg -rotate-2 transition-all duration-700">
                            <img
                                src={slides[index].center}
                                className="w-64 h-80 object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* TEXT CONTENT */}
                <div className="text-center px-4 mt-4">
                    <h1 className="text-2xl font-semibold text-gray-900 leading-snug">
                        Begin Your Jewel <br /> Journey
                    </h1>

                    <p className="text-sm text-gray-500 mt-3 max-w-xs mx-auto">
                        Explore luxury at your fingertips. Offers curated collections of
                        exquisite jewelry.
                    </p>
                </div>

                {/* PAGE INDICATOR */}
                <div className="flex gap-2 mt-8 mb-4">
                    {slides.map((_, i) => (
                        <span
                            key={i}
                            className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-black" : "w-2 bg-gray-300"
                                }`}
                        />
                    ))}
                </div>


                {/* CTA BUTTON */}
                <button
                    onClick={() => {
                        localStorage.setItem(keys.ONBOARDING_KEY, "true");
                        window.location.href = "/";
                    }}
                    className="w-full max-w-sm mt-6 bg-black text-white py-4 rounded-full flex items-center justify-center gap-3 shadow-md"
                >
                    Get Started
                </button>
            </div>

            <Footer />
        </main>
    );
};

export default Landing;
