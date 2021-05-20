import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
      style={{ minHeight: " 100vh" }}
    >
      <h1>Not Found</h1>
    </div>
  );
}

export default NotFound;
