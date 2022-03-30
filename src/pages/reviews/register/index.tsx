import { Button, Stack, TextField } from "@mui/material";
import React from "react";

import MovieSelect from "../../../components/form/MovieSelect";
import NumberInput from "../../../components/form/NumberInput";
import { useStateDispatch } from "../../../services/stateManagament/config/useDispatch";
import { useStateSelector } from "../../../services/stateManagament/config/useSelector";
import { actions as movieActions } from "../../../services/stateManagament/reviews/reviewSlice";

const RegisterReview = () => {
  const { fillform } = movieActions;
  const { form } = useStateSelector((state) => state.review);
  const dispatch = useStateDispatch();

  const handleChange = (field: string) => (value: any) => {
    dispatch(fillform({ ...form, [`${field}`]: value }));
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginX: "5%" }}
      spacing={4}
    >
      <TextField
        label="Title"
        variant="outlined"
        sx={{ width: "100%" }}
        onChange={(e) => handleChange("title")(e.target.value)}
      />

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ width: "100%" }}
        spacing={2}
      >
        <NumberInput
          max={5}
          onChange={(value) => handleChange("rating")(value)}
          sx={{ width: "50%" }}
        />
        <MovieSelect
          onChange={(value: any) => {
            handleChange("movieId")(value);
          }}
          sx={{ width: "50%" }}
        />
      </Stack>

      <TextField
        label="body"
        variant="outlined"
        sx={{ width: "100%" }}
        rows={4}
        multiline
        onChange={(e) => handleChange("body")(e.target.value)}
      />
      <Button variant="contained" sx={{ alignSelf: "flex-end", width: "10%" }}>
        Save
      </Button>
    </Stack>
  );
};

export default RegisterReview;
