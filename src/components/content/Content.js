import React, { Component } from 'react';
import ContentBreadcrumb from './content_Breadcrumb';
import ContentFilter from './content_Filter';
import ContentSort from './content_Sort';
import ContentItem from './content_Item';
import ContentPagination from './content_Pagination';

class Content extends Component {
  render() {
    var { arrayProducts, handleStt, handleFilterProd, handleSortProd } = this.props;
    var showArrayProducts = arrayProducts.map((product, index) => 
         <ContentItem 
            handleStt={handleStt} 
            key={index} 
            index={index} 
            product={ product } />
    )
    return (
      <div id="content" className="col-lg-10 col-md-10">	
         <ContentBreadcrumb />	
         <section className="table-content">
          <div className="col-md-12">
            <div className="filter-item">
              <ContentFilter handleFilterProd = {handleFilterProd} /> 
              <ContentSort handleSortProd = {handleSortProd} />
            </div>
            <div className="table-responsive">
              <table id="mytable" className="table table-bordred table-striped">
               <thead>
                  <tr>
                    <th><input type="checkbox" id="checkall" /></th>
                    <th>No.</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Specifications</th>
                    <th>Detailed configuration</th>
                    <th>Active</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
               </thead>    
               <tbody>         
                { showArrayProducts }
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