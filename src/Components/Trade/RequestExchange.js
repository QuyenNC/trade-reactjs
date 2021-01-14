import 'antd/dist/antd.css';
import { Table, Space } from 'antd';
// import { UserOutlined, EllipsisOutlined, MessageOutlined, LikeOutlined } from '@ant-design/icons';



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
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <Space size="middle">
            <span>Hủy yêu cầu</span>
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
      status : 'Chờ xác nhận'
   
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      status : 'Xác nhận'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      status : 'Từ chối'
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
