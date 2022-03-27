export const HamburgerNavigation = () => {
  return (
    <nav data-role="hamburger-menu">
      <div id="hamMenuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="hamMenu">
          <li>
            <img
              src="./logo/Sinnet-Island-Town-logo.png"
              alt="bolt"
              height="50vw"
            />
          </li>
          <li data-slide="2">NEWS</li>
          <li data-slide="3">SHOWS</li>
          <li data-slide="4">JAMS</li>
          <li data-slide="5">VIDEO</li>
          <li data-slide="6">PHOTO</li>
          <li data-slide="7">INFO</li>
        </ul>
      </div>
    </nav>
  );
};
