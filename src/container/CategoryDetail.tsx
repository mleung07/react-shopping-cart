import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Box } from "@material-ui/core";
import { getCategoryById, getProductsByCategoryId } from "../selectors";
import { RootState } from "../store";
import { Product } from "../reducers/products";
import { Category } from "../reducers/categories";
import ProductGrid from "../components/Product/ProductGrid";

type OwnProps = { id: string };

const mapState = (
  state: RootState,
  ownProps: RouteComponentProps<OwnProps>
) => {
  return {
    category: getCategoryById(state, ownProps.match.params.id),
    products: getProductsByCategoryId(state, ownProps.match.params.id),
  };
};

interface Props extends OwnProps {
  category: Category | undefined;
  products: Product[];
}

const CategoryDetail = (props: Props) => {
  const { category, products } = props;
  if (!category || !products) {
    return (
      <Box my={2}>
        <div>Something went wrong...</div>;
      </Box>
    );
  }
  return (
    <Box my={2}>
      {products.length && (
        <ProductGrid products={props.products} title={category.name} />
      )}
    </Box>
  );
};

export default connect(mapState)(CategoryDetail);
