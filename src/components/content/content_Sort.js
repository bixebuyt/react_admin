import React, { Component } from 'react';

class ContentSort extends Component {
   constructor(props) {
      super(props);
      this.state = {

      }
   }
   handleOnClick = (value) => {
      this.props.handleSortProd(value);
   }
   render() {
      return (
         <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sort By &nbsp;
               <span className="caret" /></button>
            <ul className="dropdown-menu">
               <li><a role="button" onClick={() => this.handleOnClick('desc')}>A - Z</a></li>
               <li><a role="button" onClick={() => this.handleOnClick('asc')}>Z - A</a></li>
               <li><a role="button" onClick={() => this.handleOnClick(1)}>Active</a></li>
               <li><a role="button" onClick={() => this.handleOnClick(0)}>Unactive</a></li>
            </ul>
         </div>										
      );
   }
}

export default ContentSort