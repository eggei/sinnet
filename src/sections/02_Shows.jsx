import { Element as Section } from "react-scroll";

export const ShowsSection = () => {
  return (
    <Section name="shows-section" className="content shows-section">
      <p className="category_header">
        <img src="./logo/SHOWS.png" alt="shows section logo" />
      </p>
      <div className="news_block" id="show_widget">
        <div>
          <a
            href="#0"
            className="bit-widget-initializer"
            data-artist-name="Sinnet"
            data-display-local-dates="false"
            data-display-past-dates="true"
            data-auto-style="false"
            data-text-color="#000000"
            data-link-color="#3179bc"
            data-popup-background-color="rgba(0,0,0,0)"
            data-background-color="rgba(0,0,0,0)"
            data-display-limit="15"
            data-link-text-color="#FFFFFF"
            data-width="100%"
          >
            -
          </a>
        </div>
      </div>
    </Section>
  );
};
