import { Box, CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";
import BlogList from "../components/BlogList";
import { getPosts } from "../api/getPosts";

export default function Home() {
  const { posts, loading, error } = getPosts(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading)
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <CircularProgress/>
      </Box>
    );

  if (error) return <Typography color="error">Error: {error}</Typography>;

  return <BlogList postsProps={posts} />;
}
