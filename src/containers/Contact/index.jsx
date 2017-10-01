import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
import BackBtn from '../../components/Header/Back'
import UserList from '../../containers/UserList'

import './style.scss'

class Contact extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="contact" className="wrap">
                <div className="header-wrap">
                    <div className="header-left"><BackBtn/></div>
                    <Header/>
                    { this.props.match.params.readOnly === 'readOnly'?''
                    :<Link to='/addUser' className="header-right">add</Link>
                    }
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