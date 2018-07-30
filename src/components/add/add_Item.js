import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      img: '',
      title: '',
      comment: '',
      content: '',
      stt: 'false'
    }
  }
  handleChangeValue = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    });
  }
  submitForm = (data) => {    
    data.preventDefault();
    this.props.handleAdd(this.state);
  }
  render() {  
    return (      
      <div className="col-lg-6 col-md-6">
        <form onSubmit = {this.submitForm}>
          <div className="form-group">
            <label htmlFor="">Title:</label>
            <input type="text" className="form-control" placeholder="Title" value={this.state.title} name="title" onChange={this.handleChangeValue} />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input type="file" name="img" value={this.state.img} onChange={this.handleChangeValue} />
          </div>
          <div className="form-group">
            <label htmlFor="">Specifications:</label>
            <input type="text" className="form-control" placeholder="Specifications" value={this.state.comment} name="comment" onChange={this.handleChangeValue} />
          </div>
          <div className="form-group">
            <label htmlFor="">Detail configuration:</label>
            <input type="text" className="form-control" placeholder="detai" value={this.state.content} name="content" onChange={this.handleChangeValue} />
          </div>    
          <div className="form-check">
            <input className="form-check-input" id="stttrue" type="radio" name="stt" value="true" checked={ this.state.stt === 'true'} onChange={this.handleChangeValue} />
            <label className="form-check-label" htmlFor="stttrue" >
              Active
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" id="sttfalse" type="radio" name="stt" value="false" checked={ this.state.stt === 'false' } onChange={this.handleChangeValue} />
            <label className="form-check-label" htmlFor="sttfalse" >
              Unactive
            </label>
          </div>            
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddItem