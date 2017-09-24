import React from 'react'
import { getUserData } from '../fetch/index.jsx'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as mailActionCreator from '../actions/mailAction.jsx'
import * as userActionCreator from '../actions/userAction.jsx'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){
        const res = getUserData();
        res.then((res) => {
            return res.json();
        }).then((json) => {
            if(this.props.userData && this.props.userData.length>0){
                return
            }else{
                this.props.userAction.initUserData(json.item);
            }
            this.setState({
                isLoading: false
            })
        }).catch((ex) => {
            console.log(ex)
        })
    }

    render(){
        return(
            <div>
               {   this.state.isLoading
                   ?<div className="empty"><span className="loading-ani"></span></div>
                   :this.props.children
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
        userAction: bindActionCreators(userActionCreator,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)