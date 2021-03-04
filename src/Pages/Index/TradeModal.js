import "antd/dist/antd.css";
import { Modal, Alert } from "antd";
import { postContext } from "../../Context/PostContext";

const TradeModal = (props) => {
  const {
    item,
    isModalVisible,
    handleCancel,
    handleOk,
    handleChange,
    inputs,
    isTrade,
  } = props;
  const user = JSON.parse(localStorage.getItem("user"));
  let username = "";
  if (user !== null) {
    username = user.username;
  }
  return (
    <>
      <Modal
        visible={isModalVisible}
        onOk={handleOk(item)}
        onCancel={handleCancel}
        title="Yêu cầu trao đổi"
      >
        {isTrade === false ? (
          <Alert message="Vui lòng điền đầy đủ thông tin" type="error" />
        ) : (
          ""
        )}
        <select
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ddd",
          }}
          value={inputs.selectPost}
          name="selectPost"
          onChange={handleChange}
        >
          <option value="">Chọn bài viết của bạn</option>
          <postContext.Consumer>
            {({ postItems }) =>
              postItems
                .filter((item) => item.username === username)
                .map((item, index) => (
                  <option value={item._id} key={index}>
                    {item.title}
                  </option>
                ))
            }
          </postContext.Consumer>
        </select>
        <input
          type="text"
          value={inputs.addPost}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            marginTop: "15px",
            border: "1px solid #ddd",
          }}
          onChange={handleChange}
          placeholder="Nhập địa chỉ của bạn"
          name="addPost"
        />
        <button onClick={handleOk}>test</button>
      </Modal>
    </>
  );
};
export default TradeModal;
