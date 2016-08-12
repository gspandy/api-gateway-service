'use strict';
import React from "react";
import ReactDOM from 'react-dom';
import MainContent from './maincontent';

class LeftMenu extends React.Component {

		constructor(props) {
			super(props);
			this.state = {
				data: []
			};
			this.state = {
				loading: true
			};
			this.state = {
				num1: 0
			};
			this.state = {
				
				address: "http://localhost:10001/pms/product/list/11"
			};
			
			
		}
		componentWillReceiveProps(nextProps) {
			 var source2 = this.props.source1;
			      this.setState({
                source2: nextProps.source2 
                });
                 
                 const self = this;
			fetch(source2).then(function(res) {
				
				if(res.ok) {
					
					res.json().then(function(obj) {
					
						self.setState({
							loading: false,
							data: obj,
						});
					})
				}
			}.bind(self), function(ex) {
				console.log(ex)
			}.bind(self));
        }
		


		componentDidMount(){
					
		   var source2 = this.props.source1;
		   
			 const self = this;
			fetch(source2).then(function(res) {
				
				if(res.ok) {
					
					res.json().then(function(obj) {
					
						self.setState({
							loading: false,
							data: obj,
						});
					})
				}
			}.bind(self), function(ex) {
				console.log(ex)
			}.bind(self));
		}
		 
		handleClick(j) {
			
			
		this.setState({address:map.get(j).toString()})
			
		}
		
       render() {
			var address = this.state.address;
			
		
			var data = this.state.data || {};
			
			var newArry1 = [];
			for(var j = 0; j < data.length; j++) {
                    var item = data[j].name;
            newArry1.push(<li onClick={this.handleClick.bind(this, j)} key = {j}>{item}</li>)}
						
		return(<div>
					<ul id="leftlist" >
					    {newArry1}
					</ul> 
					<MainContent address1={this.state.address}/>
					</div>
				);	 
					
			}		
						
		}			
					
					
		export {LeftMenu as default};		
			
		

		
			
			
		