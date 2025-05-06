import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Post } from "../types";
import { useState } from "react";
import AppPagination from "./AppPagination";
import PaginatedPosts from "./PaginatedPosts";

interface BlogListProps {
  posts: Post[];
}

const pageSize = 10;

export default function BlogList({ posts }: BlogListProps) {
  const [pagination, setPagination] = useState({
    count: posts.length,
    from: 0,
    to: pageSize,
  });

  const handlePageChange = (pageNumber: number) => {
    const newFrom = (pageNumber - 1) * pageSize;
    const newTo = pageNumber * pageSize;
    
    setPagination((prev) => {
      return {
        ...prev,
        from: newFrom,
        to: newTo,
      };
    });
  };

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
            borderBottom: "0.1rem solid #2C3E50",
          }}
        />
      </Typography>
      <PaginatedPosts posts={posts} from={pagination.from} to={pagination.to} />
      <AppPagination
        count={Math.ceil(pagination.count / pageSize)}
        handleChange={(event, page) => handlePageChange(page)}
      />
    </>
  );
}
