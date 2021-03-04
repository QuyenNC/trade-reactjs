import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import { message } from "antd";

import { postContext, PostProvider } from "./Components/Context/PostContext";
import { TradeProvider } from "./Components/Context/TradeContext";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Index from "./Components/Index/Index";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Forgot from "./Components/Login/Forgot";
import Profile from "./Components/Profile/Profile";
import ExchangeRequest from "./Components/Trade/ExchangeRequest";
import RequestExchange from "./Components/Trade/RequestExchange";
import HistoryExchange from "./Components/Trade/HistoryExchange";
import PostProduct from "./Components/Trade/PostProduct";
function App() {
  const token = localStorage.getItem("token");
  let isLoginStt = true;
  if (token == null) {
    isLoginStt = false;
  }

  const [isLogin, setIsLogin] = useState(isLoginStt); // state lưu trạng thái login
  const [loadLogin, setLoadLogin] = useState(false); // state load button đăng nhập

  // xử lý đăng nhập , đăng xuất
  const onLoginFinish = (values) => {
    setLoadLogin(true);
    const url = "https://gl-tradeapp.herokuapp.com/api/auth/login";
    axios
      .post(url, values)
      .then(function (res) {
        if (res.data.errors) {
          setLoadLogin(false);
          return message.error(res.data.errors.msg);
        }
        if (res.data.success) {
          localStorage.setItem("token", res.data.success.token);
          localStorage.setItem("user", JSON.stringify(res.data.success.user));
          setIsLogin(true);
          setLoadLogin(false);
          return message.success(res.data.success.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return message.success("Đăng xuất thành công");
  };
  //end login logout

  return (
    <PostProvider>
      <TradeProvider>
        <Router>
          <div className="App">
            <Header isLogin={isLogin} onLogout={onLogout} />
            <Switch>
              <Route path="/post-product">
                <PostProduct/>
              </Route>
              <Route path="/history-exchange">
                <HistoryExchange />
              </Route>
              <Route path="/request-exchange">
                <RequestExchange />
              </Route>
              <Route path="/exchange-request">
                <ExchangeRequest />
              </Route>
              <Route path="/profile/:slug">
                <Profile />
              </Route>
              <Route path="/forgot">
                <Forgot />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login
                  onFinish={onLoginFinish}
                  loginSus={isLogin}
                  loadLogin={loadLogin}
                />
              </Route>
              <Route path="/">
                <postContext.Consumer>
                  {({ dataFilter }) => <Index data={dataFilter} />}
                </postContext.Consumer>
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
      </TradeProvider>
    </PostProvider>
  );
}
export default App;
