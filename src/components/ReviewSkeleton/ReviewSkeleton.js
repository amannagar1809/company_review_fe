export default function ReviewSkeleton() {
  return (
    <div
      className="
      bg-white
      p-5
      rounded-xl
      animate-pulse
      "
    >

      <div
        className="
        h-5
        bg-gray-200
        rounded
        w-1/3
        "
      />

      <div
        className="
        h-4
        bg-gray-200
        mt-3
        rounded
        "
      />

      <div
        className="
        h-4
        bg-gray-200
        mt-2
        rounded
        "
      />

    </div>
  );
}