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
			valueSortProd: 'values',
			valueSortSlug: '',
			toggleMenu: true,
			/* INFO USER ADMIN */
			infoUser: [
				{
					img: 'uploads/user/avatar.png',
					name: 'Ngo Van Minh Nhat',
					position: 'Admin'
				}
			],
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
					stt: true
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
	// SORT PRODUCT //
	handleSortProd = (slug, val) => {
		if ( slug === 'user' ) {
			var valueSort = (val === 1) ? true : false;
		}else if ( slug === 'string' ) {
			var valueSort = val;
		}
		this.setState({
			valueSortProd: valueSort,
			valueSortSlug: slug
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
		var products  = this.state.arrayProducts;
		var i = _.findIndex(products, function(el) {    // RETRUN KEY TASKS //
			return el.id === e
		})
		if ( i > -1 ) {
			products[i].stt = !products[i].stt
		}
		this.setState({
			arrayProducts: products
		})	
		localStorage.setItem('arrayProducts', JSON.stringify(this.state.arrayProducts));
	}
	render() {		
		var { arrayItemsCategory, valueFilter, toggleMenu, arrayProducts, infoUser, valueFilterProd, valueSortProd, valueSortSlug } = this.state;
		// FILTER CATEGORY MENU //
		if (valueFilter) {
				arrayItemsCategory = arrayItemsCategory.filter((Item) => {
				return Item.name.toLowerCase().indexOf(valueFilter.toLowerCase()) !== -1;
			})
		}
		// FILTER PRODUCT //
		if (valueFilterProd) {
				arrayProducts = arrayProducts.filter((Item) => {
				return Item.title.toLowerCase().indexOf(valueFilterProd.toLowerCase()) !== -1;
			})
		}
		// SORT PRODUCT //
		if (valueSortProd !== 'values' || valueSortSlug === 'user' ) {
				arrayProducts = arrayProducts.filter((Item) => {
				return Item.stt === valueSortProd
			})
		}else if ( valueSortProd !== 'values' || valueSortSlug === 'stt' ) {
			arrayProducts = _.orderBy(arrayProducts, ['title'], [valueSortProd]);
		}			
		console.log(valueSortSlug + '  ' + valueSortProd );
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
			   	handleSortProd = {this.handleSortProd}
			   	arrayProducts={arrayProducts}
			   	handleStt={this.handleStt} />
			</div>
		);
	}
}

export default App;