import { Navigation } from "./components/Navigation";
import { HamburgerNavigation } from "./components/HamburgerNavigation";
import { MainLogo } from "./components/MainLogo";
import { TopSection } from "./sections/00_Top";
import { NewsSection } from "./sections/01_News";
import { ShowsSection } from "./sections/02_Shows";
import { JamsSection } from "./sections/03_Jams";
import { VideoSection } from "./sections/04_Video";
import { PhotoSection } from "./sections/05_Photo";
import { InfoSection } from "./sections/06_Info";

export function Sinnet() {
  return (
    <>
      <Navigation />
      <HamburgerNavigation /* Only for mobile */ />
      <MainLogo />
      <TopSection />
      <NewsSection />

      <img
        src="./photo/big_band_web_bw2.jpg"
        alt="sinnet at a show"
        className="photo_full_width"
      />

      <ShowsSection />
      <JamsSection />
      <VideoSection />
      <PhotoSection />

      <img
        src="./photo/Studio_crop.jpg"
        className="photo_full_width"
        alt="studio shot"
      />
      <img
        src="./photo/Crystal_Ballroom_mobile.jpg"
        className="photo_full_width_mobile"
        alt="crystal ballroom - for mobile"
      />

      <InfoSection />

      <div className="end-logo">
        <img
          src="./logo/Sinnet-Island-Town-logo.png"
          alt="Stones_Logo"
          height="100px"
        />
      </div>
      <p>THANK YOU FOR VISITING OUR WEBSITE!</p>
      <footer>&copy; SINNET 2022</footer>
    </>
  );
}
