import { Alert, Button, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";

import MovieSelect from "../../../components/form/MovieSelect";
import NumberInput from "../../../components/form/NumberInput";
import { FormReview } from "../../../entities/review";
import { useStateDispatch } from "../../../services/stateManagament/config/useDispatch";
import { useStateSelector } from "../../../services/stateManagament/config/useSelector";
import { actions as reviewActions } from "../../../services/stateManagament/reviews/reviewSlice";

const RegisterReview = () => {
  const [error, setError] = useState<undefined | { message: string }>(
    undefined
  );
  const { fillform, saveReview } = reviewActions;
  const { form } = useStateSelector((state) => state.review);
  const dispatch = useStateDispatch();
  const router = useRouter();

  const handleChange = (field: string) => (value: any) => {
    dispatch(fillform({ ...form, [`${field}`]: value }));
  };

  const validateForm = (form: FormReview): undefined | { message: string } => {
    if (!form.title) return { message: "Title is a required field" };
    if (!form.body) return { message: "Body is a required field" };
    if (!form.movieId) return { message: "Movie is a required field" };
    if (!form.rating) return { message: "Rating is a required field" };
    return undefined;
  };

  const handleClick = () => {
    const error = validateForm(form);
    if (!error) {
      dispatch(saveReview(form));
      router.replace("/");
    }
    setError(error);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginX: "5%" }}
      spacing={4}
    >
      {!!error && (
        <Alert sx={{ width: "100%" }} variant="outlined" severity="error">
          {error.message}
        </Alert>
      )}

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
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ alignSelf: "flex-end", width: "10%" }}
      >
        Save
      </Button>
    </Stack>
  );
};

export default RegisterReview;
