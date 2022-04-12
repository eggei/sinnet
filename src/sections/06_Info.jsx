import { Element as Section } from "react-scroll";

export const InfoSection = () => {
  return (
    <Section name="info-section" className="content info-section">
      <p className="category_header">
        <img src="./logo/INFO.png" alt="info section logo" />
      </p>
      <main>
        <div className="info-bit">
          <h2>ON THE INTERNETS</h2>
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
        </div>
        <div className="info-bit">
          <h2>BOOKING</h2>
          <p>
            <a href="mailto:sinnetsongs@gmail.com">sinnetsongs(AT)gmail.com</a>
          </p>
        </div>

        <div className="info-bit">
          <h2>PRESSKIT</h2>
          <p>
            <a href="press.html">HERE</a>
          </p>
        </div>

        <div className="info-bit">
          <h2>BAND</h2>
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

        <div className="info-bit">
          <h2>FRIENDLY LINKS</h2>
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

        <div className="info-bit">
          <h2 className="info_links">SITE BY</h2>
          <div>
            <a href="http://www.canarycoalmine.com">Canary Coalmine</a>
            <br />
          </div>
          <div>
            <img src="./logo/CC.png" alt="CC" width="70" height="" />
          </div>
        </div>
      </main>
      <div className="end-logo">
        <img
          src="./logo/Sinnet-Island-Town-logo.png"
          alt="Stones_Logo"
          height="100px"
        />
        <p>THANK YOU FOR VISITING OUR WEBSITE!</p>
      </div>
    </Section>
  );
};
