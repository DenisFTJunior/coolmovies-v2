import React from "react";
import { Box } from "@mui/material";

import WelcomeSection from "./WelcomeSection";
import ReviewsSection from "./ReviewsSection";
import ThanksSection from "./ThanksSection";
import { Review } from "../../entities/review";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Box sx={{ margin: "0 5%" }}>
          <WelcomeSection />
          <ReviewsSection />
        </Box>
        <ThanksSection />
      </>
    );
  }
}

export default LandingPage;
