import 'antd/dist/antd.css';
import { Table, Space, Button } from 'antd';
// import { UserOutlined, EllipsisOutlined, MessageOutlined, LikeOutlined } from '@ant-design/icons';



import '../style/Exchange.css'

function ExchangeRequest() {
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
      title: '',
      key: 'action',
      render: () => (
        
        <Space size="middle">
             <Button type="primary">
                Đồng ý
              </Button>
              <Button type="primary">
                Từ chối
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
      address: 'New York No. 1 Lake Park'
   
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
  ];
    return (
        <div className="ExchangeRequest">
            <div className="wrap">
                <div className="ex-title">
                    <h1>Các yêu cầu trao đổi</h1>
                </div>
                <div className="ex-table">
                    <Table columns={columns} dataSource={data} />
                </div>
            </div>
        </div>
    );
}
export default ExchangeRequest;
