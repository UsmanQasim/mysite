import React, { useState, useEffect } from "react";
import RouteHandler from "./components/RouteHandler/RouteHandler";
import "./App.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);

  return (
    <div>
      {loading ? (
        <img src="watergif_loader.gif" alt="sgif" />
      ) : (
        <RouteHandler />
      )}
    </div>
  );
};

export default App;
