import { Alert, Button, Stack, TextField, Typography } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";

import { FormReview, Review } from "../../../entities/review";
import { useReview } from "../../../services/stateManagament/reviews/helpers/useReviews";
import { actions as reviewActions } from "../../../services/stateManagament/reviews/reviewSlice";
import { useStateDispatch } from "../../../services/stateManagament/config/useDispatch";
import { useStateSelector } from "../../../services/stateManagament/config/useSelector";
import { useEffect, useState } from "react";
import NumberInput from "../../../components/form/NumberInput";
import MovieSelect from "../../../components/form/MovieSelect";
import Link from "next/link";

const Review = (): JSX.Element | undefined => {
  const [error, setError] = useState<undefined | { message: string }>(
    undefined
  );
  const router = useRouter();
  const id = router.query.id;
  if (!id)
    return (
      <Alert sx={{ width: "100%" }} variant="outlined" severity="warning">
        Its necessary to pass a valid id for edit any review
      </Alert>
    );
  const [review] = useReview(id);

  if (!review)
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginX: "5%" }}
        spacing={4}
      >
        <Alert sx={{ width: "100%" }} variant="outlined" severity="warning">
          Review not found
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

  const { fillform, saveReview } = reviewActions;
  const { form } = useStateSelector((state) => state.review);
  const dispatch = useStateDispatch();

  useEffect(() => {
    dispatch(fillform(review));
  }, []);

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

export default Review;
