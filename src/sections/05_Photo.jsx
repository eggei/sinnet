import { Element as Section } from "react-scroll";

export const PhotoSection = () => {
  return (
    <Section name="photo-section" className="content photo-section">
      <p className="category_header">
        <img src="./logo/PHOTOS.png" alt="photos section logo" />
      </p>

      <iframe
        title="instagram"
        src="//lightwidget.com/widgets/a4d9f487201e559eac794fec7699196a.html"
        scrolling="no"
        allowtransparency="true"
        className="lightwidget-widget"
        style={{ width: "100%", border: 0, overflow: "hidden" }}
      ></iframe>
    </Section>
  );
};
