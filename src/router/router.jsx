import React from 'react'
import {HashRouter,Route,Switch} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import App from '../containers/App'
import Home from '../containers/Home'
import Compose from '../containers/Compose'
import Contact from '../containers/Contact'
import Content from '../containers/Content'
import UserDetail from '../containers/UserDetail'
import AddUser from '../containers/Contact/AddUser'

import './style.scss'

const Fade = ({ children, props }) => (
    <CSSTransition
      timeout={1000}
      classNames="switch"
    >
      {children}
    </CSSTransition>
  );

class AppRouter extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <HashRouter>
                <Route render={({ location }) => (  
                    <div className="fill">
                        <Route exact path='/' component={Home}/>
                        <TransitionGroup>
                            <Fade>
                                <Route location={location} path='/compose/:address?' component={Compose}/>
                            </Fade>
                            <Fade>
                                <Route location={location} path='/contact' component={Contact}/>
                            </Fade>
                            <Fade>
                                <Route location={location} path='/content/:id' component={Content}/>
                            </Fade>
                            <Fade>
                                <Route location={location} path='/userDetail/:id' component={UserDetail}/>	
                            </Fade>
                            <Fade>
                                <Route location={location} path='/addUser' component={AddUser}/>
                            </Fade>
                        </TransitionGroup>
                    </div>
                )}/>
            </HashRouter>
        )
    }
}

export default AppRouter