import React, { Component } from 'react';

class ContentBreadcrumb extends Component {
  render() {
    return (
		<ol className="breadcrumb">
			<li className="breadcrumb-item"><a>Home</a></li>
			<li className="breadcrumb-item active">Library</li>
		</ol>				
    );
  }
}

export default ContentBreadcrumb