function InputText(props) {
  return (
    <input
      type="text"
      className="form-controllg rounded border border-white shadow"
      placeholder=" https://twitter.com/tyomateee/status/1375802764220006405?s=20"
      autoComplete="off"
      id="input"
      onKeyPress={e => props.handleInput(e)}
      style={{ height: "55px", width: "100%" }}
    />
  );
}

export { InputText };
