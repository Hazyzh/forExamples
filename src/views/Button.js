import React from 'react'
import PropTypes from 'prop-types'

const Button = ( { text, isPending, clickHandler } ) =>
	<button
		disabled={isPending}
		className={ !isPending ? 'btn-waiting' : 'btn-loading' }
		onClick={clickHandler} >
		{text}
	</button>


Button.propTypes = {
	text: PropTypes.string.isRequired,

	isPending: PropTypes.any,

	clickHandler: PropTypes.func.isRequired
}

export default Button
