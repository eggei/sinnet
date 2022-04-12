import { Navigation } from "./Navigation";

export const HamburgerNavigation = () => {
  return (
    <nav data-role="hamburger-menu">
      <div className="hamMenuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <Navigation className="hamMenu" />
      </div>
    </nav>
  );
};
