import React, { Component } from 'react';
import AsideItemCategory from './aside_Item_Category';

class AsideListboxCategory extends Component {
  render() {
    return (
    	<div className="box-category __border-top-none">
			<h2>Task Manager</h2>
			<AsideItemCategory />			
    	</div>
    );
  }
}

export default AsideListboxCategory