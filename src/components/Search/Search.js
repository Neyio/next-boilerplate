/**
 * Created by sndong on 2018/6/15.
 */
import React,{Component} from 'react';
import SearchList from './SearchList';
import './index.css'
export default class Search extends Component {
    constructor(props){
        super(props);
        this.state = ({
            recentlyView:[],
            theValue:"",
            recentlyShow:false,
            autoMatchItem:[],
            popularItem:[
                {
                    location:'上海',
                    country:'中国'
                },
                {
                    location:'北京',
                    country:'中国'
                },
                {
                    location:'纽约',
                    country:'美国'
                },
            ]
        });
        this.handleClickOutside.bind(this);
    };
    handleClick(item){
        //点击了之后，要加入缓存里,判断是否已经存在
        let recentlyViewStorage = JSON.parse(localStorage.getItem("recentlyViewItems"))||[];
        let isExist = recentlyViewStorage?recentlyViewStorage.find(
            function(x){
                return x.location === item.location;
            }
        ):false;
        if(!isExist){
            recentlyViewStorage.unshift(item);
            recentlyViewStorage.length = recentlyViewStorage.length>=5?5:recentlyViewStorage.length;//限制存储数量
            localStorage.setItem("recentlyViewItems", JSON.stringify(recentlyViewStorage));
        }
        this.setState({
            recentlyView:recentlyViewStorage,
            recentlyShow:false,
            theValue:item.location
        });
        this.handleSearch(item)
    }
    handleFocus(event){
        this.setState({
            recentlyShow:true
        });
    }
    handleChange(event){
        let value = event.target.value
        this.setState({
            theValue: value
        });
        this.handleFocus(event);
        this.methodAutoMatch(value)
    }
    //自动联想
    methodAutoMatch(value){
        let valueItems = [];
        if(value==='1'){
            valueItems =[
                {
                    location:'1山',
                    country:'中国'
                },
            ];
        }else if(value === '南'){
            valueItems =[
                {
                    location:'济南',
                    country:'中国'
                },
                {
                    location:'南京',
                    country:'中国'
                },
                {
                    location:'南宁',
                    country:'中国'
                },
            ];
        }else {
            valueItems = [
                {location: "上海", country: "中国"},
                {location: "南京", country: "中国"},
                {location: "苏州", country: "中国"},
                {location: "大阪", country: "日本"},
                {location: "东京", country: "日本"}
            ]
        }
        this.setState({
            autoMatchItem:valueItems,
        });
    }
    //点击清除
    handleClickClear(){
        this.setState({
            recentlyView:[],
            recentlyShow:false
        })
        localStorage.removeItem("recentlyViewItems");
    }
    handleClickOutside(){
        this.setState({
            recentlyShow:false
        })
    }
    //点击查询
    handleSearch(item){
        //点击搜索，判断
        if(this.state.theValue || item){
            //跳转到搜索结果页面
        }
    }
    componentDidMount(){
        this.setState({
            recentlyView:JSON.parse(localStorage.getItem("recentlyViewItems"))||[]
        })
    }
    render(){
        //require('./index.css');
        let SearchContent = (
            <div className="search-list position_ab w-400">
                {this.state.theValue?<SearchList handleClick={item => this.handleClick(item)} items={this.state.autoMatchItem}/>:RecentContent}
            </div>
        )
        let RecentContent =(
            <div>
            {this.state.recentlyView.length?<div>
                    <div>
                        <span className=" d_ib mr_10">Recent Searches</span>
                        <span className="cur_pointer" onClick={this.handleClickClear.bind(this)}>clear</span>
                    </div>
                    <SearchList handleClick={item => this.handleClick(item)} items={this.state.recentlyView}/>
                </div>:null}
                <div>
                    <span className=" d_ib mr_10">popular Destinations</span>
                </div>
                <SearchList handleClick={item => this.handleClick(item)} items={this.state.popularItem}/>
            </div>
        )
        return (
            <div className="position_rel">
                <input
                    onFocus={this.handleFocus.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    className="search-input floatl w-400"
                    value={this.state.theValue} placeholder="请输入地址"/>
                    <input type="button" onClick={this.handleSearch.bind(this)} className="search-button" value="查询"/>
                    {this.state.recentlyShow?SearchContent:null}
            </div>
        )
    }
}