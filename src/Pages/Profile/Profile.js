import React, { useState } from 'react';
import {Redirect, useParams} from "react-router-dom";
import InforProfile from './InforProfile';
import PostProfile from './PostProfile';
function Profile(){
    const token = localStorage.getItem('token');
  let isLoginStt = true;
  
  if(token == null){
    isLoginStt = false
  }
  let { slug } = useParams();
  console.log(slug);
  const [isLogin ] = useState(isLoginStt);
    if(isLogin === false){
        return <Redirect to="login"/>;
      }
    return (
        <div className="Profile">
            <InforProfile />
            <PostProfile />
        </div>
    );
    
}

export default Profile;