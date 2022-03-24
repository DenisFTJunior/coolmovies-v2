import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";

type props = {
  children?: JSX.Element;
  title: string;
  body: string;
  stars: number;
  movieName: string;
};

class ReviewCard extends React.Component<props> {
  render() {
    return (
      <Card
        sx={{
          minWidth: 275,
          backgroundColor:
            "linear-gradient(0deg, rgba(136,38,138,1) 25%, rgba(0,212,255,0) 100%);",
        }}
      >
        <CardContent>
          <Typography sx={{color:"white"}} variant="h5" component="div">
            {this.props.title}
          </Typography>
          <Typography sx={{color:"white"}} variant="h6" component="div">
            {this.props.stars} Stars
          </Typography>

          <Typography sx={{color:"white"}} variant="h6" component="div">
            {this.props.movieName}
          </Typography>
          <Typography variant="body2">{this.props.body}</Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
          }}
        >
          <Button sx={{color:"#002FA7"}} size="small">Show More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default ReviewCard;
