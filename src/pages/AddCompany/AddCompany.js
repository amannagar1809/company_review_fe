import { useForm } from "react-hook-form";

import { createCompany } from "../../api/companyApi";

import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

import FormInput from "../../components/FormInput/FormInput";

export default function AddCompany() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {

      await createCompany(data);

      toast.success(
        "Company Added Successfully"
      );

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Failed To Add Company"
      );

    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div
        className="
        max-w-3xl
        mx-auto
        bg-white
        rounded-xl
        shadow-md
        p-8
      "
      >

        <h2
          className="
          text-3xl
          font-bold
          mb-8
          text-center
        "
        >
          Add Company
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          <FormInput
            label="Company Name"
            name="companyName"
            register={register}
            errors={errors}
            placeholder="Enter Company Name"
          />

          <FormInput
            label="Location"
            name="location"
            register={register}
            errors={errors}
            placeholder="Enter Location"
          />

          <FormInput
            label="City"
            name="city"
            register={register}
            errors={errors}
            placeholder="Enter City"
          />

          <FormInput
            type="date"
            label="Founded On"
            name="foundedOn"
            register={register}
            errors={errors}
          />

          <div>

            <label className="block mb-2">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Company Description"
              {...register(
                "description"
              )}
              className="
                w-full
                border
                rounded-lg
                p-4
              "
            />

          </div>

          <div>

<input
  type="file"
  accept="image/*"
  {...register("logo")}
  className="
  w-full
  border
  p-3
  rounded
  "
/>

            {/* <input
              type="text"
              placeholder="Paste Image URL"
              {...register("logo")}
              className="
                w-full
                border
                rounded-lg
                p-3
              "
            /> */}

          </div>

          <button
            disabled={isSubmitting}
            className="
              w-full
              py-3
              rounded-lg
              text-white
              bg-gradient-to-r
              from-purple-600
              to-blue-600
              hover:opacity-90
            "
          >
            {
              isSubmitting
                ? "Saving..."
                : "Add Company"
            }
          </button>

        </form>

      </div>

    </div>
  );
}