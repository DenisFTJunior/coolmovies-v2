import React from "react";
import { Stack, Typography } from "@mui/material";

type LocalProps = {
  Icon: () => JSX.Element;
  text: string;
};

class IconText extends React.Component<LocalProps> {
  render() {
    return (
      <Stack direction={"row"} spacing={2}>
        {this.props.Icon()}
        <Typography variant="body2">{this.props.text}</Typography>
      </Stack>
    );
  }
}

export default IconText;
