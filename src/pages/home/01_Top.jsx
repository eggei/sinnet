import { Element as Section } from "react-scroll";

export const TopSection = () => {
  return (
    <Section name="top-section" className="content top-section">
      <div className="sinnet-logo-container">
        <img src="./logo/Sinnet-Island-Town-logo.png" alt="bolt" />
      </div>
      <a href="https://sinnet.bandcamp.com/" target="_blank" rel="noreferrer">
        <img
          className="top-section-image"
          src="./photo/Island-Town-Cover-FINAL.jpg"
          alt="island town"
        />
      </a>
    </Section>
  );
};
