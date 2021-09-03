import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import Homepage from "./views/Home";
import CategoryView from "./views/CategoryView";
import ProductView from "./views/ProductView";
import MenuBar from "./components/Menu/MenuBar";
import LeftMenu from "./components/Menu/LeftMenu";
import LoginDialog from "./components/Menu/LoginDialog";
// import Copyright from "./components/Copyright";
import { INIT_PRODUCTS } from "./reducers/products";
import { INIT_CATEGORIES } from "./reducers/categories";
import Cart from "./views/Cart";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));

const mapDispatch = (dispatch: Dispatch) => {
  return {
    initProducts: () => dispatch({ type: INIT_PRODUCTS }),
    initCategories: () => dispatch({ type: INIT_CATEGORIES }),
  };
};

interface Props {
  initProducts: () => void;
  initCategories: () => void;
}

const App = (props: Props) => {
  const classes = useStyles();

  // simulate api call on app start
  useEffect(() => {
    props.initProducts();
    props.initCategories();
  }, [props]);

  return (
    <Router>
      <MenuBar />
      <LeftMenu />
      <LoginDialog />

      <Container maxWidth="lg">
        <div className={classes.appBarSpacer}></div>
        <Switch>
          <Route path="/categories" component={CategoryView} />
          <Route path="/products" component={ProductView} />
          <Route path="/carts" component={Cart} />
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        {/* <Copyright /> */}
      </Container>
    </Router>
  );
};

export default connect(null, mapDispatch)(App);
