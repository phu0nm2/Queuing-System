import { Route, Routes, Navigate } from "react-router-dom";
import Report from "../pages/components/Report";
import Dashboard from "../pages/components/Dashboard";
import Devices from "../pages/components/Devices";
import Home from "../pages/Home";
import Setting from "../pages/components/Setting";
import Sevices from "../pages/components/Services";
import GiveNumber from "../pages/components/GiveNumber";

const Routers = () => {
  return (
    <Routes>
      {/* {routes.map((route, key) => (
        <Route path={route.path} key={key} element={<route.element />} />
      ))} */}
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Navigate replace to="home" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="thietbi" element={<Devices />} />
      <Route path="dichvu" element={<Sevices />} />
      <Route path="capso" element={<GiveNumber />} />
      <Route path="baocao" element={<Report />} />
      <Route path="caidat" element={<Setting />} />
      {/* <Route path="/" element={<Navigate replace to="thietbi" />} /> */}
    </Routes>
  );
};
export default Routers;
