import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="container-md py-5">
          <h2 className="text-center text-white container-fluid animate__animated animate__zoomIn">
            Twitter Video Downloader
          </h2>
          <br />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
