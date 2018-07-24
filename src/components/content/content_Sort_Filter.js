import React, { Component } from 'react';

class ContentSortFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valFilterProd: ''
    }
  }
  handleFilterProd = (e) => {    
    var valFilterProd = e.target.value;
    this.props.handleFilterProd(valFilterProd);
    this.setState({
      valFilterProd: valFilterProd
    })
  }
  render() {
    var { valFilterProd } = this.state;
    return (
      <div className="filter-item">
        <input onChange={ this.handleFilterProd } value={valFilterProd} type="text" placeholder="Search..." />
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort By &nbsp;
            <span className="caret" /></button>
          <ul className="dropdown-menu">
            <li><a>A - Z</a></li>
            <li><a>Z - A</a></li>
            <li><a>Active</a></li>
            <li><a>Unactive</a></li>
          </ul>
        </div>							
      </div>					
    );
  }
}

export default ContentSortFilter