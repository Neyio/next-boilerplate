/**
 * Created by sndong on 2018/6/27.
 */
import React, {Component} from 'react'
import ReactImageGallery from './ReactImageGallery';
import "./image-gallery.css";
import "./index.less";
export default class ImageGallery extends Component {
    constructor(props){
        super(props);
        this.state = ({
           isShow:false
        })
    };
    handleClick(show=false){
        this.setState({
            isShow:show
        })
    }
    render () {
        const isFalse = false;
        const images = [
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
            {
                original: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg',
                thumbnail: 'https://wallhalla.com/thumbs/preview/v/vaDwJNrS7AE.jpg'
            },
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
            <div>
                <button onClick={this.handleClick.bind(this,true)}>展示</button>
                {this.state.isShow?<div className="global_thing_image_Gallery"><ReactImageGallery
                    items={images}
                    showNav
                    thumbnailPosition="bottom"
                    showPlayButton={isFalse}
                    showFullscreenButton={isFalse}
                    showIndex
                    showBullets /><div onClick={this.handleClick.bind(this,false)}>关闭</div></div>:null}
            </div>

        )
    }
}


