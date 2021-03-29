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
      <div className="row">
        <div className="col-md-9 p-1">
          <input
            type="text"
            className="form-control"
            placeholder="https://twitter.com/tyomateee/status/1375802764220006405?s=20"
            autoComplete="off"
            id="input-url"
          />
        </div>
        <div className="col-md-3 p-1">
          <button
            className="btn btn-warning"
            type="button"
            style={{ width: "100%" }}
            onClick={this.process}
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
