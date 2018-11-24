import React, { Component } from 'react';

class ContentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sttCheckbox: true,
      idItem: '',
<<<<<<< HEAD
      listDelete: []
=======
      listEdit: []
>>>>>>> 420799a0f5ccb160f01cae44ae09ef1c1d9661e0
    }
  }
  handleStt = (e) => {
    this.props.handleStt(this.props.product.id)
  }
  handleDelete = (e) => {
    this.props.handleDelete(e)
  }
  handleEdit = (e) => {
    this.props.handleEdit(e);
  }
  handleCheckbox = (e) => {
    this.setState ({
      sttCheckbox: !this.state.sttCheckbox
    })
<<<<<<< HEAD
    if ( this.state.sttCheckbox ) {
      this.state.idItem = e;
      this.setState({
        listDelete: this.state.listDelete.push(this.state.idItem)
      })
    }else {
      this.state.idItem = 0;
    }
=======
    this.setState({
      listEdit: this.state.listEdit.push(e)
    })
    console.log(this.state.listEdit)
>>>>>>> 420799a0f5ccb160f01cae44ae09ef1c1d9661e0
  }
  render() {
    var { product, index } = this.props;
    return (
      <tr key={index}>
        <td><input type="checkbox" onChange={() => this.handleCheckbox(product.id)} className="checkthis" /></td>
        <td>{index + 1}</td>
        <td><img src={product.img !== '' ? window.location.origin+ '/'+product.img : window.location.origin+ '/uploads/products/'+'img-default.jpg' } alt={product.title} /></td>
        <td>{product.title}</td>
        <td>{product.comment}</td>
        <td>{product.content}</td>
        <td className="icon-active"><i onClick={this.handleStt} className={ product.stt === true ? 'fa fa-check active' : 'fa fa-times unactive' } aria-hidden="true"></i></td>
        <td>
        <p data-placement="top" data-toggle="tooltip" title="Edit"><button onClick={() => this.handleEdit(product.id)} className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><span className="glyphicon glyphicon-pencil" /></button></p>
        </td>
        <td>
        <p data-placement="top" data-toggle="tooltip" title="Delete"><button onClick={() => this.handleDelete(product.id)} className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span className="glyphicon glyphicon-trash" /></button></p>
        </td>
      </tr>
      );
  }
}

export default ContentItem