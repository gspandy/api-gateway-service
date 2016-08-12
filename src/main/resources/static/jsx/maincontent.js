'use strict';
import React from "react";
    class MainContent extends React.Component {
        constructor(props) {
          super(props);
          this.state = {data: []};
          this.state = {loading: true};
          
       }  
       componentWillReceiveProps(nextProps) {
       	  var address2 = this.props.address1;
			   this.setState({
                address2: nextProps.address2 
                });
                 const self = this;
			fetch(address2).then(function(res) {
				
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
					
		    var address2 = this.props.address1;
		 	
			 const self = this;
			fetch(address2).then(function(res) {
				
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
    	     
    	     
          
        if(this.state.loading) {
        	
            return <p className="tc">loading...</p>;
          }

            var data = this.state.data || {},
            
           
            reposList = data.map(function(item, index, arr) {
           
                  	return (
                <tr key={index}>
                               <td>{item.serial}</td>
                               <td>{item.name}</td>
                               <td>{item.color}</td>
                               <td>{item.marketPrice}</td>
                               
                </tr>
                )
              })
        return (
          <table id="main">
                	 <tbody>
                	 	<tr>
                	 		<th>数据</th>
                	 		<th>类型</th>
                	 		<th>编号</th>
                	 		<th>价格</th>
                	 	</tr>
                	 	{reposList}
                	 </tbody>
                </table>
           
        );
    }
	
}
export {MainContent as default};
