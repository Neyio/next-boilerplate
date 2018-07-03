/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css

You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/

import Document, { Head, Main, NextScript } from 'next/document'

import axios from 'axios'
export default class MyDocument extends Document {
	static async getInitialProps(...args) {
		const documentProps = await super.getInitialProps(...args)
		let params = {
			env: 'fat8',
			method: 'GET',
			formId: 'testform',
			htmlTemplatesVersion: 'C',
			htmlTemplatesType: 'PublicBoth',
			options:
				'{"acceptlanguage":"en-US","showlanguage":"1","showallmenu":"1","showloginauto":"1","showheadline":"1","showfootline":"1","simplehead":"0"}',
			myHtml: 'String',
			head: {
				group: 'trip',
				site: 'EN',
				channel: 'home',
				language: 'String',
				source: 'String',
				currency: 'CNY',
				paymentCurrency: 'String',
				uid: 'String',
				ip: '51.0.0.0',
				deviceID: 'String',
				version: 'String',
				isQuickBooking: 0,
				clientID: 'String',
				token: 'String',
				tokenValidTime: 'String',
				apiKey: 'String',
				clientSign: 'String',
				clientSignTime: 0,
				serviceCode: 'String',
				locale: 'en_us',
				osVersion: 'String',
				deviceBrand: 'String',
				deviceModel: 'String',
				ticket: 'String'
			}
		}
		let header = {
			ContentType: 'application/json'
		}
		//
		// let data = await axios.post(
		// 	'http://webapi.soa.ctripcorp.com/api/13496/json/GetCommonHtml',
		// 	params,
		// 	header
		// )
		// var cache = []
		// let items = JSON.stringify(data, function(key, value) {
		// 	if (typeof value === 'object' && value !== null) {
		// 		if (cache.indexOf(value) !== -1) {
		// 			return
		// 		}
		// 		cache.push(value)
		// 	}
		// 	return value
		// })
		// console.log(items)
		return {
			...documentProps,
			// CommonComponents: items
		}
	}
	constructor(props) {
		super(props)

		// let CommonComponents = JSON.parse(this.props.CommonComponents)
		// this.state = {
		// 	commonHeader: CommonComponents.data.resourceString || '',
		// 	commonFooter: CommonComponents.data.resourceStringExt || ''
		// }
	}
	render() {
		// const { commonHeader, commonFooter } = this.state

		return (
			<html>
				<Head>
					<link
						rel="SHORTCUT ICON"
						href="/static/imgs/trip.ico"
						type="image/x-icon"
					/>
					<link rel="ICON" href="/static/imgs/trip.ico" />
					<link
						rel="stylesheet"
						type="text/css"
						href="//webresource.english.c-ctrip.com/res/concat?f=/resaresenglish/ibu/fe-common/css/global-s.9563250d.css,/resaresenglish/ibu/fe-home/css/home-s.888adb60.css"
					/>
					<link rel="stylesheet" href="/_next/static/style.css" />
				</Head>
				<body>
					{/* <CommonHeader></CommonHeader> */}
					{/* <div
						dangerouslySetInnerHTML={{
							__html: commonHeader
						}}
					/> */}
					<Main />
					{/* <div
						dangerouslySetInnerHTML={{
							__html: commonFooter
						}}
					/> */}
					{/* <script
						type="text/javascript"
						src="//webresource.english.c-ctrip.com/res/concat?f=/resaresenglish/ibu/onlinecommon/3rdlib/requirejs/require.f2775311.js,/resaresenglish/ibu/onlinecommon/lib/cquery_110421.acd147fe.js,cquery_pro.bbc174a0.js,/resaresenglish/ibu/onlinecommon/ui/async_search_box_v2.e721c02d.js,/resaresenglish/ibu/onlinecommon/lib/cidate.def2a75a.js,cdatepicker.992beb83.js,/resaresenglish/ibu/onlinecommon/ui/address-1.0.4f8361b0.js"
					/> */}
					<NextScript />
				</body>
			</html>
		)
	}
}
