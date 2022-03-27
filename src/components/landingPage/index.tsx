import React from "react";
import { Box } from "@mui/material";

import WelcomeSection from "./WelcomeSection";
import ReviewsSection from "./ReviewsSection";
import ThanksSection from "./ThanksSection";
import ReviewRepository from "../../repositories/review/ReviewRepository";

class LandingPage extends React.Component {
  reviewRepository = new ReviewRepository();
  
  render() {
    return (
      <>
        <Box sx={{ margin: "0 5%" }}>
          <WelcomeSection />
          <ReviewsSection reviewRepository={this.reviewRepository} />
        </Box>
        <ThanksSection />
      </>
    );
  }
}

export default LandingPage;
