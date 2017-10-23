import React from 'react'
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom'

import App from '../containers/App'
import Home from '../containers/Home'
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
            <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/liked' component={Home}/>
                        <Route path='/sent' component={Home}/>
                        <Route path='/trash' component={Home}/>
                        <Route path='/compose/:address?' component={Compose}/>
                        <Route path='/contact' component={Contact}/>
                        <Route path='/content/:id' component={Content}/>
                        <Route path='/userDetail/:id' component={UserDetail}/>	
                        <Route path='/addUser' component={AddUser}/>
                    </Switch>
            </HashRouter>
        )
    }
}

export default AppRouter