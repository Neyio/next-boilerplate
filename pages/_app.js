import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../src/stores/createStore'

export default withRedux(initStore)(
	class MyApp extends App {
		static async getInitialProps({ Component, ctx }) {
			let { userAgent } = ctx.query
			console.log('mobile:' + userAgent)
			return {
				pageProps: Component.getInitialProps
					? await Component.getInitialProps(ctx)
					: {}
			}
		}

		render() {
			const { Component, pageProps, store } = this.props
			return (
				<Container>
					<Provider store={store}>
						<Component {...pageProps} />
					</Provider>
				</Container>
			)
		}
	}
)
