import React from "react";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./pages/components/Sidebar";
import Routers from "./router/route";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <Routers />
      </div>
    </BrowserRouter>
  );
};
export default App;
