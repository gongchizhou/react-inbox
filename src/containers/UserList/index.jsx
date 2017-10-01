import React from 'react'
import UserComponent from '../../components/UserComponent/index.jsx'
import { getUserData } from '../../fetch/index.jsx'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './style.scss'

class UserList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let rows = [];
        this.props.userData.forEach(function(item){
            rows.push(item.name.substring(0,1).toUpperCase());
        })
        rows = rows.filter(function(el,index,self){
            return self.indexOf(el) === index
        })
        return(
            <div className="user-list wrap">
                {
                    rows.length == 0?<div className="empty">nothing here</div>
                    :rows.map(function(rowsItem,index){
                        return <UserComponent key={index} rowsItem={rowsItem} user={this.props.userData} readOnly={this.props.readOnly} setAddress={this.props.setAddress}/>
                    }.bind(this))
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userData: state.userData
    }
}

function mapDispatchToProps(dispatch){
    return{
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserList)