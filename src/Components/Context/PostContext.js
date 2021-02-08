import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { message } from "antd";
import axios from "axios";

export const postContext = React.createContext();

export function PostProvider({ children }) {
  const [postItems, setPostItems] = useState([]); // state lưu dữ liệu bài viết
  const [cmtValue, setCmtValue] = useState(""); // state lưu dữ liệu bài viết
  const [fileList, setFileList] = useState([]); //state list image
  const [cataList, setCataList] = useState([]); //state danh mục sản phẩm
  const [loadCreatePost, setLoadCreatePost] = useState(false); //state load button đăng bài
  const [dataFilter, setDataFilter] = useState([]);
  //lấy dữ liệu của các bài viết
  useEffect(() => {
    const url = "/api/post";
    axios.get(url).then(function (res) {
      setPostItems(res.data.success.posts);
      setDataFilter(res.data.success.posts);
    });
  }, []);
  //end post

  //search post
  const searchPost = (e) => {
    if (e.target.value === "") {
      setDataFilter(postItems);
      return;
    } else {
      let dataFilter = postItems.filter(
        (item) =>
          item.title.toUpperCase().indexOf(e.target.value.toUpperCase()) !== -1
      );
      setDataFilter(dataFilter);
    }
  };
  //end search post

  //post filter
  const filterPost = (content) => {
    return () => {
      if (content === "") {
        setDataFilter(postItems);
        return;
      } else {
        let dataFilter = postItems.filter(
          (item) =>
            item.cata
              .toString()
              .toUpperCase()
              .indexOf(content.toUpperCase()) !== -1
        );
        setDataFilter(dataFilter);
      }
    };
  };
  //end post filter

  // đăng bài

  const onChangeFileInput = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const handleChangeCataInput = (value) => {
    setCataList(value);
  };
  const onFinishCreatPost = (values) => {
    const token = localStorage.getItem("token");
    setLoadCreatePost(true);
    const formData = new FormData();
    for (let i = 0; i < fileList.length; i++) {
      formData.append(`img`, fileList[i].originFileObj);
    }
    formData.append("cataPro", cataList);
    formData.append("title", values.nameProduct);
    formData.append("address", values.adressProduct);
    formData.append("noteProduct", values.noteProduct);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "auth-token": `${token}`,
      },
    };
    const url = "/api/post/create";
    axios.post(url, formData, config).then((res) => {
      if (res.data.errors) {
        localStorage.removeItem("token");
        setLoadCreatePost(false);
        return message.error(res.data.errors.msg);
      } else {
        setLoadCreatePost(false);
        setFileList([]);
        setPostItems(res.data.success.posts);
        setDataFilter(res.data.success.posts);
        return message.success(res.data.success.msg);
      }
    });
  };
  //end create post
  //xóa bài viết
  const onDeletePost = (item) => {
    return () => {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "auth-token": `${token}`,
        },
      };
      const url = `/api/post/deletePost/${item._id}`;
      axios.post(url, item, config).then((res) => {
        if (res.data.errors) {
          localStorage.removeItem("token");
          return message.error(res.data.errors.msg);
        } else {
          const index = dataFilter.indexOf(item);
          dataFilter.splice(index, 1);
          setDataFilter([...dataFilter]);
          return message.success(res.data.success.msg);
        }
      });
    };
  };

  //end xóa bài viết
  //like bài viết
  const likePost = (item) => {
    return () => {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "content-type": "multipart/form-data",
          "auth-token": `${token}`,
        },
      };
      const url = `/api/post/${item._id}/like`;
      axios.post(url, { item }, config).then((res) => {
        if (res.data.errors) {
          return message.error(res.data.errors.msg);
        } else {
          const index = dataFilter.indexOf(item);
          const user = JSON.parse(localStorage.getItem("user"));
          const userExit = dataFilter[index].like.find(
            (like) => like.username === user.username
          );
          if (!userExit) {
            setDataFilter([
              ...dataFilter.slice(0, index),
              {
                ...item,
                like: [...dataFilter[index].like, { username: user.username }],
              },
              ...dataFilter.slice(index + 1),
            ]);
          } else {
            const indexUserExit = dataFilter[index].like.indexOf(userExit);
            dataFilter[index].like.splice(indexUserExit, 1);
            setDataFilter([
              ...dataFilter.slice(0, index),
              {
                ...item,
                like: [...dataFilter[index].like],
              },
              ...dataFilter.slice(index + 1),
            ]);
          }
        }
      });
    };
  };
  //end like
  //comment bài viết
  const handleChangeCmt = (event) => setCmtValue(event.target.value);

  const handleSubmitComment = (item) => {
    return (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "auth-token": `${token}`,
        },
      };
      const url = `/api/post/${item._id}/comment`;
      axios.post(url, { text: cmtValue }, config).then((res) => {
        if (res.data.errors) {
          return message.error(res.data.errors.msg);
        } else {
          const posts = dataFilter;
          const user = JSON.parse(localStorage.getItem("user"));
          const index = dataFilter.indexOf(item);
          setDataFilter([
            ...dataFilter.slice(0, index),
            {
              ...item,
              comment: [
                {
                  username: user.username,
                  text: cmtValue,
                },
                ...posts[index].comment,
              ],
            },
            ...dataFilter.slice(index + 1),
          ]);
          setCmtValue("");
        }
      });
    };
  };

  //end commet
  return (
    <postContext.Provider
      value={{
        postItems,
        likePost,
        handleSubmitComment,
        handleChangeCmt,
        cmtValue,
        onFinishCreatPost,
        onChangeFileInput,
        handleChangeCataInput,
        loadCreatePost,
        fileList,
        onDeletePost,
        filterPost,
        dataFilter,
        searchPost,
      }}
    >
      {children}
    </postContext.Provider>
  );
}
