import { DownloadButton } from "../../atoms";

function Success(props) {
  return (
    <div className="card mb-3 shadow animate__animated animate__fadeIn">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.data.thumbnail}
            className="img-fluid p-1 shadow-sm"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title text-center">
              <a
                href={`https://twitter.com/${props.data.username}`}
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                {props.data.name}
              </a>
            </h3>
            <hr />
            <div className="card-text">
              <h4>Download:</h4>
              {props.data.videos.map((e, i) => {
                return <DownloadButton key={i} target={e.url} text={e.size} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Processing() {
  return (
    <div className="d-flex justify-content-center mt-5 animate__animated animate__fadeIn">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

function Failed(props) {
  return (
    <div className="text-center mt-4 animate__animated animate__fadeIn">
      <h3>{props.message}</h3>
    </div>
  );
}

export { Success, Processing, Failed };
