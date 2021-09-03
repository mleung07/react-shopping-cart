import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

interface Props {
  open: boolean;
  onClose(): void;
  message: string;
  duration?: number;
}

const Toast = (props: Props) => {
  return (
    <Snackbar open={props.open} autoHideDuration={2000} onClose={props.onClose}>
      <Alert onClose={props.onClose} severity="success">
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
