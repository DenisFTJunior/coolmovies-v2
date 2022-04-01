import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import React from "react";

import { Review } from "../../entities/review";
import IconText from "../presenters/IconText";

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
            marginY: "1rem",
            padding: "1%",
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
            <Link href="/reviews/register">
              <Button sx={{ width: "100%" }} variant="outlined" size="small">
                Write
              </Button>
            </Link>
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
          margin: "5%",
          padding: "1%",
        }}
      >
        <CardContent
          sx={{
            minHeight: "16rem",
            overflow: "hidden",
          }}
        >
          <Typography sx={{ color: "black" }} variant="h6" component="div">
            {this.props.review.movie.title}
          </Typography>

          <IconText
            Icon={() => <VideocamIcon />}
            text={this.props.review.title}
            textProps={{
              sx: { color: "black" },
              variant: "h6",
              component: "div",
            }}
          />

          <IconText
            Icon={() => <StarIcon />}
            text={`${this.props.review.rating} stars`}
            textProps={{
              sx: { color: "black" },
              variant: "h6",
              component: "div",
            }}
          />

          <Typography variant="body2">{this.props.review.body}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "flex-end",
          }}
        >
          <Link href={`/reviews/${this.props.review.id}`}>
            <Button sx={{ width: "100%" }} variant="outlined" size="small">
              Show more
            </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
}

export default ReviewCard;
