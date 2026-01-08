import { testimonials } from "../data/testimonial_data";

const Testimonials = () => {
  return (
    <section className="w-full overflow-hidden sm:pt-18 mt-8">
      <span className="bg-black h-px flex mb-18 mx-[20%]" />
      
      {/* Section Header */}
      <div className="mx-auto max-w-4xl px-4 text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
          What our customers say
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          Real reviews shared by our happy customers
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-4 sm:gap-6 md:gap-8 w-max animate-marquee pb-6 sm:pb-8">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-2 sm:p-3 w-48 sm:w-56 md:w-64 shrink-0"
            >
              <img
                src={item.image}
                alt="Customer review"
                className="rounded-lg sm:rounded-xl w-full h-56 sm:h-64 md:h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;