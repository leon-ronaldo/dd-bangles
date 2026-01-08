import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type HeroSlide } from "../types/HeroSlide";
import { handleViewProduct } from "../utils/misc";

interface Props {
  slides: HeroSlide[];
  interval?: number;
}

export default function HeroSection({ slides, interval = 4000 }: Props) {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <section className="flex w-full px-4 sm:px-6 lg:px-8">
      <div
        onClick={handleViewProduct}
        className="
        relative w-full cursor-pointer overflow-hidden rounded-2xl
        h-52 sm:h-64 md:h-72 lg:h-80 xl:h-96 
      "
      >
        {/* Image */}
        <img
          src={current.image}
          alt={current.productName}
          className="
          h-full w-full object-cover
          transition-opacity duration-700
          pointer-events-none select-none
        "
        />

        {/* CTA */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6">
          <button
            className="
            bg-white text-xs sm:text-sm md:text-base
            px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3
            rounded-xl shadow-2xl
            active:scale-95 transition-transform
          "
          >
            Shop now
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex gap-1.5">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`rounded-full transition-all ${i === index
                ? "w-6 sm:w-8 h-1.5 bg-white"
                : "w-2 h-1.5 bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
