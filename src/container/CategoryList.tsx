import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import type { Category } from "../reducers/categories";
import { RootState } from "../store";

const mapState = (state: RootState) => {
  return {
    categories: state.categories.categories,
  };
};

interface Props {
  categories: Category[];
}

const CategoryList = (props: Props) => {
  const { categories } = props;

  return (
    <Box my={4}>
      <Typography variant="h5">Categories</Typography>
      <Box my={2}>
        <List component="nav" aria-label="categories">
          {(categories && categories.length) > 0 ? (
            categories.map((category, index) => {
              return (
                <ListItem
                  button
                  divider={index < categories.length - 1}
                  key={category.slug}
                >
                  <ListItemAvatar>
                    <Avatar alt={category.name} src={category.thumbnail} />
                  </ListItemAvatar>
                  <Link to={`/categories/${category.id}`}>
                    <ListItemText primary={category.name} />
                  </Link>
                </ListItem>
              );
            })
          ) : (
            <Typography variant="h6" align="center">
              Loading...
            </Typography>
          )}
        </List>
      </Box>
    </Box>
  );
};

export default connect(mapState)(CategoryList);
