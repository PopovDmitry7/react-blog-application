import { Box, Pagination } from "@mui/material";

interface AppPaginationProps {
  count: number,
  page: number,
  handleChange: (_event: React.ChangeEvent<unknown>, page: number) => void,
}

export default function AppPagination({
  count,
  page,
  handleChange,
}: AppPaginationProps) {
  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <Pagination
        count={count}
        onChange={handleChange}
        variant="outlined"
        color="primary"
        shape="rounded"
        size="large"
        page={page}
      />
    </Box>
  );
}
