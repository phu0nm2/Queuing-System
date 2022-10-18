import React from "react";
import { NavLink } from "react-router-dom";
import LogoAlta from "../../../components/LogoAlta";
import icons from "../../../shared/assests/icons";

import "./styles.scss";

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar--logo">
          <LogoAlta />
        </div>

        <NavLink
          className={({ isActive }) =>
            "sidebar__default sidebar--dashboard " + (isActive ? "active" : "")
          }
          to="/dashboard"
        >
          <img src={icons.dashboardIcon} alt="dashboard" />
          Dashboard
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "sidebar__default sidebar--thietbi " + (isActive ? "active" : "")
          }
          to="/thietbi"
        >
          <img src={icons.monitorIcon} alt="mobitor" />
          Thiết bị
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "sidebar__default sidebar--dichvu " + (isActive ? "active" : "")
          }
          to="/dichvu"
        >
          <img src={icons.serviceIcon} alt="service" />
          Dịch vụ
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "sidebar__default sidebar--capso " + (isActive ? "active" : "")
          }
          to="/capso"
        >
          <img src={icons.giveNumberIcon} alt="giveNumber" />
          Cấp số
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "sidebar__default sidebar--baocao " + (isActive ? "active" : "")
          }
          to="/baocao"
        >
          <img src={icons.reportIcon} alt="report" />
          Báo cáo
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            "sidebar__default sidebar--caidat " + (isActive ? "active" : "")
          }
          to="/caidat"
        >
          <img src={icons.settingIcon} alt="setting" />
          Cài đặt
        </NavLink>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
