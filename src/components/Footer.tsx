const Footer = () => {
  return (
    <footer className="mt-16 bg-linear-to-br from-[#0b0f14] to-[#141a23] text-gray-300 w-full">
      <div className="w-full px-6 py-14">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-center md:items-start">
          {/* Brand */}
          <div className="space-y-4">
            <span className="flex items-center justify-center gap-2 md:justify-start">
              <img src="/logo.svg" alt="" className="w-8" />
              <p> DD BANGLES </p>
            </span>
            <p className="text-sm text-gray-400 leading-relaxed w-full px-20 md:px-0 md:text-left text-center">
              Premium handcrafted bangles blending tradition and elegance.
              Order directly via WhatsApp for a smooth, personal experience.
            </p>

            {/* Social icons */}
            <div className="flex justify-center md:justify-start gap-3 mt-4">
              <a className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <i className="bi bi-instagram"></i>
              </a>
              <a className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="w-8 h-8 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/cart" className="hover:text-white">Cart</a></li>
              <li><a href="/checkout" className="hover:text-white">Checkout</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-white font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li>Bridal Bangles</li>
              <li>Daily Wear</li>
              <li>Temple Style</li>
              <li>Designer Sets</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400">
              Coimbatore, Tamil Nadu<br />
              Phone: +91 8XXXXXXXXX<br />
              WhatsApp Orders Only
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} DD Bangles. All rights reserved.
          </p>
          <p className="hover:text-white cursor-pointer">
            Crafted with care for Indian traditions
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
