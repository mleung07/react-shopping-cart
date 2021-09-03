import React from "react";
import { connect } from "react-redux";
import { Box, Container } from "@material-ui/core";
import ProductGrid from "../components/Product/ProductGrid";
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

const Home = (props: Props) => {
  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <ProductGrid products={props.products} />
      </Box>
    </Container>
  );
};

export default connect(mapState)(Home);
