import { Grid, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import BlogPostCard from "../components/BlogPostCard";
import { Post } from "../types";

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  return (
    <>
      <Typography variant="h4" sx={{ fontStyle: "italic" }}>
        TODAY'S FEED
        <Divider
          sx={{
            mt: 1,
            mb: 2,
            ml: 0,
            maxWidth: 300,
          }}
        />
      </Typography>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {posts.map((post, idx) => (
          <Grid
            key={idx}
            size={{ xs: 4, sm: 4, md: 4 }}
            sx={{
              display: "flex",
            }}
          >
            <BlogPostCard
              cardParms={{
                id: post.id,
                title: post.title,
                description: post.body,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
