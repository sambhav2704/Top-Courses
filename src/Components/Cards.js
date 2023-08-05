import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];
  const [likedCourses, setLikedcourses] = useState([]);
  
  function getCourse() {
    Object.values(courses).forEach((courseCatagory) => {
      courseCatagory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  }

 
  return (
    <div className="flex flex-wrap  justify-center  gap-4 mb-4 ">
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
