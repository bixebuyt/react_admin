import React, { Component } from 'react';

class HeaderLogout extends Component {
  render() {
    return (
		<div className="login">
			<div className="notice">
				<a><i className="fa fa-bell flt-left" aria-hidden="true"></i><span>3</span></a>
				<div className="list-notice">
					<ul>
						<li><p>13/07/2018</p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
						<li><p>13/07/2018</p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
						<li><p>13/07/2018</p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>
					</ul>
				</div>
			</div>
			<form className="navbar-form navbar-left">
				<div className="form-group">
				  <input type="text" className="form-control" placeholder="Search" />
				</div>
				<button type="submit" className="btn btn-primary"><i className="fa fa-search" aria-hidden="true"></i></button>
			</form>
			<a><span>Logout: </span><i className="fa fa-sign-out" aria-hidden="true"></i></a>			     					
		</div>
    );
  }
}

export default HeaderLogout