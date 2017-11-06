import { combineReducers } from 'redux'

import home1 from './homeReducer1.js'
import home2 from './homeReducer2.js'
import uiState from './uiState.js'

const appStore = combineReducers({
	home1,
	home2,
	uiState
})

export default appStore
