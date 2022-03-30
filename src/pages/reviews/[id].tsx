import { Box, Stack, Typography } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import StarIcon from "@mui/icons-material/Star";
import { useRouter } from "next/router";

import { Review } from "../../entities/review";
import { useReview } from "../../services/stateManagament/reviews/helpers/useReviews";
import IconText from "../../components/presenters/IconText";
import CommentsSection from "../../components/comments/CommentsSection";

const Review = (): JSX.Element | undefined => {
  const router = useRouter();
  const id = router.query.id;
  if (!id) return <></>;
  const [review] = useReview(id);

  if (!review) return <Typography variant="h4"></Typography>;

  return (
    <>
      <Stack
        sx={{ marginX: "5%" }}
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={4}
      >
        <Typography variant="h5">{review.title}</Typography>
        <IconText text={review.movie.name} Icon={() => <VideocamIcon />} />
        <IconText text={review.rating} Icon={() => <StarIcon />} />
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "5%", border: "1px solid black", maxHeight: "70%" }}
        >
          <Box sx={{ padding: "5%", border: "1px solid black" }}>
            <Typography variant="body2">{review.body}</Typography>
          </Box>
        </Stack>
      </Stack>
      <CommentsSection comments={review.comments} />
    </>
  );
};

export default Review;
