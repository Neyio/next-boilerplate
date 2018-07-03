import React from 'react'

// import { connect } from 'react-redux'



export default class CommonHeader extends React.Component {
	static async getInitialProps() {
		
        cache = null
        console.log('data:' + typeof data)
		return { data: items }
	}
	constructor(props) {
        super(props)
        // console.log('header')
        // console.log(props)
		// this.state = {
		// 	params: JSON.parse(props.data)
		// }
	}
	//
	render() {
		return (
			<div>
                <span>common header</span>
				<div
					dangerouslySetInnerHTML={{
						__html: this.state.params.data.resourceString
					}}
				/>
				<div
					dangerouslySetInnerHTML={{
						__html: this.state.params.data.resourceStringExt
					}}
				/>
				<script
					type="text/javascript"
					src="//webresource.english.c-ctrip.com/res/concat?f=/resaresenglish/ibu/onlinecommon/3rdlib/requirejs/require.f2775311.js,/resaresenglish/ibu/onlinecommon/lib/cquery_110421.acd147fe.js,cquery_pro.bbc174a0.js,/resaresenglish/ibu/onlinecommon/ui/async_search_box_v2.e721c02d.js,/resaresenglish/ibu/onlinecommon/lib/cidate.def2a75a.js,cdatepicker.992beb83.js,/resaresenglish/ibu/onlinecommon/ui/address-1.0.4f8361b0.js"
				/>
			</div>
		)
	}
}


