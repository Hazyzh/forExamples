import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import store from './store'

import Home1 from './views/Home1.js'
import Home2 from './views/Home2.js'

class MiddleWare extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Home1 />
					<hr />
					<Home2 />
				</div>
			</Provider>
		)
	}
}

export default MiddleWare
