import { Post } from "../types";
import { useState } from "react";
import AppPagination from "./AppPagination";
import PaginatedPosts from "./PaginatedPosts";
import PaginationSettingsBar from "./PaginationSettingsBar";

interface BlogListProps {
  postsProps: Post[];
}

export default function BlogList({ postsProps }: BlogListProps) {
  const [pageSize, setPageSize] = useState(6);
  const [pagination, setPagination] = useState({
    count: postsProps.length,
    sort: "asc",
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
        page: pageNumber,
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

  const handleSortChange = () => {
    setPagination((prev) => {
      return {
        ...prev,
        sort: prev.sort === 'asc'? 'desc' : 'asc',
        page: 1,
        from: 0,
        to: pageSize,
      };
    });
  };

  return (
    <>
      <PaginationSettingsBar
        pageSize={pageSize}
        sort={pagination.sort}
        handlePageSizeChange={(changedPageSize) =>
          handlePageSizeChange(changedPageSize)
        }
        handleSortChange={handleSortChange}
      />
      <PaginatedPosts posts={postsProps} pagination={pagination}/>
      <AppPagination
        count={Math.ceil(pagination.count / pageSize)}
        page={pagination.page}
        handleChange={(_event, page) => handlePageChange(page)}
      />
    </>
  );
}
