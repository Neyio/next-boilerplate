/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css

You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/

import Document, { Head, Main, NextScript } from 'next/document'

import axios from 'axios'
import '../src/styles/index.less'
export default class MyDocument extends Document {
	static async getInitialProps(...args) {
		const documentProps = await super.getInitialProps(...args)
		return {
			...documentProps
		}
	}
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<html>
				<Head>
					<link
						rel="SHORTCUT ICON"
						href="/static/imgs/trip.ico"
						type="image/x-icon"
					/>
					<link rel="ICON" href="/static/imgs/trip.ico" />

					<link rel="stylesheet" href="/_next/static/style.css" />
				</Head>
				<body>
					<Main />

					<NextScript />
				</body>
			</html>
		)
	}
}
