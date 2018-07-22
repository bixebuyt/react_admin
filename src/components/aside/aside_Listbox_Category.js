import React, { Component } from 'react';
import AsideItemCategory from './aside_Item_Category';

class AsideListboxCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	handleToggle = () => {
		this.props.handleToggle()
	}
  render() {
  	var {arrayItemsCategory, toggleMenu} = this.props;
  	let asideItemCategory = '';
  	let titleCategory = '';
  	if (toggleMenu) {
  		asideItemCategory = <AsideItemCategory arrayItemsCategory={arrayItemsCategory} />;
  		titleCategory = <h2 className="active" onClick={this.handleToggle}>Task Manager</h2>
  	}
  	else {
  		titleCategory = <h2 onClick={this.handleToggle}>Task Manager</h2>
  	}
    return (
    	<div className="box-category __border-top-none">
			{titleCategory}
			{asideItemCategory}			
    	</div>
    );
  }
}

export default AsideListboxCategory