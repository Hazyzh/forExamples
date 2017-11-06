const initState = {
	num1: 0,
	isPending1: false,
	num2: 0,
	isPending2: false,
	num3: 0,
	isPending3: false
}

const home1 = (state = initState, action) => {
	switch (action.type) {

		case 'MY_ASYNC_1_PENDING':
			return { ...state, isPending1: true }
		case 'MY_ASYNC_1_FULFILLED':
			return { ...state, num1: action.payload, isPending1: false }
		case 'MY_ASYNC_1_REJECTED':
			return { ...state, isPending1:false }

		case 'MY_ASYNC_2_PENDING':
			return { ...state, isPending2: true }
		case 'MY_ASYNC_2_FULFILLED':
			return { ...state, num2: action.payload, isPending2: false }
		case 'MY_ASYNC_2_REJECTED':
			return { ...state, isPending2:false }

		case 'MY_ASYNC_3_PENDING':
			return { ...state, isPending3: true }
		case 'MY_ASYNC_3_FULFILLED':
			return { ...state, num3: action.payload, isPending3: false }
		case 'MY_ASYNC_3_REJECTED':
			return { ...state, isPending3:false }

		default:
			return state
	}
}

export default home1
