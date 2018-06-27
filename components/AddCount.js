/* eslint-disable */
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addCount } from '../store'
import common from '../styles/common.less'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
class AddCount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }
  add = () => {
    this.props.addCount()
  }
  addnum = () => {
    this.setState({
      num: this.state.num + 1
    })
  } 
  render () {
    console.log('渲染')
    const { count } = this.props
    const images = [
      {
        original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
        thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
      },
      {
        original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
        thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
      }
    ]
    return (
      <div className={common.example}>
        <span>Num: {this.state.num}</span>
         <button onClick={() => this.addnum()}>+num</button>
        <h1 >AddCount: <span>{count}</span></h1>
        <button onClick={this.add}>Add To Count</button>
        <ImageGallery items={images} />
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count })

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCount)
