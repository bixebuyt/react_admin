import React, { Component } from 'react';
import AsideInfoUser from './aside_Info_User';
import AsideFilter from './aside_Filter';
import AsideListboxCategory from './aside_Listbox_Category';
// import HeaderLogout from './Header_logout';

class Aside extends Component {	
  handleChange = (val) => {
  	console.log(val);
  }
  render() {
    return (
		<aside className="col-lg-2 col-md-2">
			<div className="list-category">
				<AsideInfoUser />
				<AsideFilter handleChange={this.handleChange} />		
				<AsideListboxCategory />														
			</div>
			<div className="close-aside"></div>			
		</aside>	
    );
  }
}

export default Aside;