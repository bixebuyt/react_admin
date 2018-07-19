import React, { Component } from 'react';

class ContentPagination extends Component {
  render() {
    return (
    	<div>
        <div className="clearfix" />
        <ul className="pagination pull-right">
          <li className="disabled"><a><span className="glyphicon glyphicon-chevron-left" /></a></li>
          <li className="active"><a>1</a></li>
          <li><a>2</a></li>
          <li><a>3</a></li>
          <li><a>4</a></li>
          <li><a>5</a></li>
          <li><a><span className="glyphicon glyphicon-chevron-right" /></a></li>
        </ul>				
    	</div>
    );
  }
}

export default ContentPagination