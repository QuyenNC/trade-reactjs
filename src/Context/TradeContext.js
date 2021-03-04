import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import axios from "axios";
import { message } from "antd";
export const tradeContext = React.createContext();

export function TradeProvider({ children }) {
  const [tradeRequest, setTradeRequest] = useState([]); // state lưu dữ liệu bài viết
  const [isModalVisible, setIsModalVisible] = useState(false); // state modal gửi yêu cầu
  const [inputs, setInputs] = useState({ selectPost: "", addPost: "" }); // state giá trị input yêu cầu
  const [isTrade, setIsTrade] = useState(false); // state giá trị input yêu cầu
  const [itemTrade, setItemTrade] = useState({});
  //lấy dữ liệu của các bài viết
  useEffect(() => {
    const url = "https://gl-tradeapp.herokuapp.com/api/trade";
    axios.get(url).then(function (res) {
      setTradeRequest(res.data.success.trades);
    });
  }, []);
  //end post
  //tạo yêu cầu trao đổi
  const showModal = (item) => {
    // open modal
    return () => {
      setItemTrade(item);
      setIsModalVisible(true);
    };
  };

  const handleOk = () => {
    if (inputs.addPost === "" || inputs.selectPost === "") {
      setIsTrade(false);
    } else {
      setIsTrade(true);
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "auth-token": `${token}`,
        },
      };
      itemTrade.tradeWithPostId = inputs.selectPost;
      itemTrade.tradeWithAdress = inputs.addPost;
      const url = `https://gl-tradeapp.herokuapp.com/api/trade/create`;
      axios.post(url, itemTrade, config).then((res) => {
        setInputs({ selectPost: "", addPost: "" });
        setIsModalVisible(false);
        setIsTrade(false);
        setTradeRequest(res.data.success.trades);
        return message.success(res.data.success.msg);
      });
    }
  };
  const handleChange = (e) => {
    //onChange input yêu cầu trade
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const handleCancel = () => {
    //close modal
    setIsModalVisible(false);
  };
  //end create trade
  //thay đổi trang thái yêu cầu trao đổi
  const onPutStatusTrade = (id, status) => {
    return () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "auth-token": `${token}`,
        },
      };
      const url = `https://gl-tradeapp.herokuapp.com/api/trade/status/${id}`;
      axios.put(url, { status }, config).then((res) => {
        setTradeRequest(res.data.success.trades);
      });
    };
  };
  //end cancel trade

  //thay đổi trang thái yêu cầu trao đổi
  const onPutStatusExchangeTrade = (id, status) => {
    return () => {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "auth-token": `${token}`,
        },
      };
      const url = `https://gl-tradeapp.herokuapp.com/api/trade/status-exchange/${id}`;
      axios.put(url, { status }, config).then((res) => {
        setTradeRequest(res.data.success.trades);
      });
    };
  };
  //end cancel trade
  return (
    <tradeContext.Provider
      value={{
        tradeRequest,
        handleCancel,
        handleChange,
        handleOk,
        showModal,
        isModalVisible,
        inputs,
        isTrade,
        onPutStatusTrade,
        onPutStatusExchangeTrade,
      }}
    >
      {children}
    </tradeContext.Provider>
  );
}
