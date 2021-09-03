import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const FavouriteButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <Button
      variant="outlined"
      size="small"
      color="secondary"
      onClick={toggleLiked}
    >
      {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Button>
  );
};

export default FavouriteButton;
