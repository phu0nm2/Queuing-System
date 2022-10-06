import React from "react";

import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space, message } from "antd";
import type { MenuProps } from "antd";

const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick: MenuProps["onClick"] = (e) => {
  // message.info("Click on menu item.");
  console.log("click", e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "Tất cả",
        key: "1",
      },
      {
        label: "Hoạt động",
        key: "2",
      },
      {
        label: "Ngưng hoạt động",
        key: "3",
      },
    ]}
  />
);

const DropdownComponent = () => {
  return (
    <>
      <Space wrap>
        <Dropdown overlay={menu}>
          <Button>
            <Space>
              Tất cả
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </Space>
    </>
  );
};

export default DropdownComponent;
