import React, { Component } from 'react';
import AsideItemCategory from './aside_Item_Category';

class AsideListboxCategory extends Component {
  render() {
  	var {arrayItemsCategory} = this.props;
    return (
    	<div className="box-category __border-top-none">
			<h2>Task Manager</h2>
			<AsideItemCategory arrayItemsCategory={arrayItemsCategory} />			
    	</div>
    );
  }
}

export default AsideListboxCategory