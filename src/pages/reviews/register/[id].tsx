import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

import { FormReview, Review } from "../../../entities/review";
import { useReview } from "../../../services/stateManagament/reviews/helpers/useReviews";
import { actions as reviewActions } from "../../../services/stateManagament/reviews/reviewSlice";
import { useStateDispatch } from "../../../services/stateManagament/config/useDispatch";
import { useStateSelector } from "../../../services/stateManagament/config/useSelector";
import { useEffect, useState } from "react";
import NumberInput from "../../../components/form/NumberInput";
import MovieSelect from "../../../components/form/MovieSelect";
import Link from "next/link";
import UserSelect from "../../../components/form/UserSelect";
import Loading from "../../../components/helpers/Loading";

const UpdateReview = (): JSX.Element => {
  const router = useRouter();
  const dispatch = useStateDispatch();
  const id = router.query.id;
  const reviewState = useStateSelector((state) => state.review);
  const { fillform, updateReview } = reviewActions;
  if (!id)
    return (
      <Alert sx={{ width: "100%" }} variant="outlined" severity="warning">
        Its necessary to pass a valid id for edit any review
      </Alert>
    );

  const [review] = useReview(id);

  const [error, setError] = useState<undefined | { message: string }>(
    undefined
  );

  console.log("form", reviewState.form);
  useEffect(() => {
    dispatch(dispatch(fillform(review)));
  }, []);

  const handleChange = (field: string) => (value: any) => {
    dispatch(fillform({ ...reviewState.form, [`${field}`]: value }));
  };

  if (!review) return <Loading />;

  if (review.length === 0)
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginX: "5%" }}
        spacing={4}
      >
        <Alert sx={{ width: "100%" }} variant="outlined" severity="warning">
          There aren't this review
        </Alert>
        <Link href="reviews/register">
          {" "}
          <Button
            variant="contained"
            sx={{ alignSelf: "flex-end", width: "10%" }}
          >
            Register new Review
          </Button>
        </Link>
      </Stack>
    );

  const validateForm = (form: FormReview): undefined | { message: string } => {
    if (!form.title) return { message: "Title is a required field" };
    if (!form.body) return { message: "Body is a required field" };
    if (!form.movieId) return { message: "Movie is a required field" };
    if (!form.rating) return { message: "Rating is a required field" };
    return undefined;
  };

  const handleClick = () => {
    const error = validateForm(review.form);
    if (!error) {
      dispatch(updateReview(review.form));
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
        value={reviewState.form.title}
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
          sx={{ width: "33%" }}
          value={reviewState.form.rating}
        />

        <MovieSelect
          onChange={(value: any) => {
            handleChange("movieId")(value);
          }}
          initialValue={reviewState.form.movie}
          sx={{ width: "33%" }}
        />

        <UserSelect
          onChange={(value: any) => {
            handleChange("userId")(value);
          }}
          initialValue={reviewState.form.user}
          sx={{ width: "33%" }}
        />
      </Stack>

      <TextField
        label="body"
        variant="outlined"
        sx={{ width: "100%" }}
        value={reviewState.form.body}
        rows={4}
        multiline
        onChange={(e) => handleChange("body")(e.target.value)}
      />
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{ alignSelf: "flex-end", width: "10%" }}
      >
        Update
      </Button>
    </Stack>
  );
};

export default UpdateReview;
