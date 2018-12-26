import React, { Component } from 'react';
import ContentBreadcrumb from './content_Breadcrumb';
import ContentFilter from './content_Filter';
import ContentSort from './content_Sort';
import ContentItem from './content_Item';
import ContentPagination from './content_Pagination';
import AddItem from '../add/add_Item';
import { connect } from 'react-redux';
import _ from 'lodash';

class Content extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isShowAddItem: false,
        handleHadClick: true,
        listDelete: [],
        arrayProductsEditing: []
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
    handleListDelete = (e) => {
      let { listDelete } = this.state;
      let idCheck = listDelete.includes(e);
      if ( idCheck ) {
        let idCheck = listDelete.filter((item) => {
             return item != e;
        })
        this.setState({
          listDelete: idCheck
        })
      }else {
        this.setState({
          listDelete: [...this.state.listDelete,e]
        })
      }
    }
    handleCheckAll = () => {
      let arrayProduct = this.props.arrayProducts.map(item => {
          return item.id
      })
    }
    handleDeleteChecked = (e) => {
      let {arrayProducts} = this.props;
      let idCheck = arrayProducts.filter((item,index) => {
           return !this.state.listDelete.includes(item.id);
      })
      this.props.listIdCheck(idCheck)
    }
    handleEdit = (id) => {
      let { arrayProducts } = this.props;
      var index = _.findIndex(arrayProducts, function(item) { return item.id == id });
      this.setState({
        isShowAddItem: true,
        arrayProductsEditing: arrayProducts[index]
      })
    }
    render() {
    let {isShowAddItem, handleHadClick, listDelete, arrayProductsEditing} = this.state;
    let { arrayProducts, handleStt, handleFilterProd, handleSortProd,
      handleDelete, handleAdd, handleEdit, handleSttForm } = this.props;
    let showArrayProducts = arrayProducts.map((product, index) =>
         <ContentItem
            handleStt = { handleStt }
            key = { index }
            index = { index }
            product = { product }
            handleEdit = {this.handleEdit}
            listDelete = {this.handleListDelete}
            handleDelete = { handleDelete } />
    )
    let btnDeleteChecked = '';
    if ( listDelete != '' ) {
      btnDeleteChecked = <button onClick={this.handleDeleteChecked} type="button" className="btn btn-danger"><i className="fa fa-times" aria-hidden="true"></i> DELETE</button>
    }
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
                      <th><input onClick={this.handleCheckAll} type="checkbox" id="checkall" /></th>
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
              {btnDeleteChecked}
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

const mapStateToProps = (state) => {
  return {
    arrayProducts: state.tasks
  }
};

export default connect(mapStateToProps, null)(Content);