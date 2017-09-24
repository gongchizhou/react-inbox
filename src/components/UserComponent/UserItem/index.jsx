import React from 'react'
import {Link} from 'react-router-dom'

import './style.scss'

class UserItem extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        const email = this.props.item.email;
        this.props.setAddress(email);
    }

    render(){
        return(
            this.props.readOnly === 'readOnly'?
            <div className="item-wrap" onClick={this.handleClick.bind(this)}>
                <div className="user-item">
                    <div className="avatar">
                        <img src={this.props.item.imgUrl}/>
                    </div>
                    <div className="info">
                        <h6>{this.props.item.name}</h6>
                        <p>{this.props.item.email}</p>
                    </div>
                </div>
            </div>
            :<Link to={`/userDetail/${this.props.item.id}`}>
                <div className="item-wrap">
                    <div className="user-item">
                        <div className="avatar">
                            <img src={this.props.item.imgUrl}/>
                        </div>
                        <div className="info">
                            <h6>{this.props.item.name}</h6>
                            <p>{this.props.item.email}</p>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default UserItem