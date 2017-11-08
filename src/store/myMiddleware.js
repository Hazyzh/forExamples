export const STATEMACHINE = Symbol('ASYNC_STATE_MACHINE');

const isPromise = (value) => {
	if (value !== null && typeof value === 'object') {

		return value && typeof value.then === 'function';
	}

	return false;
}

export default store => next => action => {

	if (!action.payload) {
		return next(action)
	} else if (!isPromise(action.payload) && !isPromise(action.payload.promise)) {

		return next(action)
	}

	const { type, payload } = action;

	let promise
	if (!isPromise(action.payload) && typeof action.payload === 'object') {
		promise = payload.promise;
	} else {
		promise = payload;
	}

	const getStateAction = isFetching => ({
		type: STATEMACHINE,
		actionType: type,
		isFetching
	});

	next(getStateAction(true))

	const changeStateAction = res => {
		next(getStateAction(false))
		return res
	}

	promise.then(changeStateAction, changeStateAction)

	next(action)
}
