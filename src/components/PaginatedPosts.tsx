import { Grid } from "@mui/material";
import BlogPostCard from "./BlogPostCard";
import { Post } from "../types";
import { PaginationType } from "../types";

interface PaginatedPostsProps {
  posts: Post[];
  pagination: PaginationType;
}

export default function PaginatedPosts({
  posts,
  pagination,
}: PaginatedPostsProps) {
  const sortedPosts = [...posts].sort((a, b) =>
    pagination.sort === "asc"
      ? a.title.localeCompare(b.title, undefined, { sensitivity: "base" })
      : b.title.localeCompare(a.title, undefined, { sensitivity: "base" })
  );

  let postSection = sortedPosts.slice(pagination.from, pagination.to);

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
