import React from 'react'
import Profile from './Profile'
import {NavLink} from 'react-router-dom'

import './style.scss'

class Sider extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        this.props.hideNav()
    }

    render(){
        return(
            <div id="side-wrap">
                <Profile/>
                <ul className="nav">
                    <li onClick={this.handleClick.bind(this)}><NavLink exact={true} to='/' activeClassName='active'>Inbox</NavLink></li>
                    <li onClick={this.handleClick.bind(this)}><NavLink to='/sent' activeClassName='active'>Sent</NavLink></li>
                    <li onClick={this.handleClick.bind(this)}><NavLink to='/liked' activeClassName='active'>Liked</NavLink></li>
                    <li onClick={this.handleClick.bind(this)}><NavLink to='/trash' activeClassName='active'>Trash</NavLink></li>
                </ul>
            </div>
        )
    }
}


export default Sider