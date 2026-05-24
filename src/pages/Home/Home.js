import { useEffect, useState, useMemo } from "react";
import { getCompanies } from "../../api/companyApi";
import Navbar from "../../components/Navbar/Navbar";
import CompanyCard from "../../components/CompanyCard/CompanyCard";
import { useNavigate } from "react-router-dom";
import CityFilter from "../../components/CityFilter/CityFilter";
import SortDropdown from "../../components/SortDropdown/SortDropdown";
import CompanySkeleton from  "../../components/CompanySkeleton/CompanySkeleton";
import EmptyCompanyState from  "../../components/EmptyCompanyState/EmptyCompanyState";

import useDebounce from "../../hooks/useDebounce";
export default function Home() {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(true);
  const [search,setSearch] = useState("");
  const [city,setCity] = useState("");
  const [sort,setSort] = useState("name");
  const [selectedCity, setSelectedCity] = useState();
  const debouncedSearch = useDebounce(search);
  const loadCompanies = async () => {
    try {
      setLoading(true);

      const response = await getCompanies({
      search:
      debouncedSearch,
      city,
      sort
   });

      // Adjust this line if your backend response shape is different
      setCompanies(response.data?.data ?? []);
    } catch (error) {
      console.log(error);
    }  finally {
   setLoading(false);
 }
  };

  const cities = useMemo(() => {
  return [...new Set(companies.map(c => c.city))];
}, [companies]);

  useEffect(() => {
    loadCompanies();
  }, [ debouncedSearch, city, sort]);

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto py-10">
        {/* Filter Section */}
         <div className="w-72">

<CityFilter
  cities={cities}
  value={selectedCity}
  onChange={(e) => setSelectedCity(e.target.value)}
/>

 </div>
        <div className="flex justify-between mb-10">
          <input
            placeholder="Select City"
            className="border p-3 rounded w-[350px]"
          />

          <button
            onClick={loadCompanies}

   className="
   bg-gradient-to-r
   from-purple-600
   to-blue-600
   text-white
   px-8
   py-3
   rounded-lg
   "
          >
            Find Company
          </button>

          <button
            onClick={() => navigate("/add-company")}
   className="
   bg-gradient-to-r
   from-purple-600
   to-blue-600
   text-white
   px-8
   py-3
   rounded-lg
   "
          >
            + Add Company
          </button>

 <SortDropdown
   value={sort}
   onChange={(e)=>
    setSort(
     e.target.value
    )
   }
 />
          {/* <select className="border p-3 rounded">
            <option>Name</option>
            <option>Rating</option>
          </select> */}
        </div>

        {/* Company List */}

{
 loading
 ?
 (
   <>
    <CompanySkeleton />
    <CompanySkeleton />
    <CompanySkeleton />
   </>
 )
 :
 companies.length
 ?
 (
   companies.map(company => (

    <CompanyCard
      key={company._id}
      company={company}
    />

   ))
 )
 :
 (
   <EmptyCompanyState />
 )
}

        {/* <div className="space-y-6">
          {companies.map((company) => (
            <CompanyCard key={company._id} company={company} />
          ))}
        </div> */}
      </div>
    </>
  );
}
