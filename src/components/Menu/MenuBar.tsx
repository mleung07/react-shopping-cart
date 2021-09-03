import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import type { RootState } from "../../store";
import { LOGOUT, SHOW_DRAWER, SHOW_LOGIN } from "../../reducers/settings";
import Toast from "../Toast";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const mapState = (state: RootState) => {
  return {
    authed: state.settings.authed,
    name: state.settings.name,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    logout: () => dispatch({ type: LOGOUT }),
    openDrawer: () => dispatch({ type: SHOW_DRAWER }),
    openLogin: () => dispatch({ type: SHOW_LOGIN }),
  };
};

interface Props {
  authed: boolean;
  name: string;
  logout: () => void;
  openDrawer: () => void;
  openLogin: () => void;
}

const MenuBar = (props: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    props.openLogin();
  };

  const handleLogout = () => {
    props.logout();
    setOpen(true);
  };

  const handleToastClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              props.openDrawer();
            }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Shopping cart
          </Typography>
          {props.authed ? (
            <Button color="inherit" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" onClick={handleLogin}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toast
        open={open}
        onClose={handleToastClose}
        message="Logout successfully"
      />
    </div>
  );
};

export default connect(mapState, mapDispatch)(MenuBar);
