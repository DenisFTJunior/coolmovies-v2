import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  Stack,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { Movie } from "../../../entities/movie";
import useMovies from "../../../services/stateManagament/movies/helpers/useReviews";

type LocalProps = {
  onChange: (v: number) => void;
  sx: Object;
};

const MovieSelect = ({ onChange, sx }: LocalProps) => {
  const [movies, reload, { error }] = useMovies({});
  const [localValue, setLocalValue] = useState();

  const handleChange = (event: any) => {
    setLocalValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <Box sx={sx}>
      <FormControl fullWidth>
        <InputLabel id="movie-select-id">Movies</InputLabel>
        <Select
          labelId="movie-select-id"
          value={localValue}
          label="Movies"
          onChange={handleChange}
        >
          {!!error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}

          {movies?.length === 0 && !error && (
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ width: "100%" }}
              spacing={2}
            >
              <CircularProgress />
            </Stack>
          )}

          {movies &&
            movies.map((movie: Movie) => (
              <MenuItem value={movie.id}>{movie.title}</MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default MovieSelect;
