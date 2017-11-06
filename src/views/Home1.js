import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

import Button from './Button.js'
import { getResource1, getResource2, getResource3 } from '../actions/index.js'

class Home1 extends Component {
	render() {
		const { num1, num2, num3, loading1, loading2, loading3, btnFunc1, btnFunc2, btnFunc3 } = this.props
		return (
			<div>
				<div>
					<span>{num1}</span>
					<Button
						text="loading num1"
						isPending={loading1}
						clickHandler={btnFunc1} />
				</div>
				<div>
					<span>{num2}</span>
					<Button
						text="loading num2"
						isPending={loading2}
						clickHandler={btnFunc2} />
				</div>
				<div>
					<span>{num3}</span>
					<Button
						text="loading num3"
						isPending={loading3}
						clickHandler={btnFunc3} />
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({
	num1: state.home1.num1,
	num2: state.home1.num2,
	num3: state.home1.num3,

	loading1: state.home1.isPending1,
	loading2: state.home1.isPending2,
	loading3: state.home1.isPending3
})

const mapDispatchToProps = dispatch => ({
	btnFunc1: bindActionCreators(getResource1, dispatch),
	btnFunc2: bindActionCreators(getResource2, dispatch),
	btnFunc3: bindActionCreators(getResource3, dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home1)
