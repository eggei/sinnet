import { Navigation } from "../../components/Navigation";
import { HamburgerNavigation } from "../../components/HamburgerNavigation";
import { TopSection } from "./01_Top";
import { NewsSection } from "./02_News";
import { ShowsSection } from "./03_Shows";
import { JamsSection } from "./04_Jams";
import { VideoSection } from "./05_Video";
import { PhotoSection } from "./06_Photo";
import { InfoSection } from "./07_Info";

export function Home() {
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
