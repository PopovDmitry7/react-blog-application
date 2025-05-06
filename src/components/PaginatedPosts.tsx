import { Grid } from "@mui/material";
import BlogPostCard from "./BlogPostCard";
import { Post } from "../types";

interface PaginatedPostsProps {
  posts: Post[];
  from: number;
  to: number;
}

export default function PaginatedPosts({
  posts,
  from,
  to,
}: PaginatedPostsProps) {
  let postSection = posts.slice(from, to);

  return (
    <>
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ mb: "1rem" }}
      >
        {postSection.map((post, idx) => (
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
