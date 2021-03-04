import React, { useState } from 'react';

// import axios from 'axios';
import 'antd/dist/antd.css';
import { Row, Col, Avatar, Modal, Tabs } from 'antd';
import {EnvironmentOutlined} from '@ant-design/icons';
import EditProfile from './EditProfile';
import EditPassword from './EditPassword';
import '../style/InforProfile.css';
function InforProfile(){
    const [visible, setVisible] = useState(false);
    const { TabPane } = Tabs;
    return (
        <div className="wrap">
            <Row className="h-infor">
                <Col span={8}  className="h-infor-col_8" >
                    <Avatar
                        size={200}
                        icon={<img  alt="infor - avatar"/>}
                    />
                </Col>
                <Col span={16} className="h-infor-col_16" >
                    <div className="infor">
                        <h2 className="i-name">Full Name</h2>
                        <div className="i-edit">
                            <span onClick={() => (setVisible(true))}>Edit Profile</span>
                            <Modal
                                title="Edit Profile"
                                centered
                                visible={visible}
                                onCancel={() => (setVisible(false))}
                                footer={null}
                                width={800}
                            >
                                <Tabs tabPosition={"left"}>
                                    <TabPane tab="Edit Profile" key="1">
                                        <EditProfile
                                            // user={this.state.user}
                                            // inputFullname = {this.state.fullName}
                                            // onChange={this.onChangeInputFullname}
                                            // onEdit={this.onEditProfile}
                                            // onChangeFile = {this.onChangeInputFile}
                                            // inputSelectFile = {this.state.inputFileSelect}
                                            // isEdit={this.state.isEdit}
                                        />
                                    </TabPane>
                                    <TabPane tab="Change Password" key="2">
                                        <EditPassword
                                            // user={this.state.user}
                                            // onChange={this.onChangeInputChangePass}
                                            // onEdit={this.onEditPassword}
                                            // isEdit={this.state.isEdit}
                                            // isChangePass={this.state.isChangePass}
                                            // inputVal = {this.state}
                                        />
                                    </TabPane>
                                </Tabs>
                            </Modal>
                            
                        </div>
                    </div>
                    <ul className="follow">
                        <li><span>0</span>Bài viết</li>
                        <li><span>0</span>Giao dịch</li>
                        <li><span>0</span>following</li>
                    </ul>
                    <h1 className="f-name"><EnvironmentOutlined style={{marginRight:'10px'}} /><span>Địa chỉ : </span>16 Nguyễn Quang Bích, p.13 Quận Tân Bình, Thành phố Hồ Chí Minh</h1>
                </Col>
            </Row>
        </div>
    );
}
export default InforProfile;