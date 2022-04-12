import { Element as Section } from "react-scroll";

export const VideoSection = () => {
  return (
    <Section name="video-section" className="content video-section">
      <h2 className="category_header">
        <img src="./logo/VIDEO.png" alt="video section logo" />
      </h2>
      <div className="videos-container">
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/IGlwLD3vpSg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/jeRQnKV2DMg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/qHfXUSNbE6g"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/ah_qG8_QvK4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Section>
  );
};
