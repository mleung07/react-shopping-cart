import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Product } from "../../reducers/products";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const classes = useStyles();
  const { product } = props;

  return (
    <Card className={classes.root} square={false}>
      <CardActionArea>
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
              <Typography gutterBottom variant="body1" component="h4">
                {product.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="textSecondary" component="p">
                ${product.price}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" fullWidth color="primary">
          <Link to={`/products/${product.id}`}>Learn More</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
