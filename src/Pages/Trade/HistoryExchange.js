import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { Tag, Space } from "antd";
import { Redirect } from "react-router-dom";
import { CheckCircleOutlined } from "@ant-design/icons";

import "../style/Exchange.css";

function HistoryExchange() {
  const token = localStorage.getItem("token");
  let isLoginStt = true;
  if (token == null) {
    isLoginStt = false;
  }
  const [isLogin] = useState(isLoginStt);
  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mã giao dịch",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Sản phẩm trao đổi",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: () => (
        <Space size="middle">
          <Tag icon={<CheckCircleOutlined />} color="success">
            {" Thành công".toLocaleUpperCase()}
          </Tag>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      status: ["chờ xác nhận"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      status: ["xác nhận"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      status: ["từ chối"],
    },
  ];
  if (isLogin === false) {
    return <Redirect to="login" />;
  }
  return (
    <div className="HistoryExchange">
      <div className="wrap">
        <div className="ex-title">
          <h1>Lịch sử giao dịch</h1>
        </div>
        <div className="ex-table">
          <Table
            columns={columns}
            pagination={{ pageSize: 7 }}
            dataSource={data}
          />
        </div>
      </div>
    </div>
  );
}
export default HistoryExchange;
