import React from 'react'
import UserItem from './UserItem'
import './style.scss'

class UserComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="initial">{this.props.rowsItem}</div>
                    {
                        this.props.user.map(function(item,index){
                            if(item.name.substring(0,1).toUpperCase() === this.props.rowsItem){
                                return <UserItem key={index} item={item} readOnly={this.props.readOnly} setAddress={this.props.setAddress}/>
                            }
                        }.bind(this))
                    }
            </div>
        )
    }
}

export default UserComponent
