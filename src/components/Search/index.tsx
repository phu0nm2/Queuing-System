import React from "react";

import { Input } from "antd";
import searchIcon from "../../shared/assests/imgs/searchIcon.svg";

import "./styles.scss";
const SearchCoponent: React.FC = () => {
  const handleSearch = (value: string) => console.log(value);

  return (
    <>
      <div className="search">
        <Input placeholder="Nhập từ khóa" className="search-input" />

        <div className="search-icon">
          <img src={searchIcon} alt="search-icon" />
        </div>
      </div>
    </>
  );
};

export default SearchCoponent;
