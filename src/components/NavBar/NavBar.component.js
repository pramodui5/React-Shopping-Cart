import React, {Component} from 'react';
import './NavBar.component.css';
import { Link } from 'react-router-dom';

export class NavBarComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
            <div>
              <i className="material-icons">add_shopping_cart</i>
            </div>
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


