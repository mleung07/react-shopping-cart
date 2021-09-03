import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Dispatch } from "redux";
import { getProductById } from "../selectors";
import { RootState } from "../store";
import { Product } from "../reducers/products";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import CategoryLink from "../components/Product/CategoryLink";
import FavouriteButton from "../components/Product/FavouriteButton";
import Comments, { IComment } from "../components/Product/Comments";
import { ADD_TO_CART } from "../reducers/cart";
import Toast from "../components/Toast";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

type OwnProps = { id: string };

const mapState = (
  state: RootState,
  ownProps: RouteComponentProps<OwnProps>
) => {
  return {
    product: getProductById(state, ownProps.match.params.id),
  };
};

const mapDispatch = (dispatch: Dispatch) => {
  return {
    addToCart: (id: string) => dispatch({ type: ADD_TO_CART, id }),
  };
};

interface Props extends OwnProps {
  product: Product | undefined;
  addToCart: (arg0: string) => void;
}

const sampleComments: IComment[] = [
  {
    avatar: "1",
    name: "Anonymous",
    message: "Good",
  },
  {
    avatar: "2",
    name: "Anonymous",
    message: "Nice",
  },
  {
    avatar: "3",
    name: "Anonymous",
    message: "Very Good!",
  },
];

const ProductDetail = (props: Props) => {
  const classes = useStyles();
  const { product } = props;
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    props.addToCart(id);
    setOpen(true);
  };

  const handleToastClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    setRating(Math.floor(Math.random() * 5));
    setCount(Math.floor(Math.random() * 90) + 10);
  }, []);

  if (!product) {
    return (
      <Box my={2}>
        <div>Something went wrong...</div>
      </Box>
    );
  }
  return (
    <Box my={2}>
      <Card square={false}>
        <CardMedia
          className={classes.media}
          image={product.thumbnail}
          title={product.name}
        />
        <CardContent>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography gutterBottom variant="h6" component="h4">
                {product.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary" component="p">
                ${product.price}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <Grid item>
                  <Rating
                    name="half-rating-read"
                    defaultValue={rating}
                    precision={0.5}
                    readOnly
                  />
                </Grid>
                <Grid item>({count})</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <FavouriteButton />
            </Grid>
          </Grid>
          <Box my={2}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              onClick={() => {
                handleClick(product.id);
              }}
            >
              Add to cart
            </Button>
          </Box>
          <Divider />
          {product.categoryId && <CategoryLink id={product.categoryId} />}
          {sampleComments && <Comments comments={sampleComments} />}
        </CardContent>
        <CardActions></CardActions>
      </Card>
      <Toast
        open={open}
        onClose={handleToastClose}
        message="Item added to cart"
      />
    </Box>
  );
};

export default connect(mapState, mapDispatch)(ProductDetail);
