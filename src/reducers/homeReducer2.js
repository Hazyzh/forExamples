const initState = {
	num1: 0,
	num2: 0,
	num3: 0,
}

const home2 = (state = initState, action) => {
	switch (action.type) {

		case 'MY_ASYNC_4_FULFILLED':
			return { ...state, num1: action.payload }

		case 'MY_ASYNC_5_FULFILLED':
			return { ...state, num2: action.payload }

		case 'MY_ASYNC_6_FULFILLED':
			return { ...state, num3: action.payload }

		default:
			return state
	}
}

export default home2
