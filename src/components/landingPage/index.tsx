import React from "react";

import WelcomeSection from './WelcomeSection'
import ReviewsSection from './ReviewsSection'
import ThanksSection from './ThanksSection'

class LandingPage extends React.Component {
    render() {
      return <>
        <WelcomeSection/>
        <ReviewsSection/>
        <ThanksSection/>
      </>;
    }
  }

  export default LandingPage