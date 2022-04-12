import { Navigation } from "./components/Navigation";
import { HamburgerNavigation } from "./components/HamburgerNavigation";
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

      <TopSection />
      <NewsSection />

      <img
        alt="crystal ballroom show"
        src="./photo/big_band_web_bw2.jpg"
        className="photo_full_width"
      />

      <ShowsSection />
      <JamsSection />
      <VideoSection />
      <PhotoSection />

      <img
        alt="aaron's studio shot with ege in the bowl"
        src="./photo/Studio_crop.jpg"
        className="photo_full_width"
      />
      <img
        alt="crystal ballroom show - mobile"
        src="./photo/Crystal_Ballroom_mobile.jpg"
        className="photo_full_width_mobile"
      />

      <InfoSection />

      <footer>&copy; SINNET {new Date().getFullYear()}</footer>
    </>
  );
}
