const Footer = ({ alt }: { alt?: boolean }) => {
    return (
        <footer className={`bg-white ${!alt ? "border-t" : "rounded-2xl"} mt-16`}>
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-4">

                {/* Logo */}
                <img
                    src="/images/logo.jpeg"
                    alt="DD Bangles"
                    className="h-10 object-contain"
                />

                {/* Brand text */}
                <p className="text-sm text-gray-500 text-center max-w-md">
                    Handcrafted bangles made with care.
                    Order directly via WhatsApp for a smooth and personal experience.
                </p>

                {/* Divider */}
                <div className="w-24 h-px bg-gray-200 my-2" />

                {/* Copyright */}
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} DD Bangles. All rights reserved.
                </p>

            </div>
        </footer>
    );
};

export default Footer;
