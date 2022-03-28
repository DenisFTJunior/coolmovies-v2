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
  review: Review | undefined;
};

class ReviewCard extends React.Component<props> {
  render() {
    if (!this.props.review)
      return (
        <Card
          sx={{
            minWidth: 275,
            minHeight: "20rem",
            boxShadow: "0px 4px 4px #88268A, inset 0px 4px 4px #88268A",
            borderRadius: "10px",
            marginX: { xs: "2rem", sm: "2rem", md: "2rem" },
            marginY:"1rem",
            padding:"1%"
          }}
        >
          <CardContent
            sx={{
              minHeight: "16rem",
            }}
          >
            <Typography sx={{ color: "black" }} variant="h6" component="div">
              Review not Created Yet :(
            </Typography>
            <Typography sx={{ color: "black" }} variant="body2" component="div">
              Maybe you can create? :)
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "flex-end",
            }}
          >
            <Button sx={{ width: "100%" }} variant="outlined" size="small">
              Write
            </Button>
          </CardActions>
        </Card>
      );
    return (
      <Card
        sx={{
          minWidth: 275,
          minHeight: "20rem",
          boxShadow: "0px 4px 4px #88268A, inset 0px 4px 4px #88268A",
          borderRadius: "10px",
        }}
      >
        <CardContent>
          <Typography sx={{ color: "black" }} variant="h5" component="div">
            {this.props.review.title}
          </Typography>
          <Typography sx={{ color: "black" }} variant="h6" component="div">
            {this.props.review.rating} Stars
          </Typography>

          <Typography sx={{ color: "black" }} variant="h6" component="div">
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
