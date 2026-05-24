import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { addReview } from "../../api/reviewApi";

export default function ReviewForm({
  companyId,
  onSuccess
}) {

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
        companyId
      });

      toast.success(
        "Review Added"
      );

      reset();

      onSuccess();

    } catch (err) {

      toast.error(
        "Failed to add review"
      );

    }

  };

  return (
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
          "fullName",
          {required:true}
        )}
        className="w-full border p-3 rounded"
      />

      <input
        placeholder="Subject"
        {...register(
          "subject",
          {required:true}
        )}
        className="w-full border p-3 rounded"
      />

      <textarea
        rows="4"
        placeholder="Review"
        {...register(
          "review",
          {required:true}
        )}
        className="w-full border p-3 rounded"
      />

      <select
        {...register(
          "rating",
          {required:true}
        )}
        className="w-full border p-3 rounded"
      >

        <option value="">
          Select Rating
        </option>

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

      </select>

      <button
        className="
        bg-gradient-to-r
        from-purple-500
        to-blue-600
        text-white
        px-6
        py-3
        rounded
        "
      >
        Submit Review
      </button>

    </form>
  );
}