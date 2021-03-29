function Success(props) {
  const { name, username, thumbnail, video } = props.data;

  //   console.log(name, username, thumbnail, video);

  const downloadLink = video.map((data, i) => {
    return (
      <a
        href={`${data["url"]}`}
        key={i}
        target="_blank"
        rel="noreferrer"
        className="m-1"
      >
        <button type="button" className="btn btn-primary btn-sm">
          {data["size"]}
        </button>
      </a>
    );
  });

  return (
    <div className="card mt-4 animate__animated animate__fadeIn">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={thumbnail}
            className="img-thumbnail shadow-sm border-0"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h4 className="card-title">
              <a
                href={`https://twitter.com/${username}`}
                className="text-decoration-none"
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
            </h4>
            <hr />
            <h4>Download</h4>
            <p className="card-text">
              <small className="text-muted">{downloadLink}</small>
            </p>
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
      <h4>{props.message}</h4>
    </div>
  );
}

export { Success, Processing, Failed };
