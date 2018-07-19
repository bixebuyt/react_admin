import React, { Component } from 'react';

class AsideFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueFilter: ''
		}
	}	
	onChange = (e) => {
		this.setState({
			valueFilter: e.target.value
		})
		
	}	
	handleChange = (val) => {
	   this.props.handleChange(this.state.valueFilter);
	}
	render() {
		console.log(this.state.valueFilter);
		return (
			<div className="box-search-category clearfix">
			   <form className="navbar-form navbar-left">
					<div className="form-group">
						<input value={this.state.valueInput} onChange={this.handleChange} type="text" className="form-control" placeholder="Search" />
					</div>
					<button type="submit" className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i></button>
			   </form>				
			</div>
		);
	}
}

export default AsideFilter