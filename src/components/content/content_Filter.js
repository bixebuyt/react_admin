import React, { Component } from 'react';

class ContentFilter extends Component {
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
        <input onChange={ this.handleFilterProd } value={valFilterProd} type="text" placeholder="Search..." />											
    );
  }
}

export default ContentFilter