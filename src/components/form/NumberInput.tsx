import { TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";

type LocalProps = {
  max?: number;
  min?: number;
  onChange: (v: number) => void;
};

class NumberInput extends React.Component<LocalProps> {
  replaceValue(value: number) {
    if (this.props.max !== undefined && value > this.props.max)
      return this.props.max;
    if (this.props.min !== undefined && value < this.props.min)
      return this.props.min;
    return value;
  }

  handleChange(event: any) {
    this.props.onChange(this.replaceValue(event.target.value));
  }

  render() {
    return (
      <TextField
        label="Rating"
        variant="outlined"
        sx={{ width: "50%" }}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{ onChange: this.handleChange }}
      />
    );
  }
}

export default NumberInput;
