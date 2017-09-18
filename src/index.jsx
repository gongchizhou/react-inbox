import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import configureStore from './store/store.jsx'
import App from './containers/App.jsx'
import Home from './containers/Home/index.jsx'
import Compose from './containers/Compose/index.jsx'
import Contact from './containers/Contact/index.jsx'
import Content from './containers/Content/index.jsx'
import UserDetail from './containers/UserDetail/index.jsx'

import './assets/scss/font.scss'
import './assets/scss/reset.scss'

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
				</App>
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)