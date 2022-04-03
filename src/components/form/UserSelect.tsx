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
import { User } from "../../entities/user";

const filter = createFilterOptions<UserOption>();

export default function UserSelect({
  onChange,
  sx,
  initialValue = null,
}: {
  onChange: (v?: string) => void;
  sx: Object;
  initialValue?: any;
}) {
  const [value, setValue] = React.useState<UserOption | null>(null);
  const [open, toggleOpen] = React.useState(false);
  const [users, reload] = useUsers({});

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleClose = () => {
    setDialogValue({
      name: "",
    });
    toggleOpen(false);
  };

  const [dialogValue, setDialogValue] = React.useState({
    name: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
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
        options={users}
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
          <TextField key={params.id} {...params} label="Users" />
        )}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Register User</DialogTitle>
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

interface UserOption {
  inputValue?: string;
  id?: string;
  name: string;
}
