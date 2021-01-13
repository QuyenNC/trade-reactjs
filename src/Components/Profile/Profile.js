import React,{Component} from 'react';

import InforProfile from './InforProfile';
import PostProfile from './PostProfile';
import Footer from '../Footer'
class Profile extends Component {
    render(){
        return (
            <div className="Profile">
                <InforProfile />
                <PostProfile />
                <Footer />
            </div>
        );
    }
}

export default Profile;