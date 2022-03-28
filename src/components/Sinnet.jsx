import { Navigation } from "./Navigation";
import { HamburgerNavigation } from "./HamburgerNavigation";
import { MainLogo } from "./MainLogo";
import { Element as Section } from "react-scroll";

export function Sinnet() {
  return (
    <>
      <Navigation />
      <HamburgerNavigation /* Only for mobile */ />

      <MainLogo />

      <div className="slide paper_texture" id="slide1" data-slide="1">
        <Section name="top-section" className="content">
          <div>
            <a href="https://sinnet.bandcamp.com/">
              <img
                className="sinnet_logo"
                src="./photo/Island-Town-Cover-FINAL.jpg"
                alt="island town"
              />
            </a>
          </div>
        </Section>
      </div>

      <div
        className="slide"
        id="slide2"
        data-slide="2"
        data-stellar-background-ratio="0.2"
      >
        <Section name="news-section" className="content">
          <p className="category_header">
            <img src="./logo/NEWS.png" alt="news section logo" />
          </p>
          <div className="news_block">
            <h1>NEW SINNET ALBUM 'ISLAND TOWN'</h1>
            <div className="poster-container">
              <img
                className="poster"
                src="./photo/Island-Town-Cover-FINAL.jpg"
                alt="island town"
              />
            </div>
            <p>
              New Sinnet Album - <i>Island Town</i> OUT DEC 9TH on Gentle Humor
              Records!
            </p>
            <p>
              <i> "The sound of Aaron Spransy embracing his dad-rock vibe"</i> -
              local Prius owner.
            </p>
            <p>
              Featuring performances from:
              <br />
              Dave Brophy (SEli "Paper Boy" Reed, Josh Ritter, The B-52’s…), Dan
              Didier (The Promise Ring, Maritime), Andrew Neesley (Jesus On The
              Mainline, Andrew Paul), Matthew Girard - (Ruby Rose Fox, Parks,
              Will Dailey) and oh so many more...
            </p>
            <p>
              Recorded by Aaron Spransy, mixed by Matthew Girard, mastered by
              Justin Perkins at Mystery Room Mastering.
            </p>
            <p>
              <iframe
                style={{ border: 0, width: "100%", height: 406, maxWidth: 400 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3385173094/size=large/bgcol=ffffff/linkcol=2ebd35/artwork=none/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/island-town">
                  Island Town by Sinnet
                </a>
              </iframe>
            </p>
            <p>
              Hugs n' Kittens
              <br />- AJS
            </p>
          </div>

          <div className="news_block">
            <h1>IRON WOOOOO-MAAAN!</h1>
            <div className="poster-container">
              <img
                className="poster"
                src="./photo/Iron-Woman-Art-SM.jpg"
                alt="Poster"
              />
            </div>
            <p>
              <i>Iron Woman</i> has long been a favorite cover of ours.
              Originally by Devin Davis, who's sole album "Lonely People of the
              World Unite" is a criminally underrated power-pop gem. It's been a
              staple of our live shows for years.
            </p>
            <p>
              A bunch of years ago we realized that we were all in the same
              Devin Davis appreciation facebook group so, covering one of his
              songs was an easy move.
            </p>
            <p>
              The recent downtime in live music has been a good opportunity to
              record our own version of it and use the proceeds to support a
              cause we believe in (women's reproductive rights). All proceeds go
              to
              <b>Planned Parenthood</b>.
            </p>
            <p>
              The track features a bunch of talented buds: <b>Joel Reader</b>{" "}
              (The Fatal Flaw, MTX, Pansy Division), <b>Jac Mestrel</b> (Little
              Happy Clouds), <b>John Drislane</b> (The Daisies, The Maxims),
              <b>Elio DeLuca</b> (Titus Andronicus) and more!
            </p>
            <p>
              Did I mention there is a <b>sax solo?</b> Hell yeah!
            </p>
            <p>
              <iframe
                style={{ border: 0, width: "100%", height: 120, maxWidth: 400 }}
                src="https://bandcamp.com/EmbeddedPlayer/track=3002858242/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=none/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/track/iron-woman">
                  Iron Woman by Sinnet
                </a>
              </iframe>
            </p>

            <p>
              Hugs n' Kittens
              <br />- AJS
            </p>
          </div>
        </Section>
      </div>

      <div className="photo_full_width">
        <img src="./photo/big_band_web_bw2.jpg" />
      </div>
      <div className="photo_full_width_mobile">
        <img src="./photo/Sinnet_Studio_1.jpg" />
      </div>

      <div
        className="slide"
        id="slide3"
        data-slide="3"
        data-stellar-background-ratio="0.2"
      >
        <Section name="shows-section" className="content">
          <p className="category_header">
            <img src="./logo/SHOWS.png" />
          </p>
          <div className="news_block" id="show_widget">
            <script
              charSet="utf-8"
              src="https://widget.bandsintown.com/main.min.js"
            ></script>
            <div>
              <a
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
              ></a>
            </div>
          </div>
        </Section>
      </div>

      <div
        className="slide"
        id="slide4"
        data-slide="4"
        data-stellar-background-ratio="0.2"
      >
        <Section name="jams-section" className="content">
          <p className="category_header">
            <img src="./logo/JAMS.png" />
          </p>
          <div className="news_block_clear">
            <div className="box">
              <p>
                <b>Stream / Download</b>
                <br />
                <a
                  href="https:sinnet.bandcamp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Bandcamp{" "}
                </a>
                |
                <a
                  href="https://music.apple.com/us/artist/sinnet/508253412"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apple Music
                </a>
                |<a href="https://soundcloud.com/sinnet"> Soundcloud </a>|
                <a
                  href="https://open.spotify.com/artist/60asQRqbLP70R24t4Cgnly"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spotify
                </a>
              </p>
            </div>
            <div className="sinnet_music_desktop">
              <p>
                <b>LPs</b>
              </p>
              <iframe
                title="island town album bandcamp link"
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3385173094/size=large/bgcol=ffffff/linkcol=2ebd35/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/island-town">
                  Island Town by Sinnet
                </a>
              </iframe>
              <iframe
                title="gentle humor bandcamp link"
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3338540361/size=large/bgcol=ffffff/linkcol=2ebd35/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/gentle-humor">
                  Gentle Humor by Sinnet
                </a>
              </iframe>
              <p>
                <b>EPs</b>
              </p>
              <iframe
                title="tennis elbow club"
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1257697620/size=large/bgcol=ffffff/linkcol=2ebd35/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/tennis-elbow-club">
                  Tennis Elbow Club by Sinnet
                </a>
              </iframe>
              <iframe
                title="year of the whale"
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2520925879/size=large/bgcol=ffffff/linkcol=2ebd35/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/year-of-the-whale-ep">
                  Year of the Whale (ep) by Sinnet
                </a>
              </iframe>
              <iframe
                title="midwest manner"
                style={{ border: 0, width: 350, height: 350 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=68160755/size=large/bgcol=ffffff/linkcol=2ebd35/minimal=true/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/midwest-manners">
                  Midwest Manners by Sinnet
                </a>
              </iframe>

              <p>
                <b>Singles</b>
              </p>
              <iframe
                title="iron woman"
                style={{ border: 0, width: "40%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/track=3002858242/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/track/iron-woman">
                  Iron Woman by Sinnet
                </a>
              </iframe>
              <iframe
                title="coco beware"
                style={{ border: 0, width: "40%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/track=1041329960/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/track/coco-beware">
                  Coco Beware by Sinnet
                </a>
              </iframe>
              <iframe
                title="pink flamingo hotel"
                style={{ border: 0, width: "40%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1761528275/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/pink-flamingo-hotels">
                  Pink Flamingo Hotels by Sinnet
                </a>
              </iframe>
              <iframe
                title="everybody into the pool"
                style={{ border: 0, width: "40%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/track=2483462545/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/track/everybody-into-the-pool-fable-and-the-world-flat-remix">
                  Everybody into the Pool (Fable and the World Flat Remix) by
                  Sinnet
                </a>
              </iframe>
            </div>

            <div className="sinnet_music_mobile">
              <p align="center">
                <b>Full-lengths</b>
              </p>
              <iframe
                style={{ border: 0, width: "100%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3385173094/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/island-town">
                  Island Town by Sinnet
                </a>
              </iframe>
              <iframe
                style={{ border: 0, width: "100%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=3338540361/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/gentle-humor">
                  Gentle Humor by Sinnet
                </a>
              </iframe>

              <p align="center">
                <b>EPs</b>
              </p>
              <iframe
                style={{ border: 0, width: "100%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1257697620/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/tennis-elbow-club">
                  Tennis Elbow Club by Sinnet
                </a>
              </iframe>
              <iframe
                style={{ border: 0, width: "100%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2520925879/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/year-of-the-whale-ep">
                  Year of the Whale (ep) by Sinnet
                </a>
              </iframe>
              <iframe
                style={{ border: 0, width: "100%", height: 120 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=68160755/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/midwest-manners">
                  Midwest Manners by Sinnet
                </a>
              </iframe>

              <p align="center">
                <b>Singles</b>
              </p>
              <iframe
                style={{ border: 0, width: "100%", height: 42 }}
                src="https://bandcamp.com/EmbeddedPlayer/track=3002858242/size=small/bgcol=ffffff/linkcol=2ebd35/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/track/iron-woman">
                  Iron Woman by Sinnet
                </a>
              </iframe>
              <iframe
                style={{ border: 0, width: "100%", height: 42 }}
                src="https://bandcamp.com/EmbeddedPlayer/track=1041329960/size=small/bgcol=ffffff/linkcol=2ebd35/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/track/coco-beware">
                  Coco Beware by Sinnet
                </a>
              </iframe>
              <iframe
                style={{ border: 0, width: "100%", height: 42 }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1761528275/size=small/bgcol=ffffff/linkcol=2ebd35/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/album/pink-flamingo-hotels">
                  Pink Flamingo Hotels by Sinnet
                </a>
              </iframe>
              <iframe
                style={{ border: 0, width: "100%", height: 42 }}
                src="https://bandcamp.com/EmbeddedPlayer/track=2483462545/size=small/bgcol=ffffff/linkcol=2ebd35/transparent=true/"
                seamless
              >
                <a href="https://sinnet.bandcamp.com/track/everybody-into-the-pool-fable-and-the-world-flat-remix">
                  Everybody into the Pool (Fable and the World Flat Remix) by
                  Sinnet
                </a>
              </iframe>
            </div>
          </div>
        </Section>
      </div>

      <div
        className="slide"
        id="slide5"
        data-slide="5"
        data-stellar-background-ratio="0.2"
      >
        <Section name="video-section" className="content">
          <h2 className="category_header">
            <img src="./logo/VIDEO.png" alt="video section logo" />
          </h2>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/IGlwLD3vpSg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jeRQnKV2DMg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qHfXUSNbE6g"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ah_qG8_QvK4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Section>
      </div>

      <div
        className="slide"
        id="slide6"
        data-slide="6"
        data-stellar-background-ratio="0.2"
      >
        <Section name="photo-section" className="content">
          <p className="category_header">
            <img src="./logo/PHOTOS.png" />
          </p>

          <div className="news_block_clear">
            <script src="http://cdn.lightwidget.com/widgets/lightwidget.js"></script>
            <iframe
              src="http://lightwidget.com/widgets/a4d9f487201e559eac794fec7699196a.html"
              scrolling="no"
              allowtransparency="true"
              className="lightwidget-widget"
              style={{ width: "100%", border: 0, overflow: "hidden" }}
            ></iframe>
          </div>
        </Section>
        <div className="photo_full_width">
          <img src="./photo/Studio_crop.jpg" />
        </div>
        <div className="photo_full_width_mobile">
          <img src="./photo/Crystal_Ballroom_mobile.jpg" />
        </div>
      </div>

      <div
        className="slide"
        id="slide7"
        data-slide="7"
        data-stellar-background-ratio="0.2"
      >
        <Section name="info-section" className="content">
          <p className="category_header">
            <img src="./logo/INFO.png" />
          </p>
          <div className="news_block_clear">
            <div className="info_box_text">
              <h2 className="info_links">ON THE INTERNETS</h2>
              <p className="sinnet_links">
                <a
                  href="https://sinnet.bandcamp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-bandcamp"></i>
                </a>
                <a
                  href="http://www.facebook.com/sinnetsongs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="http://www.twitter.com/sinnetsongs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://open.spotify.com/artist/60asQRqbLP70R24t4Cgnly?si=4CZYkZQuT7OFTeEyarUqUQ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-spotify"></i>
                </a>
                <a
                  href="https://music.apple.com/us/artist/sinnet/508253412"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-apple"></i>
                </a>
                <a
                  href="http://www.instagram.com/sinnetsongs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </p>
              <h2 className="info_links">BOOKING</h2>
              <p>
                <a href="mailto:sinnetsongs@gmail.com">
                  sinnetsongs(AT)gmail.com
                </a>
              </p>

              <h2 className="info_links">PRESSKIT</h2>
              <p>
                <a href="press.html">HERE</a>
              </p>
            </div>
          </div>

          <div className="info_box_text">
            <h2 style={{ marginBottom: 8 }}>BAND</h2>
            <p>
              <b>Aaron Spransy</b>
              <br />
              Guitar / Keys / Vocals / Songs
            </p>
            <p>
              <b>M. Ege Ercan</b>
              <br />
              Drums
            </p>
            <p>
              <b>Craig Stanton</b>
              <br />
              Guitar / Vox
            </p>
            <p>
              <b>Alex Mijailovic</b>
              <br />
              Bass
            </p>
            <p>
              <b>Colin Callahan</b>
              <br />
              Keys
            </p>
          </div>

          <div className="info_box_text">
            <h2 className="info_links">FRIENDLY LINKS</h2>
            <p>
              <a
                href="http://www.thefatalflaw.net"
                target="_blank"
                rel="noreferrer"
              >
                The Fatal Flaw
              </a>
              <br />
              <a
                href="https://www.fellswayband.com/"
                target="_blank"
                rel="noreferrer"
              >
                Fellsway
              </a>
              <br />
              <a
                href="http://www.americansymphonyofsoul.com"
                target="_blank"
                rel="noreferrer"
              >
                American Symphony of Soul
              </a>
              <br />
              <a href="https://rockandrollinamerica.com/">Rebuilder</a>
              <br />
              <a
                href="http://www.matthewgirard.com"
                target="_blank"
                rel="noreferrer"
              >
                Matthew A Girard Recording
              </a>
              <br />
              <a href="http://www.dalereincephoto.blogspot.com" target="blank">
                Dale Reince Photography
              </a>
              <br />
              <a
                href="http://www.happyplayground.com"
                target="_blank"
                rel="noreferrer"
              >
                Happy Playground
              </a>
              <br />
              <a href="http://www.somervilleguitarco.tumblr.com/">
                Somerville Guitar Co.
              </a>
              <br />
            </p>
          </div>

          <div className="info_box_text">
            <h2 className="info_links">SITE BY</h2>
            <div>
              <a href="http://www.canarycoalmine.com">Canary Coalmine</a>
              <br />
            </div>
            <div>
              <img src="./logo/CC.png" alt="CC" width="70" height="" />
            </div>
          </div>
        </Section>
        <div className="end-logo">
          <img
            src="./logo/Sinnet-Island-Town-logo.png"
            alt="Stones_Logo"
            height="100px"
          />
          <p></p>
          <p>THANK YOU FOR VISITING OUR WEBSITE!</p>
        </div>
      </div>
      <footer>&copy; SINNET 2022</footer>
    </>
  );
}
