import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import Button from './Button.js'
import { getResource4, getResource5, getResource6 } from '../actions/index.js'

class Home2 extends Component {
	render() {
		const { num1, num2, num3, loading1, loading2, loading3, btnFunc1, btnFunc2, btnFunc3 } = this.props
		return (
			<div>
				<div>
					<span>{num1}</span>
					<Button
						text="loading num4"
						isPending={loading1}
						clickHandler={btnFunc1} />
				</div>
				<div>
					<span>{num2}</span>
					<Button
						text="loading num5"
						isPending={loading2}
						clickHandler={btnFunc2} />
				</div>
				<div>
					<span>{num3}</span>
					<Button
						text="loading num6"
						isPending={loading3}
						clickHandler={btnFunc3} />
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	num1: state.home2.num1,
	num2: state.home2.num2,
	num3: state.home2.num3,

	loading1: state.uiState.MY_ASYNC_4,
	loading2: state.uiState.MY_ASYNC_5,
	loading3: state.uiState.MY_ASYNC_6
})

const mapDispatchToProps = dispatch => ({
	btnFunc1: bindActionCreators(getResource4, dispatch),
	btnFunc2: bindActionCreators(getResource5, dispatch),
	btnFunc3: bindActionCreators(getResource6, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home2)
