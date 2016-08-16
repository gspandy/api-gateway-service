
import React from 'react'

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataa: [],
			loading: true,
			data: [],
			head: []
		};

	}
	componentWillReceiveProps(nextProps) {
        var address2 = nextProps.address1;
            fetch(address2).then((res) => {
			if(res)
				res.json().then((obj) => {
					console.log(obj);
					this.setState({
						dataa: obj,
						head: obj.head,
						data: obj.data,

					});
				});
		}, (ex) => {
			console.log(ex)
		});
	}

	componentDidMount() {
        var address2 = this.props.address1;
        fetch(address2).then((res) => {
        	console.log(res);
			if(res)
				res.json().then((obj) => {
					this.setState({
						dataa: obj,
						head: obj.head,
						data: obj.data

					});
				});
		}, (ex) => {
			console.log(ex)
		});
	}
	render() {
		 
        var tableData = this.state.dataa || {}
        var head = this.state.head;
		var data = this.state.data;
          return(
          	<table>
			  <TableHead head1 = {this.state.head}/>
			  <TableData data1 = {this.state.data}/> 
			  </table>
		)
	}
}
class TableData extends React.Component {
  render() {
    var data = this.props.data1;
		return( <tbody> {
				data.map((v, i) => {
					let td = [];
					for(var key in v) {
						if(key!="id"){
						td.push( <td key={key}>{v[key]}</td>)}
						}
					return(<tr key = {i}>{td} </tr>)
				})
			} 
			</tbody>
		)

	}

}

class TableHead extends React.Component {
	render() {
		var head2 = this.props.head1;
		return( <thead>
			<tr>{
				head2.map((v, i) => {
					if(v.position==0)return;
					return(<th key = {i} > {v.label} </th>)
				})
			}
           </tr> 
           </thead >
		)
	}
}
module.exports = Table;