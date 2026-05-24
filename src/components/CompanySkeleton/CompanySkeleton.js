export default function CompanySkeleton() {
  return (
    <div
      className="
      bg-white
      rounded-xl
      p-6
      animate-pulse
      "
    >

      <div className="flex gap-4">

        <div
          className="
          w-24
          h-24
          bg-gray-200
          rounded
          "
        />

        <div className="flex-1">

          <div
            className="
            h-6
            bg-gray-200
            rounded
            w-1/2
            "
          />

          <div
            className="
            h-4
            bg-gray-200
            rounded
            mt-4
            "
          />

          <div
            className="
            h-4
            bg-gray-200
            rounded
            mt-2
            "
          />

        </div>

      </div>

    </div>
  );
}