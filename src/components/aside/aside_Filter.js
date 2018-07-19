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
		this.props.handleChange(e.target.value);
	}	

	render() {
		return (
			<div className="box-search-category clearfix">
			   <form className="navbar-form navbar-left">
					<div className="form-group">
						<input value={this.state.valueInput} onChange={this.onChange} type="text" className="form-control" placeholder="Search" />
					</div>
					<button type="submit" className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i></button>
			   </form>				
			</div>
		);
	}
}

export default AsideFilter