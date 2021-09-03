import React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Divider, Typography, Drawer, Badge } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { RootState } from "../../store";
import { SHOW_DRAWER, HIDE_DRAWER } from "../../reducers/settings";
import { Home, Shop, LocalOffer, ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

const mapState = (state: RootState) => {
  return {
    showDrawer: state.settings.showDrawer,
    cartCount: state.cart.items.length,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    toggleOn: () => dispatch({ type: SHOW_DRAWER }),
    toggleOff: () => dispatch({ type: HIDE_DRAWER }),
  };
};

interface Props {
  showDrawer: boolean;
  cartCount: number;
  toggleOn: () => void;
  toggleOff: () => void;
}

const LeftMenu = (props: Props) => {
  const classes = useStyles();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    if (open) {
      props.toggleOn();
    } else {
      props.toggleOff();
    }
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.toolbar}
      >
        <Grid item>
          <Typography variant="h5">Shopping cart</Typography>
        </Grid>
      </Grid>
      <Divider />
      <List>
        <Link to="/">
          <ListItem>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link to="/products">
          <ListItem>
            <ListItemIcon>
              <Shop />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>
        <Link to="/categories">
          <ListItem>
            <ListItemIcon>
              <LocalOffer />
            </ListItemIcon>
            <ListItemText primary="Categories" />
          </ListItem>
        </Link>
        <Link to="/carts">
          <ListItem>
            <ListItemIcon>
              <Badge badgeContent={props.cartCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Cart" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      <Drawer open={props.showDrawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default connect(mapState, mapDispatch)(LeftMenu);
