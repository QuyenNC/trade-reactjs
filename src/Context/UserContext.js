// import React,{ useState, useEffect } from 'react';

// import axios from 'axios';

// export const userContext = React.createContext();

// export function UserProvider({ children }){
//     const [postItems,setPostItems] = useState([]);// state lưu dữ liệu bài viết
//     const token = localStorage.getItem('token');
//     if(token){
//     //lấy dữ liệu của các bài viết
//     useEffect(() => {
//         const url ="/api/post";
//         axios.get(url)
//         .then(function(res){
//             setPostItems(res.data.success.posts);
//         })
//     },[]);
//     //end post
//     }
     


//     //end commet
//     return (
//         <userContext.Provider value={{postItems}}>
//             { children }
//         </userContext.Provider>
//     );
// }


