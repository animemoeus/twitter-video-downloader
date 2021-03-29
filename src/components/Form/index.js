import React from "react";
import { Success, Processing, Failed } from "../Result";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: null };
  }

  process = () => {
    const url = document.getElementById("input-url").value;

    if (url.length === 0) {
      alert("Please Insert URL First");
    } else {
      this.setState({
        status: "processing",
      });

      // find tweet id
      const tweet_id = url.match("[0-9]{10,20}");

      // get data from API
      fetch(`https://api.animemoe.us/twitter/video-downloader/?id=${tweet_id}`)
        .then(res => res.json())
        .then(result => {
          this.setState({
            status: "success",
            data: result,
          });
        })
        .catch(() => {
          this.setState({
            status: "failed",
          });
        });
    }
  };

  render() {
    let result;

    if (this.state.status === "success") {
      if (this.state.data["success"] === "true") {
        result = <Success data={this.state.data["data"]} />;
      } else {
        result = <Failed message={this.state.data["message"]} />;
      }
    } else if (this.state.status === "processing") {
      result = <Processing />;
    } else if (this.state.status === "failed") {
      result = <Failed message="Check Your Internet Connection" />;
    }

    return (
      <div className="row  animate__animated animate__fadeInUp">
        <div className="col-md-9 p-1">
          <input
            type="text"
            className="form-controllg rounded border border-white shadow-sm"
            placeholder="https://twitter.com/tyomateee/status/1375802764220006405?s=20"
            autoComplete="off"
            id="input-url"
            style={{ height: "55px", width: "100%" }}
          />
        </div>
        <div className="col-md-3 p-1">
          <button
            className="btn btn-warning shadow-sm"
            type="button"
            onClick={this.process}
            style={{ height: "55px", width: "100%" }}
          >
            Download
          </button>
        </div>
        <div className="container p-0">{result}</div>
      </div>
    );
  }
}

export default Form;
