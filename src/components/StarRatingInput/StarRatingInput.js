import { FaStar } from "react-icons/fa";

export default function StarRatingInput({
  rating,
  setRating
}) {
  return (
    <div className="flex gap-2">

      {[1,2,3,4,5].map((star) => (

        <FaStar
          key={star}
          size={30}
          onClick={() => setRating(star)}
          className={`
            cursor-pointer
            ${
              star <= rating
                ? "text-yellow-400"
                : "text-gray-300"
            }
          `}
        />

      ))}

    </div>
  );
}