import "../css/navigation.css";
import { Link as LinkToSection } from "react-scroll";

const navItems = ["news", "shows", "jams", "video", "photo", "info"];
const commonProps = {
  activeClass: "active-section-link",
  smooth: true,
  spy: true,
};
export const Navigation = ({ sections }) => {
  return (
    <ul className="navigation">
      <li>
        <LinkToSection to="top-section" {...commonProps}>
          <img
            src="./logo/Sinnet-Island-Town-logo.png"
            alt="bolt"
            height="32vw"
          />
        </LinkToSection>
      </li>
      {navItems.map((text, index) => (
        <li key={text + "-" + index}>
          <LinkToSection to={`${text}-section`} {...commonProps}>
            {text.toUpperCase()}
          </LinkToSection>
        </li>
      ))}
    </ul>
  );
};
