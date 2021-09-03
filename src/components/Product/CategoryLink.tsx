import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";
import { getCategoryById } from "../../selectors";
import { RootState } from "../../store";
import { Category } from "../../reducers/categories";

type OwnProps = { id: string };

const mapState = (state: RootState, ownProps: OwnProps) => {
  return {
    category: getCategoryById(state, ownProps.id),
  };
};

interface Props extends OwnProps {
  category: Category | undefined;
}

const CategoryLink = (props: Props) => {
  const { category } = props;
  return category ? (
    <Box my={2}>
      <div>
        <Typography gutterBottom variant="body1" display="inline">
          Category:
        </Typography>
        &nbsp;
        <Link to={`/categories/${category.id}`}>{category.name}</Link>
      </div>
    </Box>
  ) : (
    <React.Fragment />
  );
};

export default connect(mapState)(CategoryLink);
