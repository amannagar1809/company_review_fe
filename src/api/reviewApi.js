import axiosInstance from "../services/axiosInstance";

export const addReview = (data) => {
  return axiosInstance.post("/reviews", data);
};

export const getReviewsByCompany = (
  companyId,
  sort
) => {
  return axiosInstance.get(
    `/reviews/company/${companyId}`,
    {
      params: { sort }
    }
  );
};

export const likeReview = (id) => {
  return axiosInstance.patch(
    `/reviews/${id}/like`
  );
};