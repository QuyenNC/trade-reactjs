import 'antd/dist/antd.css';
import { Table, Tag, Button, Space } from 'antd';

import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';



import '../style/Exchange.css'

function RequestExchange() {
    const columns = [
    {
      title: 'Sản phẩm',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Mã giao dịch',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Sản phẩm trao đổi',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <>
          {status.map(status => {
            let color = status === 'xác nhận'  ? 'success' : 'error';
            let icon = status === 'xác nhận'  ? <CheckCircleOutlined /> : <CloseCircleOutlined />;
            if (status === 'chờ xác nhận') {
              color = 'processing';
            }
            if (status === 'chờ xác nhận') {
              icon = <SyncOutlined spin />;
            }
            return (
              <Tag color={color} key={status} icon={icon}>
                {status.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <Space size="middle">
             <Button type="primary">
                Hủy yêu cầu
              </Button>
        </Space>
      ),
    },

  ];   
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      status : ['chờ xác nhận']
   
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      status : ['xác nhận']
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      status : ['từ chối']
    },
  ];
    return (
        <div className="RequestExchange">
            <div className="wrap">
                <div className="ex-title">
                    <h1>Các yêu cầu đã gửi</h1>
                </div>
                <div className="ex-table">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </div>
    );
}
export default RequestExchange;
