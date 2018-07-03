import {Component} from 'react'
import Error from 'next/error'

export default class ErrorPage extends Component {
    static async getInitialProps({ctx}) {
        // console.log(ctx)
        return {
            status : ctx
        }
    }
    render() {
        return (
            <div>404</div>
        )
    }

}