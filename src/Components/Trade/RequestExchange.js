import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table, Tag, Button, Space } from "antd";

import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { Redirect } from "react-router-dom";

import { tradeContext } from "../Context/TradeContext";

import "../style/Exchange.css";

function RequestExchange() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  let isLoginStt = true;
  if (token == null) {
    isLoginStt = false;
  }
  const [isLogin] = useState(isLoginStt);
  const columns = [
    {
      title: "Sản phẩm",
      dataIndex: "tradeWithTitlePost",
      key: "tradeWithTitlePost",
    },
    {
      title: "Mã giao dịch",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Sản phẩm muốn đổi",
      dataIndex: "titlePost",
      key: "titlePost",
    },
    {
      title: "Người nhận",
      dataIndex: "tradeWithUsername",
      key: "tradeWithUsername",
    },
    {
      title: "Địa chỉ gửi hàng",
      dataIndex: "tradeWithAdress",
      key: "tradeWithAdress",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        switch (status) {
          case "chờ xác nhận":
            return (
              <Tag color="processing" key={status} icon={<SyncOutlined spin />}>
                {status.toUpperCase()}
              </Tag>
            );
          case "từ chối":
            return (
              <Tag color="error" key={status} icon={<CloseCircleOutlined />}>
                {status.toUpperCase()}
              </Tag>
            );
          case "đồng ý":
            return (
              <Tag color="success" key={status} icon={<CheckCircleOutlined />}>
                {status.toUpperCase()}
              </Tag>
            );
          case "đang chuyển hàng":
            return (
              <Tag color="default" key={status} icon={<ClockCircleOutlined />}>
                {status.toUpperCase()}
              </Tag>
            );
          case "đã hủy":
            return (
              <Tag color="error" key={status} icon={<CloseCircleOutlined />}>
                {status.toUpperCase()}
              </Tag>
            );
          default:
            return (
              <Tag icon={<CheckCircleOutlined />} color="success">
                {" Thành công".toLocaleUpperCase()}
              </Tag>
            );
        }
      },
    },
    {
      title: "",
      key: "action",
      render: (record) => {
        switch (record.status) {
          case "chờ xác nhận":
            return (
              <tradeContext.Consumer>
                {({ onPutStatusTrade }) => (
                  <Space size="middle">
                    <Button
                      type="primary"
                      onClick={onPutStatusTrade(record._id, "đã hủy")}
                    >
                      Hủy yêu cầu
                    </Button>
                  </Space>
                )}
              </tradeContext.Consumer>
            );
          case "từ chối":
            return (
              <Tag color="error" icon={<CloseCircleOutlined />}>
                {"đã bị từ chối".toUpperCase()}
              </Tag>
            );
          case "đồng ý":
            return (
              <tradeContext.Consumer>
                {({ onPutStatusTrade }) => (
                  <Space size="middle">
                    <Button
                      type="primary"
                      onClick={onPutStatusTrade(record._id, "đang chuyển hàng")}
                    >
                      Đã gửi hàng
                    </Button>
                  </Space>
                )}
              </tradeContext.Consumer>
            );
          case "đang chuyển hàng":
            return (
              <tradeContext.Consumer>
                {({ onPutStatusTrade }) => (
                  <Space size="middle">
                    <Button
                      type="primary"
                      onClick={onPutStatusTrade(record._id, "đã nhận hàng")}
                    >
                      Đã nhận được hàng
                    </Button>
                  </Space>
                )}
              </tradeContext.Consumer>
            );
          case "đã nhận được hàng":
            return (
              <Tag color="success" icon={<CloseCircleOutlined />}>
                {"thành công".toUpperCase()}
              </Tag>
            );
          default:
            return (
              <Tag icon={<CheckCircleOutlined />} color="success">
                {"đã hủy".toLocaleUpperCase()}
              </Tag>
            );
        }
      },
    },
  ];

  if (isLogin === false) {
    return <Redirect to="login" />;
  }
  return (
    <div className="RequestExchange">
      <div className="wrap">
        <div className="ex-title">
          <h1>Các yêu cầu đã gửi</h1>
        </div>
        <div className="ex-table">
          <tradeContext.Consumer>
            {({ tradeRequest }) => (
              <Table
                size="middle"
                columns={columns}
                pagination={{ pageSize: 7 }}
                dataSource={tradeRequest.filter(
                  (item) => item.userId.toString() === user._id.toString()
                )}
              />
            )}
          </tradeContext.Consumer>
        </div>
      </div>
    </div>
  );
}
export default RequestExchange;
