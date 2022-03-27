import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

import { Review } from "../../entities/review";

type props = {
  children?: JSX.Element;
  review: Review;
};

class ReviewCard extends React.Component<props> {
  render() {
    if (!this.props.review)
      return (
        <Card>
          <CardContent>
            <Typography sx={{ color: "white" }} variant="h5" component="div">
              Be the first to register this review
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
            }}
          >
            <Button sx={{ color: "#002FA7" }} size="small">
              Register
            </Button>
          </CardActions>
        </Card>
      );
    return (
      <Card
        sx={{
          minWidth: 275,
          minHeight: "20rem",
          border: "5px solid #88268A",
        }}
      >
        <CardContent>
          <Typography sx={{ color: "white" }} variant="h5" component="div">
            {this.props.review.title}
          </Typography>
          <Typography sx={{ color: "white" }} variant="h6" component="div">
            {this.props.review.rating} Stars
          </Typography>

          <Typography sx={{ color: "white" }} variant="h6" component="div">
            {this.props.review.movie.title}
          </Typography>
          <Typography variant="body2">{this.props.review.body}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
          }}
        >
          <Button sx={{ color: "#002FA7" }} size="small">
            Show More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default ReviewCard;
