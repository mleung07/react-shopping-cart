import React from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Box } from "@material-ui/core";
import { Product } from "../../reducers/products";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  title?: string;
}

const ProductGrid = (props: Props) => {
  const { products } = props;
  return (
    <div>
      <Typography variant="h5">
        {props.title ? props.title : "Product List"}
      </Typography>
      <Box my={2}>
        {products && products.length > 0 ? (
          <Grid container spacing={3}>
            {products.map((product) => {
              return (
                <Grid item xs={6} sm={3} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Typography variant="h6" align="center">
            No Products yet :(
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default ProductGrid;
