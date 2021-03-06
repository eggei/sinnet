import { Element as Section } from "react-scroll";

const streamLinks = [
  { label: "Bandcamp", url: "https:sinnet.bandcamp.com" },
  {
    label: "Apple Music",
    url: "https://music.apple.com/us/artist/sinnet/508253412",
  },
  { label: "Soundcloud", url: "https://soundcloud.com/sinnet" },
  {
    label: "Spotify",
    url: "https://open.spotify.com/artist/60asQRqbLP70R24t4Cgnly",
  },
];

export const JamsSection = () => {
  return (
    <Section name="jams-section" className="content jams-section">
      <p className="category_header">
        <img src="./logo/JAMS.png" alt="jams section logo" />
      </p>
      <div className="box">
        <p>
          <b>Stream / Download</b>
        </p>
        <main>
          {streamLinks.map((item, i) => (
            <>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="stream-link"
              >
                {item.label}
              </a>
              {i !== streamLinks.length - 1 && <span>|</span>}
            </>
          ))}
        </main>
      </div>
      <div className="sinnet_music">
        <div>
          <h3>LPs</h3>
          <div className="media">
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
          </div>
        </div>
        <div>
          <h3>EPs</h3>
          <div className="media">
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
          </div>
        </div>
        <div>
          <h3>Singles</h3>
          <div className="media singles">
            <iframe
              title="iron woman"
              src="https://bandcamp.com/EmbeddedPlayer/track=3002858242/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://sinnet.bandcamp.com/track/iron-woman">
                Iron Woman by Sinnet
              </a>
            </iframe>
            <iframe
              title="coco beware"
              src="https://bandcamp.com/EmbeddedPlayer/track=1041329960/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://sinnet.bandcamp.com/track/coco-beware">
                Coco Beware by Sinnet
              </a>
            </iframe>
            <iframe
              title="pink flamingo hotel"
              src="https://bandcamp.com/EmbeddedPlayer/album=1761528275/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://sinnet.bandcamp.com/album/pink-flamingo-hotels">
                Pink Flamingo Hotels by Sinnet
              </a>
            </iframe>
            <iframe
              title="everybody into the pool"
              src="https://bandcamp.com/EmbeddedPlayer/track=2483462545/size=large/bgcol=ffffff/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/"
              seamless
            >
              <a href="https://sinnet.bandcamp.com/track/everybody-into-the-pool-fable-and-the-world-flat-remix">
                Everybody into the Pool (Fable and the World Flat Remix) by
                Sinnet
              </a>
            </iframe>
          </div>
        </div>
      </div>
    </Section>
  );
};
