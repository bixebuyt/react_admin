import React, { Component } from 'react';

class AsideInfoUser extends Component {
  render() {
    return (
		<div className="info-user clearfix">
			<div className="avatar flt-left"><img src="assets/images/avatar.png" alt="avatar User" /></div>
			<div className="profile">
				<strong>Ngo Van Minh Nhat</strong>
				<p>Admin</p>
			</div>
		</div>
    );
  }
}

export default AsideInfoUser