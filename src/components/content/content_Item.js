import React, { Component } from 'react';

class ContentItem extends Component {
  handleStt = (e) => {
    this.props.handleStt(this.props.product.id)
  }
  render() {
    var { product, index } = this.props;    
    return (      
        <tr key={index}>
          <td><input type="checkbox" className="checkthis" /></td>
          <td>{index + 1}</td>
          <td><img src={window.location.origin+ '/'+product.img} alt={product.title} /></td>
          <td>{product.title}</td>
          <td>{product.comment}</td>
          <td>{product.content}</td>
          <td className="icon-active"><i onClick={this.handleStt} className={ product.stt === true ? 'fa fa-check active' : 'fa fa-times unactive' } aria-hidden="true"></i></td>
          <td>
            <p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><span className="glyphicon glyphicon-pencil" /></button></p>
          </td>
          <td>
            <p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span className="glyphicon glyphicon-trash" /></button></p>
          </td>
        </tr>  
    );
  }
}

export default ContentItem