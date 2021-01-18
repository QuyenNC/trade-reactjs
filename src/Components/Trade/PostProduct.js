import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Upload} from 'antd';
import { TagsOutlined, EnvironmentOutlined} from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';


import '../style/PostProduct.css'

function PostProduct() {
    const { TextArea } = Input;
    const [fileList, setFileList] = useState([]);
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
    
      const onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
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
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        console.log(fileList);
      };
    return (
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
                                onFinish={onFinish}
                                >
                                <Form.Item
                                    name="nameProduct"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your name - product!',
                                    },
                                    ]}
                                >
                                    <Input className="input-control" prefix={<TagsOutlined   className="site-form-item-icon" />} placeholder="Nhập tên sản phẩm" />
                                </Form.Item>
                                <Form.Item
                                    name="adressProduct"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your adressProduct!',
                                    },
                                    ]}
                                >
                                    <Input className="input-control" prefix={<EnvironmentOutlined   className="site-form-item-icon" />} placeholder="Nhập địa chỉ của bạn" />
                                </Form.Item>
                                <Form.Item
                                    name="noteProduct"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your noteProduct!',
                                    },
                                    ]}
                                >
                                    <TextArea rows={4} placeholder="Chú thích về sản phẩm của bạn" />
                                </Form.Item>
                                
                                <Form.Item>
                                    <ImgCrop rotate>
                                        <Upload
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            listType="picture-card"
                                            fileList={fileList}
                                            onChange={onChange}
                                            onPreview={onPreview}
                                        >
                                            {fileList.length < 6 && '+ Upload'}
                                        </Upload>
                                        </ImgCrop>
                                </Form.Item>
                                <Form.Item className="login-btn">
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        Đăng bài
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default PostProduct;
