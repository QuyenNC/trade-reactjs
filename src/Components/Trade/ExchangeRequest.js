import React, { useState } from "react";
import "antd/dist/antd.css";
import { Table, Space, Button, Tag } from "antd";
import { Redirect } from "react-router-dom";

import { tradeContext } from "../Context/TradeContext";
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import "../style/Exchange.css";

function ExchangeRequest() {
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
      dataIndex: "titlePost",
      key: "titlePost",
    },
    {
      title: "Mã giao dịch",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Sản phẩm trao đổi",
      dataIndex: "tradeWithTitlePost",
      key: "tradeWithTitlePost",
    },
    {
      title: "Người nhận",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Địa chỉ gửi hàng",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Trạng thái",
      dataIndex: "statusWithTrade",
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
                {'đang chuyển hàng'.toUpperCase()}
              </Tag>
            );
          case "":
            return (
              <Tag color="default" key={status} icon={<ClockCircleOutlined />}>
                {'thành công'.toUpperCase()}
              </Tag>
            );
          case "đã hủy":
            return (
              <Tag color="error" key={status} icon={<ClockCircleOutlined />}>
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
        switch (record.statusWithTrade) {
          case "chờ xác nhận":
            return (
              <tradeContext.Consumer>
                {({ onPutStatusExchangeTrade }) => (
                  <Space size="middle">
                    <Button
                      type="primary"
                      onClick={onPutStatusExchangeTrade(record._id, "đồng ý")}
                    >
                      Đồng ý
                    </Button>
                    <Button
                      type="primary"
                      onClick={onPutStatusExchangeTrade(record._id, "từ chối")}
                    >
                      Từ chối
                    </Button>
                  </Space>
                )}
              </tradeContext.Consumer>
            );
          case "từ chối":
            return (
              <Tag color="error" icon={<CloseCircleOutlined />}>
                {"đã từ chối".toUpperCase()}
              </Tag>
            );
          case "đã nhận được hàng":
            return (
              <Tag color="success" icon={<CloseCircleOutlined />}>
                {"thành công".toUpperCase()}
              </Tag>
            );
          case "đồng ý":
            return (
              <tradeContext.Consumer>
                {({ onPutStatusExchangeTrade }) => (
                  <Space size="middle">
                    <Button
                      type="primary"
                      onClick={onPutStatusExchangeTrade(
                        record._id,
                        "đang chuyển hàng"
                      )}
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
                {({ onPutStatusExchangeTrade }) => (
                  <Space size="middle">
                    <Button
                      type="primary"
                      onClick={onPutStatusExchangeTrade(
                        record._id,
                        "đã nhận được hàng"
                      )}
                    >
                      Đã nhận được hàng
                    </Button>
                  </Space>
                )}
              </tradeContext.Consumer>
            );
          default:
            return (
              <Tag icon={<CheckCircleOutlined />} color="error">
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
    <div className="ExchangeRequest">
      <div className="wrap">
        <div className="ex-title">
          <h1>Các yêu cầu trao đổi</h1>
        </div>
        <div className="ex-table">
          <tradeContext.Consumer>
            {({ tradeRequest }) => (
              <Table
                size="middle"
                columns={columns}
                pagination={{ pageSize: 7 }}
                dataSource={tradeRequest.filter(
                  (item) =>
                    item.tradeWithUserId.toString() === user._id.toString()
                )}
              />
            )}
          </tradeContext.Consumer>
        </div>
      </div>
    </div>
  );
}
export default ExchangeRequest;
