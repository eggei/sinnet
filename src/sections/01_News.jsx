import { Element as Section } from "react-scroll";

export const NewsSection = () => {
  return (
    <Section name="news-section" className="content news-section">
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
          Mainline, Andrew Paul), Matthew Girard - (Ruby Rose Fox, Parks, Will
          Dailey) and oh so many more...
        </p>
        <p>
          Recorded by Aaron Spransy, mixed by Matthew Girard, mastered by Justin
          Perkins at Mystery Room Mastering.
        </p>
        <p>
          <iframe
            title="island town"
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
          <i>Iron Woman</i> has long been a favorite cover of ours. Originally
          by Devin Davis, who's sole album "Lonely People of the World Unite" is
          a criminally underrated power-pop gem. It's been a staple of our live
          shows for years.
        </p>
        <p>
          A bunch of years ago we realized that we were all in the same Devin
          Davis appreciation facebook group so, covering one of his songs was an
          easy move.
        </p>
        <p>
          The recent downtime in live music has been a good opportunity to
          record our own version of it and use the proceeds to support a cause
          we believe in (women's reproductive rights). All proceeds go to
          <b>Planned Parenthood</b>.
        </p>
        <p>
          The track features a bunch of talented buds: <b>Joel Reader</b> (The
          Fatal Flaw, MTX, Pansy Division), <b>Jac Mestrel</b> (Little Happy
          Clouds), <b>John Drislane</b> (The Daisies, The Maxims),
          <b>Elio DeLuca</b> (Titus Andronicus) and more!
        </p>
        <p>
          Did I mention there is a <b>sax solo?</b> Hell yeah!
        </p>
        <p>
          <iframe
            title="iron-woman"
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
  );
};
