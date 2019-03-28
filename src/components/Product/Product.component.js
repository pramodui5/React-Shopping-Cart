import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import './Product.component.css';

export class ProductComponent extends Component {
  render() {
    const {product: {title, info, id, thumbnailUrl}} = this.props;
    return (<div className="demo-card-square mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title mdl-card--expand">
          <img src={thumbnailUrl} />
        </div>
        <div className="mdl-card__supporting-text">
          <h2 className="mdl-card__title-text">{title}</h2>
          {info}
        </div>
        <div className="mdl-card__actions mdl-card--border">
          <Link to={`/electronics/${id}`} className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View Details
          </Link>
        </div>
      </div>
    )
  }
}


