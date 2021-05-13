import AdSense from "react-adsense";

function Ads() {
  return (
    <div className="container-fluid p-0 m-0 mb-2 rounded text-center">
      <AdSense.Google
        client="ca-pub-3865845660755241"
        slot="4545380943"
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />
    </div>
  );
}

export default Ads;
