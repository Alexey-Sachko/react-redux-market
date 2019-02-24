import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link className="logo text-dark" to="/">ReStore</Link>
      <Link className="shopping-cart" to="/cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { orderTotal, itemsTotal } }) => {
  return {
    total: orderTotal,
    numItems: itemsTotal
  };
};

export default connect(mapStateToProps)(ShopHeader);