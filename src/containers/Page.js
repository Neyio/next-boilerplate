// import Link from 'next/link'
import { connect } from 'react-redux'
import AddCount from './AddCount'
import React, { Component } from 'react'

class Page extends Component {
	render() {
		return (
			<div>
		
				<div>
					
					<AddCount></AddCount>
				</div>
				
			</div>
		)
	}
}

export default connect(state => state)(Page)
