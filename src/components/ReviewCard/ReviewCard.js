import { useState } from "react";

import RatingStars from "../RatingStars/RatingStars";

import { likeReview } from "../../api/reviewApi";
import { FacebookShareButton } from "react-share";
export default function ReviewCard({
  review
}) {

  const [likes,setLikes] =
    useState(review.likes);

  const handleLike = async () => {

    try {

      await likeReview(review._id);

      setLikes(prev => prev + 1);

    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div
      className="
      bg-white
      shadow
      rounded-xl
      p-5
      "
    >

      <div className="flex justify-between">

        <div>

          <h3 className="font-bold text-lg">
            {review.subject}
          </h3>

          <p className="text-gray-500">
            By {review.fullName}
          </p>

        </div>

        <RatingStars
          rating={review.rating}
        />

      </div>

      <p className="mt-4 text-gray-700">
        {review.review}
      </p>

      <div
        className="
        mt-4
        flex
        justify-between
        items-center
        "
      >

        <span className="text-sm text-gray-500">

          {new Date(
            review.createdAt
          ).toLocaleDateString()}

        </span>

        <button
          onClick={handleLike}
          className="
          bg-gray-100
          px-3
          py-1
          rounded
          "
        >
          👍 {likes}
        </button>

        <FacebookShareButton
 url={window.location.href}
>

  <button
    className="
    px-3
    py-1
    border
    rounded
    "
  >
    Share
  </button>

</FacebookShareButton>

      </div>

    </div>
  );
}