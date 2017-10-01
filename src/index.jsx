import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/store'
import App from './containers/App'

import './assets/scss/font.scss'
import './assets/scss/reset.scss'
import './assets/scss/animate.scss'

const store = configureStore();


ReactDom.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)