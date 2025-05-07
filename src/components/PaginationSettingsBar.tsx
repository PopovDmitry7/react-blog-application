import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
} from "@mui/material";

interface PaginationSettingsBarProps {
  pageSize: number;
  handleChange: (changedPageSize: number) => void;
}

export default function PaginationSettingsBar({
  pageSize,
  handleChange,
}: PaginationSettingsBarProps) {
  const handleLocalChange = (event: SelectChangeEvent<number>) => {
    handleChange(Number(event.target.value));
  };

  return (
    <Box sx={{ maxWidth: 200, mb: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="posts-per-page-label">Posts per Page</InputLabel>
        <Select
          labelId="posts-per-page-label"
          label="Posts per Page"
          value={pageSize}
          id="posts-per-page-select"
          onChange={handleLocalChange}
        >
          {[6, 12, 18].map((elem) => (
            <MenuItem key={elem} value={elem}>
              {elem}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
