function Form() {
  return (
    <div className="row">
      <div className="col-md-9 p-0">
        <input
          type="text"
          className="form-control"
          placeholder="https://twitter.com/tyomateee/status/1375802764220006405?s=20"
          autoComplete="off"
        />
      </div>
      <div className="col-md-3 p-0">
        <button
          className="btn btn-warning"
          type="button"
          style={{ width: "100%" }}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default Form;
