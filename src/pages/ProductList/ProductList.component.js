import React, { Component } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import './ProductList.component.css';
import { ProductComponent } from '../../components/Product/Product.component';
import { getProductList } from '../../actions/product.actions';

class ProductList extends Component {
  constructor(props) {
    super(props);
    const {Products: {productList}} = this.props;
    if (!(productList && productList.length > 0)) {
      this.props.getProductList();
    }
  }

  render() {
    const {Products : {productList, isFetching}} = this.props;
    return (
      <div className="mdl-grid">
        {isFetching && <div>
          Please Wait ...
        </div>}
        {productList && productList.length > 0 && productList.map(item => {
            return (<div className="mdl-cell mdl-cell--3-col" key={item.id} >
              <ProductComponent product={item}/>
            </div>)
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Products: state.Products
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getProductList
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductList);



