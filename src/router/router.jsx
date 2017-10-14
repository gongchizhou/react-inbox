import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'

import Home from '../containers/Home'
import Sent from '../containers/Sent'
import Trash from '../containers/Trash'
import Compose from '../containers/Compose'
import Contact from '../containers/Contact'
import Content from '../containers/Content'
import UserDetail from '../containers/UserDetail'
import AddUser from '../containers/Contact/AddUser'

class AppRouter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/liked' component={Home}/>
                    <Route path='/sent' component={Sent}/>
                    <Route path='/trash' component={Trash}/>
                    <Route path='/compose/:address?' component={Compose}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/content/:id' component={Content}/>
                    <Route path='/userDetail/:id' component={UserDetail}/>	
                    <Route path='/addUser' component={AddUser}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRouter