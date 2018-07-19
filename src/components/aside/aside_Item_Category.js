import React, { Component } from 'react';

class AsideListboxCategory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			arrayItemsCategory: [
				{
					name: 'Ariticle',
					icon: 'fa fa-newspaper-o',
				},
				{
					name: 'Pictures',
					icon: 'fa fa-file-image-o',
				},
				{
					name: 'Mail Contact',
					icon: 'fa fa-envelope-o',
				},
				{
					name: 'Other',
					icon: 'fa fa-braille',
				}							
			]
		}
	}
	render() {
		var Items = this.state.arrayItemsCategory;
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

export default AsideListboxCategory