import {
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
  Stack,
  Tooltip,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import SortRoundedIcon from "@mui/icons-material/SortRounded";

interface PaginationSettingsBarProps {
  pageSize: number;
  sort: string;
  handlePageSizeChange: (changedPageSize: number) => void;
  handleSortChange: () => void;
}

export default function PaginationSettingsBar({
  pageSize,
  sort,
  handlePageSizeChange,
  handleSortChange,
}: PaginationSettingsBarProps) {
  const handleLocalChange = (event: SelectChangeEvent<number>) => {
    handlePageSizeChange(Number(event.target.value));
  };

  return (
    <>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 2 }}>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <Typography variant="h4" sx={{ fontStyle: "italic" }}>
            TODAY&apos;S FEED
          </Typography>
          <Divider
            sx={{
              ml: 0,
              maxWidth: 300,
              borderBottom: "0.1rem solid #2C3E50",
              mt: 1,
            }}
          />
        </Box>
        <Stack direction="row" spacing={2} >
          <Box sx={{ width: "auto" }}>
            <Typography
              variant="caption"
              component="div"
              sx={{ mb: 0.5 }}
              noWrap
            >
              Posts per Page
            </Typography>
            <Select
              value={pageSize}
              id="posts-per-page-select"
              onChange={handleLocalChange}
              fullWidth
            >
              {[6, 12, 18].map((elem) => (
                <MenuItem key={elem} value={elem}>
                  {elem}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="caption"
              component="div"
              sx={{ mb: 0.5 }}
              noWrap
            >
              Sort By Title
            </Typography>
            <Tooltip title={`Sort ${sort === "asc" ? "A–Z" : "Z–A"}`}>
              <IconButton
                aria-label="toggle alphabetical sort"
                onClick={handleSortChange}
                size="large"
                sx={{ transform: sort === "asc" ? "scaleY(-1)" : "none" }}
              >
                <SortRoundedIcon fontSize="large" color="primary" />
              </IconButton>
            </Tooltip>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
