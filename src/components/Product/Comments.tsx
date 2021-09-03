import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export interface IComment {
  avatar: string;
  name: string;
  message: string;
}

export interface CommentProps {
  comments: IComment[];
}

const Comments = (props: CommentProps) => {
  const { comments } = props;
  return (
    <Box my={2}>
      <Typography gutterBottom variant="body1" component="div">
        Comments
      </Typography>
      <List>
        {comments.map((comment, index) => {
          return (
            <ListItem key={`${comment.name}_${index}`}>
              <ListItemAvatar>
                <Avatar>
                  <AccountCircleIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={comment.message}
                secondary={comment.name}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default Comments;
