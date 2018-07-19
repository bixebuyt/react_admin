import React, { Component } from 'react';
import HeaderLogout from './Header_logout';

class Header extends Component {
  render() {
    return (
		<header>
			<div className="wp-content clearfix">
				<h1>Admin Dashboard</h1>
				<HeaderLogout />
			</div>
		</header>        
    );
  }
}

export default Header;