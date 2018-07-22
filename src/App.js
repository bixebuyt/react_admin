import React, { Component } from 'react';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Content from './components/content/Content';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueFilter: '',
			toggleMenu: true,
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
			],
			arrayTasks: [
				{
					fName: 'Lionel',
					lName: 'Messi',
					address: 'Barcelona, Spain',
					email: 'dienthangnam@gmail.com',
					stt: true
				},
				// {
				// 	fName: 'Cris',
				// 	lName: 'Ronaldo',
				// 	address: 'Madrid, Spain',
				// 	email: 'dienthangtrung@gmail.com',
				// 	stt: false
				// }				
			]
		}
	}	
	parHandleChange = (val) => {
		this.setState({
			valueFilter: val
		})
	}
	handleToggle = () => {
		this.setState({
			toggleMenu: !this.state.toggleMenu
		})
	}
	render() {
		var { arrayItemsCategory, valueFilter, toggleMenu, arrayTasks } = this.state;
		if (valueFilter) {
			   arrayItemsCategory = arrayItemsCategory.filter((Item) => {
				return Item.name.toLowerCase().indexOf(this.state.valueFilter) !== -1;
			})
		}
		return (
		  <div className="App">
		      <Header />
		      <Aside 
		      	valueToggleMenu={toggleMenu}
		      	handleToggle={this.handleToggle}
		      	parHandleChange={this.parHandleChange} 
		      	arrayItemsCategory={arrayItemsCategory} />
		      <Content arrayTasks={arrayTasks} />
		  </div>
		);
	}
}

export default App;