import { InputText } from "../form";
import { SubmitButton } from "../button";
import { Success, Processing, Failed } from "../result";
import { useState } from "react";

function Home() {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState({});

  const handleInput = e => {
    if (e.charCode === 13) {
      process();
    }
  };

  const handleSubmit = () => {
    process();
  };

  const process = () => {
    const url = document.getElementById("input").value;

    if (url.length <= 0) {
      alert("Please Input URL First");
    } else {
      setStatus("processing");

      // get the tweet id
      const tweet_id = url.match("[0-9]{10,20}");

      fetch(`https://api.animemoe.us/twitter/video-downloader/?id=${tweet_id}`)
        .then(res => res.json())
        .then(data => {
          if (data.success === "true") {
            setData(data.data);
            setStatus("success");
          } else {
            setData({ message: data.message });
            setStatus("failed");
          }
        })
        .catch(() => {
          setData({ message: "Check Your Internet Connection" });
          setStatus("failed");
        });
    }
  };

  return (
    <div className="container-md mt-5">
      <h2 className="text-center text-white fs-1 mb-2">
        Twitter Video Downloader
      </h2>

      <div className="row">
        <div className="col-md-8 px-2 py-1">
          <InputText handleInput={handleInput} />
        </div>
        <div className="col-md-4 px-2 py-1">
          <SubmitButton handleSubmit={handleSubmit} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-12 px-2">
          {status === "success" && <Success data={data} />}
          {status === "processing" && <Processing />}
          {status === "failed" && <Failed message={data.message} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
