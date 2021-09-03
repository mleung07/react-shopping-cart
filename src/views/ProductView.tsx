import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "../container/ProductList";
import ProductDetail from "../container/ProductDetail";

const ProductView = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/products" exact component={ProductList} />
      </Switch>
    </Router>
  );
};

export default ProductView;
