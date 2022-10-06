import React from "react";

import { Breadcrumb } from "antd";
import "./styles.scss";

const BreadCrumb: React.FC = () => (
  <Breadcrumb>
    <Breadcrumb.Item>Thiết bị</Breadcrumb.Item>

    {/* <Breadcrumb.Item>
      <a href="">Application Center</a>
    </Breadcrumb.Item>

    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>

    <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
  </Breadcrumb>
);
export default BreadCrumb;
