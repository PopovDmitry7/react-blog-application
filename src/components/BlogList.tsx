import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Post } from "../types";
import { useState } from "react";
import AppPagination from "./AppPagination";
import PaginatedPosts from "./PaginatedPosts";
import PaginationSettingsBar from "./PaginationSettingsBar";

interface BlogListProps {
  posts: Post[];
}

export default function BlogList({ posts }: BlogListProps) {
  const [pageSize, setPageSize] = useState(6);
  const [pagination, setPagination] = useState({
    count: posts.length,
    page: 1,
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

  const handlePageSizeChange = (changedPageSize: number) => {
    setPageSize(changedPageSize);
    setPagination((prev) => {
      return {
        ...prev,
        page: 1,
        from: 0,
        to: changedPageSize,
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
      <PaginationSettingsBar
        pageSize={pageSize}
        handleChange={(changedPageSize) =>
          handlePageSizeChange(changedPageSize)
        }
      />
      <PaginatedPosts posts={posts} from={pagination.from} to={pagination.to} />
      <AppPagination
        count={Math.ceil(pagination.count / pageSize)}
        page={pagination.page}
        handleChange={(_event, page) => handlePageChange(page)}
      />
    </>
  );
}
