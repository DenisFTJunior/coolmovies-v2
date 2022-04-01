import { Box, Stack, Typography } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";
import React from "react";

import { useReview } from "../../services/stateManagament/reviews/helpers/useReviews";
import IconText from "../../components/presenters/IconText";
import CommentsSection from "../../components/comments/CommentsSection";
import Loading from "../../components/helpers/Loading";

const ReviewPage = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id;
  if (!id) return <></>;
  const [review] = useReview(id);

  if (!review) return <Loading />;

  return (
    <>
      <Stack
        sx={{ marginX: "5%", width: "90%" }}
        justifyContent="flex-start"
        alignItems="flex-start"
        direction="column"
        spacing={4}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={4}
          sx={{ width: "100%" }}
        >
          <Typography variant="h5">{review.title}</Typography>
          <Stack direction="row" spacing={4}>
            <IconText text={review.rating} Icon={() => <StarIcon />} />
            <IconText text={review.movie.title} Icon={() => <VideocamIcon />} />
          </Stack>
        </Stack>
        <Stack
          justifyContent="flex-start"
          alignItems="flex-start"
          sx={{
            padding: "2%",
            border: "1px solid black",
            maxHeight: "70%",
            width: "100%",
            minHeight: "20rem",
          }}
        >
          <Typography variant="body2">{review.body}</Typography>
        </Stack>
      </Stack>
      <CommentsSection comments={review.comments} />
    </>
  );
};

export default ReviewPage;
