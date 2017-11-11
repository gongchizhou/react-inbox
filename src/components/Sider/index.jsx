import React from 'react'
import Profile from './Profile'
import {NavLink} from 'react-router-dom'

import './style.scss'

class Sider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navs: [
                {
                    filter:'inbox',
                    index:0
                },
                {
                    filter:'sent',
                    index:1
                },
                {
                    filter:'liked',
                    index:2
                },
                {
                    filter:'trash',
                    index:3
                },
            ],
            active: 0
        }
    }

    handleClick(arg){
        this.props.hideNav()
        this.props.setPageState(arg.filter);
        this.setState({
            active: arg.index
        })
    }

    render(){
        return(
            <div id="side-wrap">
                <Profile/>
                <ul className="nav">
                {
                    this.state.navs.map(function(item,index){
                        return <li key={index} onClick={this.handleClick.bind(this,item)}><a className={`${this.state.active==index?'active':''}`}>{item.filter}</a></li>
                    }.bind(this))
                }
                </ul>
            </div>
        )
    }
}


export default Sider