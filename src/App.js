import React, { Component } from 'react';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Content from './components/content/Content';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueFilter: '',
			toggleMenu: false,
			arrayItemsCategory: [
				{
					name: 'Ariticle',
					icon: 'fa fa-newspaper-o'
				},
				{
					name: 'Pictures',
					icon: 'fa fa-file-image-o'
				},
				{
					name: 'Mail Contact',
					icon: 'fa fa-envelope-o'
				},
				{
					name: 'Other',
					icon: 'fa fa-braille'
				}							
			]
		}
	}	
	parHandleChange = (val) => {
		this.setState({
			valueFilter: val
		})
	}
	render() {
		var { arrayItemsCategory, valueFilter } = this.state;
		if (valueFilter) {
			   arrayItemsCategory = arrayItemsCategory.filter((Item) => {
				return Item.name.toLowerCase().indexOf(this.state.valueFilter) !== -1;
			})
		}
		return (
		  <div className="App">
		      <Header />
		      <Aside parHandleChange={this.parHandleChange} arrayItemsCategory={arrayItemsCategory} />
		      <Content />
		  </div>
		);
	}
}

export default App;