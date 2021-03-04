import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Input, Button, Upload, Select } from "antd";
import { TagsOutlined, EnvironmentOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

import { postContext } from "../../Context/PostContext";

import "../style/PostProduct.css";

function PostProduct(props) {
  // const {onFinishCreatPost, onChangeFileInput, handleChangeCataInput, loadCreatePost, fileList} = props;
  const { TextArea } = Input;
  const { Option } = Select;
  const children = [
    "Bất động sản",
    "Xe cộ",
    "Đồ điện tử",
    "Thú cưng",
    "Đồ gia dụng",
    "Thời trang",
  ];

  const token = localStorage.getItem("token");
  let isLoginStt = true;
  if (token == null) {
    isLoginStt = false;
  }
  const [isLogin] = useState(isLoginStt); //state trạng thái login

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  if (isLogin === false) {
    return <Redirect to="login" />;
  }
  return (
    <postContext.Consumer>
      {({
        onFinishCreatPost,
        onChangeFileInput,
        handleChangeCataInput,
        loadCreatePost,
        fileList,
      }) => (
        <div className="PostProduct">
          <div className="wrap">
            <div className="r-box">
              <div className="f-register">
                <h3>Đăng bài</h3>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinishCreatPost}
                >
                  <Form.Item
                    name="nameProduct"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name - product!",
                      },
                    ]}
                  >
                    <Input
                      className="input-control"
                      prefix={<TagsOutlined className="site-form-item-icon" />}
                      placeholder="Nhập tên sản phẩm"
                    />
                  </Form.Item>
                  <Form.Item
                    name="cataProduct"
                    rules={[
                      {
                        required: true,
                        message: "Please select your cata - product!",
                      },
                    ]}
                  >
                    <Select
                      mode="tags"
                      allowClear
                      style={{ width: "100%" }}
                      placeholder="Please select"
                      onChange={handleChangeCataInput}
                    >
                      {children.map((item) => (
                        <Option key={item}>{item}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="adressProduct"
                    rules={[
                      {
                        required: true,
                        message: "Please input your adressProduct!",
                      },
                    ]}
                  >
                    <Input
                      className="input-control"
                      prefix={
                        <EnvironmentOutlined className="site-form-item-icon" />
                      }
                      placeholder="Nhập địa chỉ của bạn"
                    />
                  </Form.Item>
                  <Form.Item
                    name="noteProduct"
                    rules={[
                      {
                        required: true,
                        message: "Please input your noteProduct!",
                      },
                    ]}
                  >
                    <TextArea
                      rows={4}
                      placeholder="Chú thích về sản phẩm của bạn"
                    />
                  </Form.Item>

                  <Form.Item>
                    <ImgCrop rotate>
                      <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChangeFileInput}
                        onPreview={onPreview}
                      >
                        {fileList.length < 6 && "+ Upload"}
                      </Upload>
                    </ImgCrop>
                  </Form.Item>
                  <Form.Item className="login-btn">
                    <Button
                      type="primary"
                      loading={loadCreatePost}
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Đăng bài
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </div>
      )}
    </postContext.Consumer>
  );
}
export default PostProduct;
