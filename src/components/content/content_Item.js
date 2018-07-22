import React, { Component } from 'react';

class ContentItem extends Component {
  render() {
    var { arrayTasks2 } = this.props;
    console.log(arrayTasks2);
    if ( arrayTasks2 ) {
     var showItem = arrayTasks2.map((value, index) =>  
        <tr key={index}>
          <td><input type="checkbox" className="checkthis" /></td>
          <td>Mohsin</td>
          <td>Irshad</td>
          <td>CB 106/107 Street # 11 Wah Cantt Islamabad Pakistan</td>
          <td>isometric.mohsin@gmail.com</td>
          <td className="icon-active"><img src="assets/images/active.png" alt="active" /></td>
          <td>
            <p data-placement="top" data-toggle="tooltip" title="Edit"><button className="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><span className="glyphicon glyphicon-pencil" /></button></p>
          </td>
          <td>
            <p data-placement="top" data-toggle="tooltip" title="Delete"><button className="btn btn-danger btn-xs" data-title="Delete" data-toggle="modal" data-target="#delete"><span className="glyphicon glyphicon-trash" /></button></p>
          </td>
        </tr>          
      )
    }
    return (
      { showItem }
    );
  }
}

export default ContentItem