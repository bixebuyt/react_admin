import React, { Component } from 'react';

class ContentSort extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }
   handleOnClick = (slug,value) => {
      this.props.handleSortProd(slug, value);
   }
   handleSttForm = () => {
       this.props.handleSttForm()
   }
   render() {
      return (
         <div className="dropdown clearfix">
            <button onClick={this.handleSttForm} type="button" className="btn btn-warning"><i className="fa fa-plus" aria-hidden="true"></i> Add Product</button>
            <div className = "box_soft">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort By &nbsp;
                <span className="caret" /></button>
                <ul className="dropdown-menu">
                <li><a role="button" onClick={() => this.handleOnClick('user', 'desc')}>A - Z</a></li>
                <li><a role="button" onClick={() => this.handleOnClick('user', 'asc')}>Z - A</a></li>
                <li><a role="button" onClick={() => this.handleOnClick('stt', 1)}>Active</a></li>
                <li><a role="button" onClick={() => this.handleOnClick('stt', 0)}>Unactive</a></li>
                </ul>
            </div>
         </div>										
      );
   }
}

export default ContentSort