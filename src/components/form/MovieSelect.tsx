import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import useUsers from "../../services/stateManagament/users/helpers/useUsers";
import useMovies from "../../services/stateManagament/movies/helpers/useMovies";

const filter = createFilterOptions<MovieOption>();

export default function MovieSelect({
  onChange,
  sx,
}: {
  onChange: (v?: string) => void;
  sx: Object;
}) {
  const [value, setValue] = React.useState<MovieOption | null>(null);
  const [open, toggleOpen] = React.useState(false);
  const [movies, reload] = useMovies({});

  const handleClose = () => {
    setDialogValue({
      title: "",
      releaseDate: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState<MovieOption>({
    title: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
    });
    handleClose();
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
        id="user-select"
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
          <DialogTitle>Register Film</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill the fields and save</DialogContentText>
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
              value={dialogValue.title}
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
}
