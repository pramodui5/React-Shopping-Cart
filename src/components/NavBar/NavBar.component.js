import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import './NavBar.component.css';

class NavBar extends Component {
  render() {
    const {Cart: {cartList}} = this.props;
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Shopping Cart</span>
            <div className="mdl-layout-spacer" />
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <Link className="mdl-navigation__link" to="/">Electronics</Link>
              <Link className="mdl-navigation__link" to="/">Men</Link>
              <Link className="mdl-navigation__link" to="/">Women</Link>
              <Link className="mdl-navigation__link" to="/">Home & Furniture</Link>
            </nav>
            <div className="mdl-layout-spacer" />
            <Link className="app-shopping-cart mdl-button mdl-js-button mdl-button--icon" to="/cart">
              <i className="material-icons">add_shopping_cart</i>
              {cartList && cartList.length > 0 && <span className="number">
                {cartList.length}
              </span>}
            </Link>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Shopping Cart</span>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to="/">Electronics</Link>
            <Link className="mdl-navigation__link" to="/">Men</Link>
            <Link className="mdl-navigation__link" to="/">Women</Link>
            <Link className="mdl-navigation__link" to="/">Home & Furniture</Link>
          </nav>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  Cart: state.Cart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NavBar);


