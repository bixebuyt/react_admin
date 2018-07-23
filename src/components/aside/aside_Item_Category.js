import React, { Component } from 'react';

class AsideItemCategory extends Component {
	render() {
		var Items = this.props.arrayItemsCategory;
		var Item = Items.map((e, i) => 
			<div className="category"  key={i}>
				<h3><i className={e.icon} aria-hidden="true"></i><span className="close-small-width">{e.name}</span></h3>
			</div>	 		
		);
		return (
			<div>
				{Item}					
			</div>
		);
	}
}

export default AsideItemCategory