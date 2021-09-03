import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryList from "../container/CategoryList";
import CategoryDetail from "../container/CategoryDetail";

const CategoryView = () => {
  return (
    <Router>
      <Switch>
        <Route path="/categories/:id" component={CategoryDetail} />
        <Route path="/categories" exact component={CategoryList} />
      </Switch>
    </Router>
  );
};

export default CategoryView;
