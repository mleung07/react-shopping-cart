import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";
import { RootState } from "../store";
import { CartProduct, REMOVE_FROM_CART } from "../reducers/cart";
import { getCartItems } from "../selectors";
import Toast from "../components/Toast";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  image: {
    maxHeight: "5em",
    marginRight: "10px",
  },
});

const mapState = (state: RootState) => {
  return {
    items: getCartItems(state),
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    removeFromCart: (id: string) => dispatch({ type: REMOVE_FROM_CART, id }),
  };
};

interface Props {
  items: CartProduct[] | undefined;
  removeFromCart: (arg0: string) => void;
}

const Cart = (props: Props) => {
  const classes = useStyles();
  const { items } = props;
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    props.removeFromCart(id);
    setOpen(true);
  };

  const handleToastClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h5">Items in your cart</Typography>
        <Box my={2}>
          <TableContainer component={Paper}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items && items.length > 0 ? (
                  items.map((item) => (
                    <TableRow key={item.productId}>
                      <TableCell component="th" scope="row">
                        <Box display="flex" alignItems="center">
                          <img
                            src={item.product?.thumbnail}
                            className={classes.image}
                            alt={item.product?.name}
                          />
                          <Link to={`/products/${item.productId}`}>
                            {item.product?.name}
                          </Link>
                        </Box>
                      </TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            handleClick(item.productId);
                          }}
                          color="secondary"
                          variant="contained"
                        >
                          Remove
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>
                      <Typography variant="h6" align="center">
                        No items yet, go shopping now!
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Toast open={open} onClose={handleToastClose} message="Item removed" />
      </Box>
    </Container>
  );
};

export default connect(mapState, mapDispatch)(Cart);
