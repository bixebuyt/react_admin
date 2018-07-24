import React, { Component } from 'react';
import AsideInfoUser from './aside_Info_User';
import AsideFilter from './aside_Filter';
import AsideListboxCategory from './aside_Listbox_Category';
// import HeaderLogout from './Header_logout';

class Aside extends Component {	
  handleChange = (val) => {
  	this.props.parHandleChange(val);
  }
  render() {
  	var {arrayItemsCategory, handleToggle, valueToggleMenu, infoUser} = this.props;
    return (
		<aside className="col-lg-2 col-md-2">
			<div className="list-category">
				<AsideInfoUser infoUser={infoUser} />
				<AsideFilter handleChange={this.handleChange} />		
				<AsideListboxCategory 
					toggleMenu={valueToggleMenu}
					handleToggle={handleToggle}
					arrayItemsCategory={arrayItemsCategory} />														
			</div>
			<div className="close-aside"></div>			
		</aside>	
    );
  }
}

export default Aside;