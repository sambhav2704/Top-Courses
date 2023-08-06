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
  const [category , setCategory] = useState(filterData[0].title)

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

      <div className=" flex-1 bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} ></Filter>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] h-full ">
          {!loading ? <Cards courses={courses} category={category} ></Cards> : <Spinner />}
        </div>
      </div>
    </div>
  );
};

export default App;
