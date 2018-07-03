import React from 'react'
import { bindActionCreators } from 'redux'
import {  addCount  } from '../src/actions/counter'
import { connect } from 'react-redux'
import Page from '../src/containers/Page'

class Counter extends React.Component {
  static getInitialProps ({ 
    store, 
    isServer }) {
    return { isServer }
  }

  componentDidMount () {

  }

  componentWillUnmount () {
  }

  render () {
    return (
      <Page title='Other Page' linkTo='/' />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(Counter)
