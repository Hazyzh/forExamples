

const getPromise = n => new Promise((r, j) => {
	setTimeout(() => r((n + Math.random()).toFixed(2)), 1000)
})

// old
export const getResource1 = n => ({
	type: 'MY_ASYNC_1',
	payload: {
		promise: getPromise(1)
	}
})

export const getResource2 = n => ({
	type: 'MY_ASYNC_2',
	payload: {
		promise: getPromise(2)
	}
})

export const getResource3 = n => ({
	type: 'MY_ASYNC_3',
	payload: {
		promise: getPromise(3)
	}
})

// use type
export const getResource4 = n => ({
	type: 'MY_ASYNC_4',
	payload: {
		promise: getPromise(4)
	}
})

export const getResource5 = n => ({
	type: 'MY_ASYNC_5',
	payload: {
		promise: getPromise(5)
	}
})

export const getResource6 = n => ({
	type: 'MY_ASYNC_6',
	payload: {
		promise: getPromise(6)
	}
})
