import React, {Component} from 'react';
import {find as _find} from 'lodash';
import './ProductDetails.component.css';
import { getProductList } from '../../actions/product.actions';
import {addToCart} from '../../actions/cart.actions';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const {Products: {productList}} = this.props;
    if (!(productList && productList.length > 0)) {
      this.props.getProductList();
    }
  }
  addToCartActionHandler(product) {
    this.props.addToCart(product);
  }
  render() {
    const {match: {params: {id}}, Products: {productList}} = this.props;
    const selectedProduct = _find(productList, (o) => {
      return o.id.toString() === id
    });
    return (<div>
      {selectedProduct && <div className="product-details-card-square mdl-card mdl-shadow--2dp mdl-grid">
        <div className="mdl-card__title mdl-card--expand mdl-cell mdl-cell--6-col">
          <img src={selectedProduct.url}/>
        </div>
        <div className="mdl-cell mdl-cell--6-col">
          <div className="mdl-card__supporting-text">
            <h2 className="mdl-card__title-text">Iphone</h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenan convallis.</p>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <button className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"
                    onClick={()=> this.addToCartActionHandler(selectedProduct)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>}
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
      getProductList,
      addToCart
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(ProductDetails);
