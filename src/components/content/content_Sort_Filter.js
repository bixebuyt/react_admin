import React, { Component } from 'react';

class ContentSortFilter extends Component {
  render() {
    return (
      <div className="filter-item">
        <input type="text" placeholder="Search..." />
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort By
            <span className="caret" /></button>
          <ul className="dropdown-menu">
            <li><a>A - Z</a></li>
            <li><a>Z - A</a></li>
            <li><a>DESC</a></li>
            <li><a>ASC</a></li>
          </ul>
        </div>							
      </div>					
    );
  }
}

export default ContentSortFilter