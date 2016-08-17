/**
 * Created by pc on 2016/8/12.
 *
 */
import React from 'react'
import Table from './table'


class Menu extends React.Component{


    constructor(props) {
        super(props);
        this.state={
            "left":[],
            "top":[]
        }
    }

    handleClick=(data)=>{
        this.setState({"left":data});
    };
    componentDidMount() {
            fetch("http://192.168.0.133:10001/menums/menu/mainMenu").then((res) => {
            	console.log(res);
				if(res)
					res.json().then((obj) => {
						this.setState({
							left:obj[0].childJmenu,
							top: obj
						});
					});
			}, (ex) => {
				console.log(ex)
			});
		}

    render(){
        var top = this.state.top;
        console.log(top);
        return(
            <div id="list">
                <div id="top">
                    <Top top={top} handleClick={this.handleClick}/>
                </div>
                <div id="content">
                    <Left left={this.state.left}/>
                </div>
            </div>
        )
    }
}

class Top extends React.Component{

    handleClick=(e)=>{
        this.props.handleClick(e);
    };

    render(){
        var {top}=this.props;
        return (
            <ul style={{"listStyle":"none"}}>
                {
                    top.map((v, i)=> {
                        return <li key={i} ><a  href="javascript:void (0)" onClick={(children)=>this.handleClick(v.childJmenu)}>{v.name}</a></li>
                    })
                }
         </ul>
        );
    }
}


class Left extends React.Component{
	constructor(props) {
        super(props);
        this.state={
            address: "http://192.168.0.133:10001/pms/product/list/10 "
            
        }
    }
	   handleClick=(url)=>{
	   	console.log(url);
	   	this.setState({
						address: url	
							
						});
	   	
	   }
    render() {
        var {left}=this.props;
        return (
        	<div id="leftlist">
        	
            <ul  >
                {
                    left.map((v, i)=> {
                        return (
                            <li key={i}>
                                <a  id={v.id} href="javascript:void (0)" onClick={(url)=>this.handleClick(v.url)}>{v.name}</a>
                                <ul   id="leftthree" >
                                    {
                                        v.childJmenu.map((v,i)=>{
                                            return (
                                                <li key={i}><a  id={v.id} href="javascript:void (0)" onClick={(url)=>this.handleClick(v.url)}>{v.name}</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
                    <div className="rightContent">
                    <Table address1 = {this.state.address}/>
                </div>

            </div>
        )
    }
}



module .exports=Menu;