import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './layouts/DefaultLayout';
import { Layout } from 'antd';

// import React from "react";
// import { BrowserRouter } from "react-router-dom";

// import Sidebar from "./pages/components/Sidebar";
// import Routers from "./router/route";
// import "./app.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {publicRoutes?.map((route: any, index) => {
            let Layout: any = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route key={index} path={route.path} element={<Layout>{route.component}</Layout>} />
            );
          })}
        </Routes>
      </Layout>

      {/* <div className="app">
         <div className="sidebar--wrapper">
           <Sidebar />
         </div>

         <div className="content--wrapper">
           <Routers />
         </div>
       </div> */}
    </BrowserRouter>
  );
};
export default App;
