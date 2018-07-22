import React, { Component } from 'react';
import ContentBreadcrumb from './content_Breadcrumb';
import ContentSortFilter from './content_Sort_Filter';
import ContentItem from './content_Item';
import ContentPagination from './content_Pagination';

class Content extends Component {
  render() {
    var { arrayTasks } = this.props;
    return (
      <div id="content" className="col-lg-10 col-md-10">	
         <ContentBreadcrumb />	
         <section className="table-content">
          <div className="col-md-12">
            <ContentSortFilter /> 
            <div className="table-responsive">
              <table id="mytable" className="table table-bordred table-striped">
               <thead>
                  <tr>
                    <th><input type="checkbox" id="checkall" /></th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Active</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  <ContentItem arrayTasks={ arrayTasks } />
               </tbody>
              </table>
            </div>
            <ContentPagination />
          </div>         
        </section>
      </div>
    );
  }
}

export default Content;