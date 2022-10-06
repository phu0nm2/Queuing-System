import React from "react";

import { Space } from "antd";

const Search: React.FC = () => {
  const handleSearch = (value: string) => console.log(value);

  return (
    <>
      <Space direction="vertical">
        {/* <Search
          placeholder="input search text"
          onSearch={handleSearch}
          style={{ width: 200 }}
        /> */}
      </Space>
    </>
  );
};

export default Search;
