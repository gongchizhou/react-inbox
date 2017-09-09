import React from 'react'
import {connect} from 'react-redux'
import UserComponent from '../../components/UserComponent/index.jsx'
import { getUserData } from '../../fetch/index.jsx'

import './style.scss'

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
    }

    componentDidMount(){
        const res = getUserData();
        res.then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                user: json.item
            })
        }).catch((ex) => {
            console.log(ex)
        })
    }

    render(){
        let rows = [];
        this.state.user.forEach(function(item){
            rows.push(item.name.substring(0,1).toUpperCase());
        })
        rows = rows.filter(function(el,index,self){
            return self.indexOf(el) === index
        })
        return(
            <div className="user-list">
                {
                    rows.map(function(rowsItem,index){
                        return <UserComponent key={index} rowsItem={rowsItem} user={this.state.user}/>
                    }.bind(this))
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        mailReducer: state.mailReducer
    }
}

function mapDispatchToProps(dispatch){
    return{
        
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(UserList)