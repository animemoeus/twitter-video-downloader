import { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { Ads } from "../../components/atoms";
import { Navbar } from "../../components/molecules";

function Latest() {
  const [isLoading, setIsLoading] = useState(true);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("https://api.animemoe.us/twitter-video-downloader/latest/")
      .then((res) => res.json())
      .then((response) => {
        setTweets(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        alert("Check Your Internet Connection");
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <Navbar />

        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />

        <div className="container-fluid mt-4 p-1">
          <div className="">
            <h1 className="text-white text-center">Latest Downloaded Video</h1>

            <Ads />

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3, 1100: 4 }}
            >
              <Masonry>
                {tweets.map((tweet, index) => {
                  return (
                    <div
                      className="p-1 align-items-start animate__animated animate__fadeIn"
                      key={index}
                    >
                      <div
                        className="card grid-item"
                        style={{ width: "100%", borderRadius: 0 }}
                      >
                        <img
                          src={tweet.thumbnail}
                          className="card-img-top shadow-sm"
                          alt={tweet.name}
                        />
                        <hr className="m-0" />
                        <div className="card-body text-center p-0 pb-2">
                          <p className="card-title fs-5">{tweet.name}</p>
                          <a
                            href={`http://ouo.io/qs/Ks3CJSWC?s=${tweet.video}`}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary btn-sm shadow-sm"
                          >
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    );
  }
}

export default Latest;
