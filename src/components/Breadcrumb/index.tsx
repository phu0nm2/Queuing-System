import React from 'react';

import { Breadcrumb } from 'antd';
import './styles.scss';
import { useMatches } from 'react-router-dom';

const BreadCrumb: React.FC = () => {
  // let matches = useMatches();
  // let crumbs = matches.filter((match)=>Boolean(match.handle?.crumb)).map((match)=>match.handle?.crumb(match.data));

  return (
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
};
export default BreadCrumb;
