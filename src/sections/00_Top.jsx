import { Element as Section } from "react-scroll";

export const TopSection = () => {
  return (
    <Section name="top-section" className="content top-section">
      <a href="https://sinnet.bandcamp.com/">
        <img
          className="sinnet_logo"
          src="./photo/Island-Town-Cover-FINAL.jpg"
          alt="island town"
        />
      </a>
    </Section>
  );
};
