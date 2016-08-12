'use strict';
import React from "react";
import ReactDOM from 'react-dom';
import LeftMenu from './leftmenu';
import MainContent from './maincontent';

class TopMenu extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				data: []
			};
			this.state = {
				num: 0

			};
			this.state = {
				source: "http://localhost:10001/menums/jmenu/getMenuByFathRid/m1"

			};

		}
		handleClick(i,t) {
			
			
                
			this.setState({
				source: "http://localhost:10001/menums/jmenu/getMenuByFathRid/"+t
			});
		}
		componentDidMount() {

			const self = this;
			fetch("http://localhost:10001/menums/jmenu/getMenuByFathRid/top").then(function(res) {

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

		render() {
				var source = this.state.source;

				var data = this.state.data || {};
				
				var newArry = [];
				for(var i = 0; i < data.length; i++) {
					var item = data[i].name;
					var t= data[i].id;
					newArry.push( < button onClick = {
							this.handleClick.bind(this,i,t)
						}
						key = {
							t
						} > {
							item
						} < /button>)
					}

					return( < div className = "repos-list" > {newArry} <
							LeftMenu source1 = {this.state.source}/> </div>)
						
						}
							
					}	
						
						

					

				

				export {
					TopMenu as
					default
				};