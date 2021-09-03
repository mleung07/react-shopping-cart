import React from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import ProductGrid from "../components/Product/ProductGrid";
import { Box } from "@material-ui/core";
import { RootState } from "../store";
import { Product } from "../reducers/products";

const mapState = (state: RootState) => {
  return {
    products: state.products.products,
  };
};

interface Props {
  products: Product[];
}

const ProductList = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <ProductGrid products={props.products} />
      </Box>
    </Container>
  );
};

export default connect(mapState)(ProductList);
