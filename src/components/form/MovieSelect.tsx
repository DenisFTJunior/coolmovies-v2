import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Movie } from "../../entities/movie";
import {
  RootState,
  StateDispatch,
} from "../../services/stateManagament/config/schema/store";

import { actions as movieActions } from "../../services/stateManagament/movies/movieSlice";

type LocalProps = {
  onChange: (v: number) => void;
  movies: Movie[];
  fetchMovies: (vars: any) => void;
  clearMovieData: () => void;
};

type LocalState = {
  localValue: string;
};

class MovieSelect extends React.Component<LocalProps, LocalState> {
  constructor(props: LocalProps) {
    super(props);
    this.state = { localValue: "" };
  }

  handleChange(event: any) {
    this.setState({ localValue: event.target.value });
    this.props.onChange(event.target.value);
  }

  componentDidMount() {
    this.props.fetchMovies({});
  }

  componentWillUnmount() {
    this.props.clearMovieData();
  }

  render() {
    return (
      <FormControl fullWidth>
        <InputLabel id="movie-select-id">Movies</InputLabel>
        <Select
          labelId="movie-select-id"
          value={this.state.localValue}
          label="Movies"
          onChange={this.handleChange}
        >
          {this.props.movies.map((movie) => (
            <MenuItem value={movie.id}>{movie.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
}

const mapDispatchToProps = (dispatch: StateDispatch) => {
  const { fetchMovies, clearMovieData } = movieActions;
  return {
    fetchMovies: (vars: any) => dispatch(fetchMovies(vars)),
    clearMovieData: () => dispatch(clearMovieData()),
  };
};

function mapStateToProps(state: RootState) {
  const { movie } = state;
  return { movies: movie.fetchedMovies };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSelect);
