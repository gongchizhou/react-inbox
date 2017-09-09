import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import BackBtn from '../../components/Header/Back/index.jsx'
import UserList from '../../containers/UserList/index.jsx'

import './style.scss'

class Contact extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="contact">
                <div className="header-wrap">
                    <div className="header-left"><BackBtn/></div>
                    <Header/>
                    <Link to='/userDetail' className="header-right">add</Link>
                </div>
                <UserList/>
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


export default connect(mapStateToProps,mapDispatchToProps)(Contact)