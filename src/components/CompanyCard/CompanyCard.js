import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function CompanyCard({ company }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

      <div className="flex gap-5">

        {/* <img
          src={
            company.logo ||
            "https://via.placeholder.com/100"
          }
          alt=""
          className="w-24 h-24 rounded-md object-cover"
        /> */}

          <img
  src={company.logo}
  alt={company.companyName}
  className=" w-24 h-24 rounded-lg object-cover border"
/>
        <div>

          <h2 className="text-3xl font-semibold">
            {company.companyName}
          </h2>

          <p className="text-gray-500 mt-2">
            {company.location}
          </p>

          <div className="flex items-center gap-2 mt-4">

            <span className="font-bold">
              {company.avgRating}
            </span>

            <FaStar className="text-yellow-400" />

            <span>
              {company.totalReviews} Reviews
            </span>

          </div>

        </div>

      </div>

      <div className="text-right">

        <p className="text-gray-500">
          Founded On
        </p>

        <p>
          {new Date(
            company.foundedOn
          ).toLocaleDateString()}
        </p>

        <button
          className="bg-gray-800 text-white px-5 py-2 rounded mt-4"
          onClick={() =>
            navigate(`/companies/${company._id}`)
          }
        >
          Detail Review
        </button>

      </div>
    </div>
  );
}