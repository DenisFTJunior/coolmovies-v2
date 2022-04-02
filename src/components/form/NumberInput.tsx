import { TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";

type LocalProps = {
  max?: number;
  min?: number;
  sx: Object;
  value?: number;
  onChange: (v: number) => void;
};

type LocalState = {
  localValue?: string | number;
};

class NumberInput extends React.Component<LocalProps, LocalState> {
  constructor(props: LocalProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.replaceValue = this.replaceValue.bind(this);

    this.state = { localValue: `${this.props.value}` || 0 };
  }

  replaceValue(value: number) {
    if (this.props.max !== undefined && value > this.props.max)
      return this.props.max;
    if (this.props.min !== undefined && value < this.props.min)
      return this.props.min;
    return value;
  }

  handleChange(event: any) {
    this.setState({ localValue: this.replaceValue(event.target.value) });
    this.props.onChange(this.replaceValue(event.target.value));
  }

  render() {
    return (
      <TextField
        label="Rating"
        variant="outlined"
        sx={this.props.sx}
        value={this.state.localValue}
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
