import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses , category }) => {
  let allCourses = [];
  const [likedCourses, setLikedcourses] = useState([]);
  
  function getCourse() {
    if(category !== "All"){
      courses[category].forEach((course) => {
        allCourses.push(course);
      });
    }
    else{
      Object.values(courses).forEach( (courseCatagory) => {
        courseCatagory.forEach((course) => {
          allCourses.push(course);
        });
      });
    }
   
    return allCourses;
  }


 
  return (
    <div className="flex flex-wrap  justify-center  gap-4 mb-4 ">
      <div>

      </div>
      {
      getCourse().map( (course) => {
        return <div>
          <Card key={course.id} course={course} likedCourses={likedCourses} setLikedcourses={setLikedcourses}></Card>
        </div>
      })
      }
    </div>
  );
};

export default Cards;
