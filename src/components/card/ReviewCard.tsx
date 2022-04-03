import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import Image from "next/image";

import React from "react";

import { Review } from "../../entities/review";
import IconText from "../presenters/IconText";
import { withRouter } from "next/router";

type props = {
  children?: JSX.Element;
  review: Review | undefined;
  router: any;
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
            marginX: '1rem',
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
          width: 275,
          height: "20rem",
          boxShadow: "0px 4px 4px #88268A, inset 0px 4px 4px #88268A",
          marginX: "1rem",
          marginY: "1rem",
          borderRadius: "10px",
          padding: "1%",
        }}
        key={this.props.review.id}
      >
        <CardContent
          sx={{
            height: "16rem",
            overflow: "hidden",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography sx={{ color: "black" }} variant="h5" component="div">
              {this.props.review.title}
            </Typography>
            <Box
              sx={{ width: "10%" }}
              onClick={() =>
                this.props.router.push(
                  `/reviews/register/${this.props.review?.id}`
                )
              }
            >
              <Image src="/edit.svg" width="108px" height="108px"></Image>
            </Box>
          </Stack>

          <IconText
            Icon={() => <VideocamIcon />}
            text={this.props.review.movie.title}
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

export default withRouter(ReviewCard);
