const Footer = ({ alt }: { alt?: boolean }) => {
    return (
      <footer
        className={`bg-white ${!alt ? "border-t" : "rounded-2xl"} mt-10 sm:mt-16`}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col items-center gap-4 sm:gap-5 text-center">
            {/* Logo */}
            <img
              src="/images/logo.png"
              alt="DD Bangles"
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
  
            {/* Brand text */}
            <p className="text-xs sm:text-sm text-gray-500 max-w-xs sm:max-w-md leading-relaxed">
              Handcrafted bangles made with care. Order directly via WhatsApp for a
              smooth and personal experience.
            </p>
  
            {/* Divider */}
            <div className="w-16 sm:w-24 h-px bg-gray-200 my-2" />
  
            {/* Copyright */}
            <p className="text-[10px] sm:text-xs text-gray-400">
              © {new Date().getFullYear()} DD Bangles. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;