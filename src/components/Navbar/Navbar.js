import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold">
          Review<span className="text-purple-600">&RATE</span>
        </h1>

        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-4 py-2 w-[350px]"
          />

          <FaSearch
            className="absolute right-3 top-3 text-purple-600"
          />
        </div>

        <div className="flex gap-8">
          <button>SignUp</button>
          <button>Login</button>
        </div>

      </div>
    </div>
  );
}