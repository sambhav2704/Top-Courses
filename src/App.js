import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {
  const [courses, setCourses] = useState("");
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    
    setLoader(true);
    const fetchData = async () => {
      try {
        const responce = await fetch(apiUrl);
        const output = await responce.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something Went Worng")
      }
      setLoader(false);
    };
    fetchData();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col">
      <div>
        <Navbar></Navbar>
      </div>

      <div className=" bg-bgDark2 h-full">
        <div>
          <Filter filterData={filterData}></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {!loading ? <Cards courses={courses}></Cards> : <Spinner />}
        </div>
      </div>
    </div>
  );
};

export default App;
