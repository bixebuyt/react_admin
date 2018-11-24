import React, { Component } from 'react';
import ContentBreadcrumb from './content_Breadcrumb';
import ContentFilter from './content_Filter';
import ContentSort from './content_Sort';
import ContentItem from './content_Item';
import ContentPagination from './content_Pagination';
import AddItem from '../add/add_Item';

class Content extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isShowAddItem: false,
        handleHadClick: true
      }
    }
    handleSttForm = () => {
        this.setState({
          isShowAddItem: !this.state.isShowAddItem
        })
    }
    handleHadClick = () => {
        this.setState({
          handleHadClick: !this.state.handleHadClick
        })
    }
  render() {
    console.log(this.state.handleHadClick);
    let {isShowAddItem, handleHadClick} = this.state;
    let { arrayProducts, handleStt, handleFilterProd, handleSortProd, 
      handleDelete, handleAdd, handleEdit, arrayProductsEditing, handleSttForm } = this.props;
    let showArrayProducts = arrayProducts.map((product, index) =>
         <ContentItem
            handleStt = { handleStt }
            key = { index }
            index = { index }
            product = { product }
            handleEdit = {handleEdit}
            handleDelete = { handleDelete } />
    )
    let elmAddItem  = '';
    let elmTableProducts = '';
    if (isShowAddItem) {
        elmAddItem = <AddItem            
            arrayProductsEditing = {arrayProductsEditing}
            handleAdd = { handleAdd } 
            handleHadClick = {this.handleHadClick} />
        elmTableProducts = '';     
    }else if (handleHadClick){
        elmAddItem = '';
        elmTableProducts =  
            <div>
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
    }
    return (
      <div id="content" className="col-lg-10 col-md-10">
         <ContentBreadcrumb />
         <section className="table-content">
          <div className="col-md-12">
            <div className="filter-item">
              <ContentFilter handleFilterProd = {handleFilterProd} />
              <ContentSort 
              handleSttForm = {this.handleSttForm}
              handleSortProd = {handleSortProd} />
            </div>
            {elmAddItem}
            {elmTableProducts}
          </div>
        </section>

      </div>
    );
  }
}

export default Content;