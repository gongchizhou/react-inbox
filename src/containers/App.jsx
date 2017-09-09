import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as mailActionCreator from '../actions/mailAction.jsx'

class App extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <div>
               {this.props.children}
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

export default connect(mapStateToProps,mapDispatchToProps)(App)