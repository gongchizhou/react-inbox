import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import configureStore from './store/store'
import App from './containers/App'
import Home from './containers/Home'
import Compose from './containers/Compose'
import Contact from './containers/Contact'
import Content from './containers/Content'
import UserDetail from './containers/UserDetail'
import AddUser from './containers/Contact/AddUser'

import './assets/scss/font.scss'
import './assets/scss/reset.scss'
import './assets/scss/animate.scss'

const store = configureStore();

ReactDom.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<App>
					<Route exact path='/' component={Home}/>
					<Route path='/compose/:address?' component={Compose}/>
					<Route path='/contact' component={Contact}/>
					<Route path='/content/:id' component={Content}/>
					<Route path='/userDetail/:id' component={UserDetail}/>	
					<Route path='/addUser' component={AddUser}/>	
				</App>
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)