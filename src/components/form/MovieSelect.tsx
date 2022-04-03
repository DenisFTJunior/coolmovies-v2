import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import useMovies from "../../services/stateManagament/movies/helpers/useMovies";
import { Alert, Stack } from "@mui/material";
import UserSelect from "./UserSelect";
import DirectorSelect from "./DirectorSelect";
import useSaveMovies from "../../services/stateManagament/movies/helpers/useSaveMovies";

const validateForm = (form: MovieOption): undefined | { message: string } => {
  if (!form.title) return { message: "Title is a required field" };
  if (!form.releaseDate) return { message: "Body is a required field" };
  if (!form.directorId) return { message: "Director is a required field" };
  if (!form.userId) return { message: "User is a required field" };
  return undefined;
};

const filter = createFilterOptions<MovieOption>();

export default function MovieSelect({
  onChange,
  sx,
  initialValue,
}: {
  onChange: (v?: string) => void;
  sx: Object;
  initialValue?: any;
}) {
  const [error, setError] = React.useState<undefined | { message: string }>(
    undefined
  );
  const [value, setValue] = React.useState<MovieOption | null>(null);
  const [open, toggleOpen] = React.useState(false);
  const [movies, reload] = useMovies({});
  const save = useSaveMovies();

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleClose = () => {
    setDialogValue({
      title: "",
      releaseDate: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState<MovieOption>({
    title: "",
    releaseDate: "",
    userId: "",
    directorId: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const error = validateForm(dialogValue);
    event.preventDefault();
    if (!error) {
      //@ts-ignore
      //because the validate is done in validateForm
      save({ ...dialogValue });
      handleClose();
    }

    setError(error);
  };

  return (
    <>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
            });
          } else {
            onChange(newValue?.id);
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="movie-select"
        options={movies}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        freeSolo
        sx={sx}
        renderInput={(params) => (
          <TextField key={params.id} {...params} label="Films" />
        )}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          {!!error && (
            <Alert sx={{ width: "100%" }} variant="outlined" severity="error">
              {error.message}
            </Alert>
          )}
          <DialogTitle>Register Film</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill the fields and save</DialogContentText>
            <Stack direction="column">
              <TextField
                autoFocus
                margin="dense"
                id="title"
                value={dialogValue.title}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    title: event.target.value,
                  })
                }
                label="Title"
                type="text"
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="releaseDate"
                value={dialogValue.releaseDate}
                onChange={(event) =>
                  setDialogValue({
                    ...dialogValue,
                    releaseDate: event.target.value,
                  })
                }
                label="Date"
                type="date"
                variant="outlined"
              />
              <DirectorSelect
                onChange={(value) =>
                  setDialogValue({
                    ...dialogValue,
                    directorId: value,
                  })
                }
                sx={{ width: "33%" }}
              />

              <UserSelect
                onChange={(value) =>
                  setDialogValue({
                    ...dialogValue,
                    userId: value,
                  })
                }
                sx={{ width: "33%" }}
              />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

interface MovieOption {
  inputValue?: string;
  id?: string;
  title: string;
  releaseDate?: string;
  userId?: string;
  directorId?: string;
}
