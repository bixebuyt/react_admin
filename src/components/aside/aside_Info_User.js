import React, { Component } from 'react';

class AsideInfoUser extends Component {
  render() {
  	 var {infoUser}= this.props;
  	 var showInfoUser = infoUser.map((value, index) => 
			<div key={index}>
				<div className="avatar flt-left"><img src={window.location.origin+ '/'+value.img} alt={value.name} /></div>
				<div className="profile">
					<strong>{value.name}</strong>
					<p>{value.position}</p>
				</div>
			</div>
  	 )
    return (
    <div className="info-user clearfix">
    	{showInfoUser}
    </div>
    );
  }
}

export default AsideInfoUser