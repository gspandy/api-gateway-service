/*         if(i == 0) {
				this.setState({source:"mock/tree.json"});
			}		
			if(i == 1) {
                 this.setState({source:"mock/data.json"});
			}
			if(i == 2) {	
				this.setState({source:"mock/tree.json"});
			}*/	
	/**
	 * get data of api uri from server
	 **/
	
const map = new Map();
map.set(0,"http://192.168.0.133:10001/viewMS/view/mList");
map.set(1,"mock/tree.json");
map.set(2,"http://192.168.0.133:10001/viewMS/view/mList");
const mapchild = new Map();
mapchild.set(0,"mock/trip.json");
mapchild.set(1,"mock/showHomework.json");
mapchild.set(2,"mock/showLogs.json");

