import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { addReview } from "../../api/reviewApi";

import StarRatingInput from "../StarRatingInput/StarRatingInput";

export default function ReviewModal({
  companyId,
  closeModal,
  refreshReviews
}) {

  const [rating,setRating] =
    useState(0);

  const {
    register,
    handleSubmit,
    reset
  } = useForm();

  const submitReview = async (
    data
  ) => {

    try {

      await addReview({
        ...data,
        rating,
        companyId
      });

      toast.success(
        "Review Added Successfully"
      );

      reset();

      refreshReviews();

      closeModal();

    } catch {

      toast.error(
        "Failed To Add Review"
      );

    }

  };

  return (
    <div
      className="
      fixed inset-0
      bg-black/50
      flex
      justify-center
      items-center
      z-50
      "
    >

      <div
        className="
        bg-white
        w-[500px]
        rounded-xl
        p-6
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-5
          "
        >
          Add Review
        </h2>

        <form
          onSubmit={
            handleSubmit(
              submitReview
            )
          }
          className="space-y-4"
        >

          <input
            placeholder="Full Name"
            {...register(
              "fullName"
            )}
            className="
            w-full
            border
            p-3
            rounded
            "
          />

          <input
            placeholder="Subject"
            {...register(
              "subject"
            )}
            className="
            w-full
            border
            p-3
            rounded
            "
          />

          <textarea
            rows="4"
            placeholder="Write Review"
            {...register(
              "review"
            )}
            className="
            w-full
            border
            p-3
            rounded
            "
          />

          <StarRatingInput
            rating={rating}
            setRating={setRating}
          />

          <div
            className="
            flex
            justify-end
            gap-3
            "
          >

            <button
              type="button"
              onClick={closeModal}
              className="
              px-4
              py-2
              border
              rounded
              "
            >
              Cancel
            </button>

            <button
              className="
              bg-gradient-to-r
              from-purple-500
              to-blue-600
              text-white
              px-5
              py-2
              rounded
              "
            >
              Submit
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}