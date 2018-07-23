import React, { Component } from 'react';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import Content from './components/content/Content';
import _ from 'lodash';
const uuidv1 = require('uuid/v1');

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
					id: uuidv1(),
					fName: 'Lionel',
					lName: 'Messi',
					address: 'Barcelona, Spain',
					email: 'dienthangnam@gmail.com',
					stt: true
				},
				{
					id: uuidv1(),
					fName: 'Cris',
					lName: 'Ronaldo',
					address: 'Madrid, Spain',
					email: 'dienthangtrung@gmail.com',
					stt: false
				},
				{
					id: uuidv1(),
					fName: 'Ngô Văn',
					lName: 'Minh Nhật',
					address: 'Quảng Nam, Việt Nam',
					email: 'dienthangbac@gmail.com',
					stt: false
				}				
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
	componentWillMount() {
		// localStorage.setItem(key, value);
	}
	handleStt = (e) => {
		var tasks  = this.state.arrayTasks;
		var i = _.findIndex(tasks, function(el) {
			return el.id === e
		})
		if ( i > -1 ) {
			tasks[i].stt = !tasks[i].stt
		}
		this.setState({
			arrayTasks: tasks
		})	
		localStorage.setItem('arrayTasks', JSON.stringify(this.state.arrayTasks));
	}
	render() {		
		var { arrayItemsCategory, valueFilter, toggleMenu, arrayTasks } = this.state;
		if (valueFilter) {
			   arrayItemsCategory = arrayItemsCategory.filter((Item) => {
				return Item.name.toLowerCase().indexOf(this.state.valueFilter) !== -1;
			})
		}
		// console.log(this.state.arrayTasks[0].fName);
		return (
		  <div className="App">
		      <Header />
		      <Aside 
		      	valueToggleMenu={toggleMenu}
		      	handleToggle={this.handleToggle}
		      	parHandleChange={this.parHandleChange} 
		      	arrayItemsCategory={arrayItemsCategory} />
		      <Content 
		      	arrayTasks={arrayTasks}
		      	handleStt={this.handleStt} />
		  </div>
		);
	}
}

export default App;