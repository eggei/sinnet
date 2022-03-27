import "./nav-button.css";

const navItems = ["NEWS", "SHOWS", "JAMS", "VIDEO", "PHOTO", "INFO"];

export const Navigation = ({ sectionRefs }) => {
  const scrollToSection = (sectionName) => () => {
    sectionRefs[sectionName.toLowerCase()]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ul className="navigation">
      <li>
        <img
          src="./logo/Sinnet-Island-Town-logo.png"
          alt="bolt"
          height="32vw"
        />
      </li>
      {navItems.map((text, index) => (
        <li key={text + "-" + index}>
          <button className="nav-button" onClick={scrollToSection(text)}>
            {text}
          </button>
        </li>
      ))}
    </ul>
  );
};
