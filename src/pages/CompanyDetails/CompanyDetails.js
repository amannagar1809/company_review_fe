import { useEffect,useState } from "react";

import { useParams } from "react-router-dom";

import {
  getCompanyById
} from "../../api/companyApi";

import {
  getReviewsByCompany
} from "../../api/reviewApi";

import ReviewCard from "../../components/ReviewCard/ReviewCard";

import ReviewForm from "../../components/ReviewForm/ReviewForm";

import RatingStars from "../../components/RatingStars/RatingStars";

export default function CompanyDetails() {

  const { id } = useParams();

  const [showReviewForm, setShowReviewForm] =
  useState(false);
  
  const [company,setCompany] =
    useState(null);

  const [reviews,setReviews] =
    useState([]);

  const [sort,setSort] =
    useState("latest");


  const loadData = async () => {

    try {

      const companyRes =
        await getCompanyById(id);

      setCompany(
        companyRes.data.data
      );

      const reviewRes =
        await getReviewsByCompany(
          id,
          sort
        );

      setReviews(
        reviewRes.data.data
      );

    } catch(err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, [sort]);

  if(!company)
    return <div>Loading...</div>;

  return (
    <div
      className="
      max-w-6xl
      mx-auto
      py-10
      "
    >

      {/* Company Section */}

      <div
        className="
        bg-white
        shadow
        rounded-xl
        p-6
        mb-6
        "
      >

        <div
          className="
          flex
          justify-between
          "
        >

          <div>

            <h1
              className="
              text-3xl
              font-bold
              "
            >
              {company.companyName}
            </h1>

            <p
              className="
              text-gray-500
              mt-2
              "
            >
              {company.location}
            </p>

          </div>

          <img
            src={company.logo}
alt={company.companyName}
  className="
  w-32
  h-32
  rounded-xl
  object-cover
  border
  shadow"
          />

        </div>

      </div>

      {/* Rating Summary */}

      <div
        className="
        bg-white
        rounded-xl
        shadow
        p-6
        mb-6
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          "
        >
          {company.avgRating}
        </h2>

        <RatingStars
          rating={
            company.avgRating
          }
        />

        <p
          className="
          text-gray-500
          mt-2
          "
        >
          Based on
          {" "}
          {company.totalReviews}
          {" "}
          Reviews
        </p>

      </div>

      {/* Add Review */}

<div className="mb-6">
  <button
    onClick={() =>
      setShowReviewForm(true)
    }
    className="
      bg-gradient-to-r
      from-purple-600
      to-blue-600
      text-white
      px-6
      py-3
      rounded-lg
      font-medium
    "
  >
    Add Review
  </button>
  {
  showReviewForm && (
    <ReviewForm
      companyId={id}
      onSuccess={() => {
        loadData();
        setShowReviewForm(false);
      }}
      onCancel={() =>
        setShowReviewForm(false)
      }
    />
  )
}
</div>
      {/* Sort */}

      <div className="mb-5">

        <select
          value={sort}
          onChange={(e)=>
            setSort(
              e.target.value
            )
          }
          className="
          border
          p-2
          rounded
          "
        >

          <option value="latest">
            Latest
          </option>

          <option value="highest">
            Highest Rating
          </option>

          <option value="lowest">
            Lowest Rating
          </option>

        </select>

      </div>

      {/* Reviews */}

      <div className="space-y-4">

        {reviews.map(review => (

          <ReviewCard
            key={review._id}
            review={review}
          />

        ))}

      </div>

    </div>
  );
}