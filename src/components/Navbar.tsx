import React from "react";
import homeIcon from "../assets/icons/home.svg";
import cartIcon from "../assets/icons/cart.svg";
import searchIcon from "../assets/icons/search.svg";
import { useSearch } from "../contexts/SearchContext";

const Navbar: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useSearch();

  return (
    <nav className="bg-white flex items-center justify-between w-full">
      
      {/* Logo */}
      <img
        src="/images/logo.png"
        alt="DD Bangles"
        className="h-12 w-auto object-contain"
      />

      {/* Icons */}
      <div className="flex items-center gap-5">
        <button onClick={() => (window.location.href = "/")}>
          <img src={homeIcon} className="w-6" />
        </button>

        <button onClick={() => (window.location.href = "/cart")}>
          <img src={cartIcon} className="w-6" />
        </button>

        {/* SEARCH ICON */}
        <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
          <img src={searchIcon} className="w-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
