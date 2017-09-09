import React from 'react'
import Profile from './Profile.jsx'
import Nav from './Nav.jsx'

import './style.scss'

class Sider extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="side-wrap">
                <Profile/>
                <Nav/>
            </div>
        )
    }
}


export default Sider