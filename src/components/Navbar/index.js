function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light animate__animated animate__fadeIn">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Twitter Video Downloader
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                href="https://github.com/animemoeus/twitter-video-downloader"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
