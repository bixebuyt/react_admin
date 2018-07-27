import React, { Component } from 'react';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      comment: '',
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
            <input type="file" name="image" name="image" />
          </div>
          <div className="form-group">
            <label htmlFor="">Specifications:</label>
            <input type="text" className="form-control" placeholder="Specifications" value={this.state.comment} name="comment" onChange={this.handleChangeValue} />
          </div>
          <div className="form-group">
            <label htmlFor="">Detailed configuration:</label>
            <input type="text" className="form-control" placeholder="detai" name="" />
          </div>    
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked onChange={this.handleChangeValue} />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Active
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
            <label className="form-check-label" htmlFor="exampleRadios2">
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