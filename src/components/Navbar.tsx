import React from "react";
import homeIcon from "../assets/icons/home.svg";
import cartIcon from "../assets/icons/cart.svg";
import searchIcon from "../assets/icons/search.svg";
import favIcon from "../assets/icons/fav.svg";
import { useSearch } from "../contexts/SearchContext";

const Navbar: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useSearch();

  return (
    <nav className="bg-white w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="DD Bangles"
          className="h-10 sm:h-12 w-auto object-contain"
        />

        {/* Navigation Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Home */}
          <button
            onClick={() => (window.location.href = "/")}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <img src={homeIcon} className="w-6 h-6" />
            <span className="hidden md:inline text-sm font-medium">Home</span>
          </button>

          {/* Cart */}
          <button
            onClick={() => (window.location.href = "/cart")}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <img src={cartIcon} className="w-6 h-6" />
            <span className="hidden md:inline text-sm font-medium">Cart</span>
          </button>

          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <img src={searchIcon} className="w-6 h-6" />
            <span className="hidden md:inline text-sm font-medium">Search</span>
          </button>

          {/* Search */}
          <button
            onClick={() => (window.location.href = "/favorite")}
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <img src={favIcon} className="w-6 h-6" />
            <span className="hidden md:inline text-sm font-medium">Favorites</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;