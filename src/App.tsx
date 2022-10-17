import React from "react";
import { BrowserRouter } from "react-router-dom";

import Sidebar from "./pages/components/Sidebar";
import Routers from "./router/route";
import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="sidebar--wrapper">
          <Sidebar />
        </div>

        <div className="content--wrapper">
          <Routers />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
