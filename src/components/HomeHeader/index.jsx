import React from 'react'
import Header from '../Header/index.jsx'
import MenuBtn from './MenuBtn/index.jsx'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as mailActionCreator from '../../actions/mailAction.jsx'

import './style.scss'

class HomeHeader extends React.Component{
    constructor(props){
        super(props);
    }

    handleClick(){
        this.props.showNav();
    }

    render(){
        return(
            <div className="header-wrap">
                <div className="header-left" onClick={this.handleClick.bind(this)}><MenuBtn/></div>
                <Header title='Inbox'/>
                <Link to='/contact' className="header-right">contacts</Link>
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
        mailAction: bindActionCreators(mailActionCreator,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeHeader)