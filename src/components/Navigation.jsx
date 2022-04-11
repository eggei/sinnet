import "../css/navigation.css";
import { Link as LinkToSection } from "react-scroll";

const commonProps = {
  activeClass: "active-section-link",
  smooth: true,
  spy: true,
};

const topSectionLinkContent = (
  <img src="./logo/Sinnet-Island-Town-logo.png" alt="bolt" height="32vw" />
);
const storeURL = "https://sinnet.bandcamp.com/merch";

const navigation = [
  {
    id: "top",
    content: topSectionLinkContent,
  },
  {
    id: "store",
    url: storeURL,
  },
  { id: "news" },
  { id: "shows" },
  { id: "jams" },
  { id: "video" },
  { id: "photo" },
  { id: "info" },
];

export const Navigation = ({ sections }) => {
  return (
    <ul className="navigation">
      {navigation.map(({ id, content, url }, index) => (
        <li key={id + "-" + index}>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              STORE
            </a>
          ) : (
            <LinkToSection to={`${id}-section`} {...commonProps}>
              {content || id.toUpperCase()}
            </LinkToSection>
          )}
        </li>
      ))}
    </ul>
  );
};
