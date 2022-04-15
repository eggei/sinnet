import { useState } from "react";
import { Navigation } from "./Navigation";

export const HamburgerNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav data-role="hamburger-menu">
      <div className="hamMenuToggle">
        <input
          type="checkbox"
          checked={menuOpen}
          onChange={() => setMenuOpen((p) => !p)}
        />

        <span></span>
        <span></span>
        <span></span>

        <Navigation className="hamMenu" closeMenu={() => setMenuOpen(false)} />
      </div>
    </nav>
  );
};
