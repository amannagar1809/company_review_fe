import axiosInstance from "../services/axiosInstance";

export const getCompanies = (params) => {
  return axiosInstance.get("/companies", { params });
};

export const getCompanyById = (id) => {
  return axiosInstance.get(`/companies/${id}`);
};

export const createCompany = (data) => {
  return axiosInstance.post("/companies", data, {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    });
};