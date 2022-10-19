import React from 'react';

import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import { Link } from 'react-router-dom';

import BreadCrumb from '../../components/BreadCrumb';
import DropdownComponent from '../../components/DropdownComponent';
import SearchCoponent from '../../components/Search';

import './styles.scss';
import icons from '../../shared/assests/icons';

interface DataType {
  key: string;
  deviceId: string;
  name: string;
  IPaddress: any;
  status: string[] | any[];
  statusConnect: string[] | any[];
  services: string;
  // tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Mã thiết bị',
    dataIndex: 'deviceId',
    key: 'deviceId',
    render: text => <a>{text}</a>,
  },

  {
    title: 'Tên thiết bị',
    dataIndex: 'name',
    key: 'name',
  },

  {
    title: 'Địa chỉ IP',
    dataIndex: 'IPaddress',
    key: 'IPaddress',
  },

  {
    title: 'Trạng thái hoạt động',
    dataIndex: 'status',
    key: 'status',
    // render: (_, { status }) => (
    //   <>
    //     {status.map((stt: any) => {
    //       let textStt = stt.length > 10 ? "Ngưng hoạt động" : "Hoạt động";
    //       if (stt.length > 10) {
    //         <div>
    //           <img src="img" alt="stt" />
    //           <span>{textStt}</span>
    //         </div>;
    //       }
    //     })}
    //   </>
    // ),
  },

  {
    title: 'Trạng thái kết nối',
    dataIndex: 'statusConnect',
    key: 'statusConnect',
  },

  {
    title: 'Dịch vụ sử dụng',
    dataIndex: 'services',
    key: 'services',
  },

  {
    title: '',
    dataIndex: 'detail',
    key: 'detail',
    render: () => <Link to="/thietbi/detail">Chi tiết</Link>,
    width: '8%',
  },

  {
    title: '',
    dataIndex: 'update',
    key: 'update',
    render: () => <Link to="/thietbi/update">Cập nhật</Link>,
    width: '10%',
  },

  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   render: (_, { tags }) => (
  //     <>
  //       {tags.map((tag) => {
  //         let color = tag.length > 5 ? "geekblue" : "green";
  //         if (tag === "loser") {
  //           color = "volcano";
  //         }
  //         return (
  //           <Tag color={color} key={tag}>
  //             {tag.toUpperCase()}
  //           </Tag>
  //         );
  //       })}
  //     </>
  //   ),
  // },

  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const data: DataType[] = [
  {
    key: '1',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // tags: ["nice", "developer"],
  },
  {
    key: '2',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // tags: ["loser"],
  },
  {
    key: '3',
    deviceId: 'KIO_01',
    name: 'Kiosk',
    IPaddress: '192.168.1.10',
    status: ['Ngưng hoạt động', 'Hoạt động'],
    statusConnect: ['Kết nối', 'Mất kết nối'],
    services: 'Khám tim mạch, Khám mắt...',
    // tags: ["cool", "teacher"],
  },
];

const paginationConfig = {
  className: 'device--tables__pagination',
  responsive: true,
  pageSize: 10,
  total: 100,
  showSizeChanger: false,
  showQuickJumper: false,
};

const Devices: React.FC = () => {
  return (
    <>
      <div className="device">
        <div className="device--breadcrumb">
          <BreadCrumb />
        </div>
        <div className="device--title">
          <h2>Danh sách thiết bị</h2>
        </div>
        <div className="actions">
          <div className="actions--tthd">
            <div className="actions-tthd__text actions--default">Trạng thái hoạt động</div>
            <DropdownComponent />
          </div>

          <div className="actions--ttkn">
            <div className="actions-ttkn__text actions--default">Trạng thái kết nối</div>
            <DropdownComponent />
          </div>

          <div className="actions--keyword">
            <div className="actions-keyword__text actions--default">Từ khóa</div>
            <SearchCoponent />
          </div>
        </div>

        <div className="device--tables">
          <Table bordered columns={columns} dataSource={data} pagination={paginationConfig} />

          <Link to="/thietbi/add" className="device--add__btn">
            <img src={icons.addIcon} alt="addDevice" />
            <h4>Thêm thiết bị</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Devices;
