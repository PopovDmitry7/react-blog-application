import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import getPostData from "../api/getPostData";
import CommentsList from "../components/CommentsList";

export default function Post() {
  const params = useParams<{ id: string }>();
  const postId = params.id!;

  const { comments, loading, error } = getPostData(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  if (error) return <Typography color="error">Error: {error}</Typography>;

  return (
    <>
      <Typography variant="h3" color="text.primary" sx={{ fontWeight: 700 }}>
        Comments
      </Typography>
      <CommentsList commentsArray={comments} />
    </>
  );
}
