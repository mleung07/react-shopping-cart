import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { LOGIN, HIDE_LOGIN, SHOW_LOGIN } from "../../reducers/settings";
import { RootState } from "../../store";
import Toast from "../Toast";

const mapState = (state: RootState) => {
  return {
    showLogin: state.settings.showLogin,
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    login: (name: string) => dispatch({ type: LOGIN, payload: name }),
    show: () => dispatch({ type: SHOW_LOGIN }),
    hide: () => dispatch({ type: HIDE_LOGIN }),
  };
};

interface Props {
  showLogin: boolean;
  login(name: string): void;
  hide(): void;
  show(): void;
}

const LoginDialog = (props: Props) => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    props.hide();
  };

  const handleLogin = () => {
    props.hide();
    props.login(name);
    setOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleToastClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={props.showLogin}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Welcome to the page, please type in your name to login.
          </DialogContentText>
          <TextField
            autoFocus
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={handleChange}
            value={name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogin} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
      <Toast
        open={open}
        onClose={handleToastClose}
        message="Login successfully"
      />
    </div>
  );
};

export default connect(mapState, mapDispatch)(LoginDialog);
