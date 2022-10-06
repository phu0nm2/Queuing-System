import React from "react";

import BreadCrumb from "../../components/BreadCrumb";
import DropdownComponent from "../../components/DropdownComponent";
import SearchCoponent from "../../components/Search";

import "./styles.scss";

const Devices = () => {
  return (
    <>
      <div className="device">
        <div className="device-breadcrumb">
          <BreadCrumb />
        </div>

        <div className="device-title">
          <h2>Danh sách thiết bị</h2>
        </div>

        <div className="actions">
          <div className="actions-tthd">
            <div className="actions-tthd__text actions-default">
              Trạng thái hoạt động
            </div>
            <DropdownComponent />
          </div>

          <div className="actions-ttkn">
            <div className="actions-ttkn__text actions-default">
              Trạng thái kết nối
            </div>
            <DropdownComponent />
          </div>

          <div className="actions-keyword">
            <div className="actions-keyword__text actions-default">Từ khóa</div>
            <SearchCoponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default Devices;
