import React, { useEffect } from "react";

import ReviewCard from "../../components/card/ReviewCard";
import SlideCards from "../../components/presenters/SlideCards";
import useReviews from "../../services/stateManagament/reviews/helpers/useReviews";

const Reviews = () => {
  const [reviews] = useReviews({});

  return (
    <SlideCards itens={reviews} Card={(item) => <ReviewCard review={item} />} />
  );
};

export default Reviews;
