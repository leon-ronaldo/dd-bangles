import { testimonials } from "../data/testimonial_data";

const Testimonials = () => {
  return (
    <div className="pt-22 overflow-hidden w-full border-t">
      
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold text-gray-900">
          What our customers say
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Real reviews shared by our happy customers
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 w-max animate-marquee pb-8">

          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-3 w-64 shrink-0"
            >
              <img
                src={item.image}
                alt="Customer review"
                className="rounded-xl w-full h-80 object-cover"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Testimonials;
