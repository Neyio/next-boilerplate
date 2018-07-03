/**
 * Created by sndong on 2018/6/15.
 */
import React,{Component} from 'react';
export default class RotationMap extends Component{
    constructor(props){
        super(props);
    };
    handleClick(item){
        this.props.handleClick(item);
    }
    render(){
        let ListContent = this.props.items?this.props.items.map((item,index)=>{
            return (
                <div key={index} onMouseDown={this.handleClick.bind(this,item)} className="cur_pointer">
                    <span className="d_ib mr_10 p-0-10">{item.location}</span>
                    {item.country}
                </div>
            )
        }):null;
        return(<div className="search-list w-400">{ListContent}</div>)
    }

}