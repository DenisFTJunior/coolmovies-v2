import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import useDirectors from "../../services/stateManagament/directors/helpers/useDirectors";
import useSaveDirector from "../../services/stateManagament/directors/helpers/useSaveDirector";

const filter = createFilterOptions<DirectorOption>();

export default function DirectorSelect({
  onChange,
  sx,
  initialValue = null,
}: {
  onChange: (v?: string) => void;
  sx: Object;
  initialValue?: any;
}) {
  const [value, setValue] = React.useState<DirectorOption | null>(null);
  const [open, toggleOpen] = React.useState(false);
  const [directors, reload] = useDirectors({});
  const save = useSaveDirector();

  React.useEffect(() => {
    if (initialValue) setValue(initialValue);
  }, [initialValue]);

  const [dialogValue, setDialogValue] = React.useState<DirectorOption>({
    name: "",
    age: 0,
  });

  const handleClose = () => {
    setDialogValue({
      name: "",
      age: 0,
    });
    toggleOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    save({
      name: dialogValue.name,
      age: dialogValue.age ? dialogValue.age : 0,
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
                name: newValue,
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              name: newValue.inputValue,
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
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="user-select"
        options={directors}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.name}</li>}
        freeSolo
        sx={sx}
        renderInput={(params) => (
          <TextField key={params.id} {...params} label="Director" />
        )}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Register Director</DialogTitle>
          <DialogContent>
            <DialogContentText>Fill the fields and save</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.name}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  name: event.target.value,
                })
              }
              label="name"
              type="text"
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="age"
              value={dialogValue.age}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  age: parseInt(event.target.value),
                })
              }
              type="number"
              label="age"
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

interface DirectorOption {
  inputValue?: string;
  id?: string;
  name: string;
  age?: number;
}
