import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid" style={{ backgroundColor: "#0086fe" }}>
        <div className="container-md py-5">
          <h2 className="text-center text-white">Twitter Video Downloader</h2>
          <br />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
