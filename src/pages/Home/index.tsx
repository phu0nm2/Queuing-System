import React from "react";

import { Tabs } from "antd";
// import LogoAlta from "../../components/LogoAlta";
// import dashboardIcon from "../../shared/assests/imgs/dashboardIcon.png";
import monitor from "../../shared/assests/imgs/monitor.svg";

import "./styles.scss";
import Devices from "../Devices";

type TabPosition = "left";

const Home: React.FC = () => {
  const [tabPosition, setTabPosition] = React.useState<TabPosition>("left");

  const items = [
    //render components tương ứng

    {
      label: (
        <span>
          {/* <img src={dashboardIcon} alt="dashboard-icon" /> */}
          Dashboard
        </span>
      ),
      key: "item-1",
      children: "Dashboard",
    },

    {
      label: (
        <div className="monitor">
          <span>
            <img src={monitor} alt="monitor-icon" />
          </span>
          <h6 className="monitor-text">Thiết bị</h6>
        </div>
      ),
      key: "item-2",
      children: <Devices />,
    },

    { label: "Dịch vụ", key: "item-3", children: "Dịch vụ" },
    { label: "Cấp số", key: "item-4", children: "Cấp số" },
    { label: "Báo cáo", key: "item-5", children: "Báo cáo" },
    { label: "Cài đặt hệ thống", key: "item-6", children: "Cài đặt hệ thống" },
  ];

  return (
    <>
      <div className="homepage">
        {/* <LogoAlta /> */}
        <Tabs tabPosition={tabPosition} items={items} />
      </div>

      <button className="homepage__logout">Đăng xuất</button>
    </>
  );
};

export default Home;
