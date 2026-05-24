export default function FormInput({
  label,
  register,
  name,
  errors,
  type = "text",
  placeholder
}) {
  return (
    <div>

      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="
          w-full
          border
          rounded-lg
          px-4
          py-3
          outline-none
          focus:ring-2
          focus:ring-purple-500
        "
      />

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">
          {errors[name].message}
        </p>
      )}

    </div>
  );
}