import React from "react";

import { Breadcrumb } from "antd";
import "./styles.scss";

const BreadCrumb: React.FC = () => (
  <>
    <div className="breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item className="breadcrumb-title">Thiết bị</Breadcrumb.Item>

        {/* <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>

    <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
      </Breadcrumb>
    </div>
  </>
);
export default BreadCrumb;
