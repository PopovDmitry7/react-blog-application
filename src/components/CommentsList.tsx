import { CommentData } from "../types";
import { List, ListItem, Typography, Divider } from "@mui/material";

interface CommentsListProps {
  commentsArray: CommentData[];
}

export default function CommentsList({ commentsArray }: CommentsListProps) {
  return (
    <List
      sx={{
        minWidth: "100%",
        border: 1,
        borderColor: "divider",
        borderRadius: 4,
        bgcolor: "background.paper",
        overflow: "hidden",
      }}
    >
      {commentsArray.map((comment, index) => (
        <>
          <ListItem
            key={comment.id}
            alignItems="flex-start"
            sx={{
              flexDirection: "column",
              alignItems: "stretch",
              p: 2,
            }}
          >
            <Typography variant="h6">{comment.name}</Typography>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {comment.email}
            </Typography>
            <Typography variant="body1">{comment.body}</Typography>
          </ListItem>
          {index < commentsArray.length - 1 && <Divider component="li" />}
        </>
      ))}
    </List>
  );
}
