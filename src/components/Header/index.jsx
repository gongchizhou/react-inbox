import React from 'react'
import Bar from './Bar/status_bar.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as mailActionCreator from '../../actions/mailAction.jsx'

import './style.scss'

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="header">
                <Bar/>
                <div>
                    <h2>{ this.props.title }</h2>
                </div>
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


export default connect(mapStateToProps,mapDispatchToProps)(Header)