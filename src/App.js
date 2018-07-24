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
			valueFilterProd: '',
			toggleMenu: true,
			infoUser: [
				{
					img: 'uploads/user/avatar.png',
					name: 'Ngo Van Minh Nhat',
					position: 'Admin'
				}
			], /* INFO USER ADMIN */
			arrayItemsCategory: [
				{
					name: 'Products',
					icon: 'fa fa-mobile'
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
			arrayProducts: [
				{
					id: uuidv1(),
					img: 'uploads/products/pro1.png',
					title: 'Iphone X',
					comment: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to usingContent here, content here',
					stt: true
				},
				{
					id: uuidv1(),
					img:  'uploads/products/pro2.png',
					title: 'Samsung Galaxy J7',
					comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
					content: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,',
					stt: false
				},
				{
					id: uuidv1(),
					img: 'uploads/products/pro3.png',
					title: 'Huawei P8',
					comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
					content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
					stt: false
				},
				{
					id: uuidv1(),
					img: 'uploads/products/pro4.png',
					title: 'Huawei Mate 10',
					comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
					content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
					stt: false
				},
				{
					id: uuidv1(),
					img: 'uploads/products/pro5.png',
					title: 'Xiaomi Redmi Note 2',
					comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form',
					content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
					stt: false
				}													
			]
		}
	}	
	// FILTER CATEGORY MENU //
	parHandleChange = (val) => { 
		this.setState({
			valueFilter: val
		})
	} 
	// FILTER PRODUCT //
	handleFilterProd = (val) => {
		this.setState({
			valueFilterProd: val
		})
	}
	// HANDLE TOGGLE CATEGORY MENU //
	handleToggle = () => {
		this.setState({
			toggleMenu: !this.state.toggleMenu
		})
	}
	componentWillMount() {
		localStorage.setItem('arrayProducts', JSON.stringify(this.state.arrayProducts));
	}
	// HANDLE TOGGLE STATUS //
	handleStt = (e) => {
		var tasks  = this.state.arrayProducts;
		var i = _.findIndex(tasks, function(el) {
			return el.id === e
		})
		if ( i > -1 ) {
			tasks[i].stt = !tasks[i].stt
		}
		this.setState({
			arrayProducts: tasks
		})	
		localStorage.setItem('arrayProducts', JSON.stringify(this.state.arrayProducts));
	}
	render() {		
		var { arrayItemsCategory, valueFilter, toggleMenu, arrayProducts, infoUser, valueFilterProd } = this.state;
		// FILTER CATEGORY MENU //
		if (valueFilter) {
				arrayItemsCategory = arrayItemsCategory.filter((Item) => {
				return Item.name.toLowerCase().indexOf(this.state.valueFilter) !== -1;
			})
		}
		// FILTER PRODUCT //
		if (valueFilterProd) {
				arrayProducts = arrayProducts.filter((Item) => {
				return Item.title.toLowerCase().indexOf(valueFilterProd) !== -1;
			})
		}		
		// console.log(this.state.arrayProducts[0].fName);
		return (
		  <div className="App">
		      <Header />
		      <Aside 
		      	infoUser={infoUser}
		      	valueToggleMenu={toggleMenu}
		      	handleToggle={this.handleToggle}
		      	parHandleChange={this.parHandleChange} 
		      	arrayItemsCategory={arrayItemsCategory} />
		      <Content 
		      	handleFilterProd = {this.handleFilterProd}
		      	arrayProducts={arrayProducts}
		      	handleStt={this.handleStt} />
		  </div>
		);
	}
}

export default App;