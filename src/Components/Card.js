
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let setLikedcourses = props.setLikedcourses;
  let likedCourses = props.likedCourses;
  function clickHandler() {
    // already liked course
    if (likedCourses.includes(course.id)) {
      setLikedcourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      //pehle se liked nahi hai

      if (likedCourses.length === 0) {
        //empty array
        setLikedcourses([course.id]);
      } else {
        //non empty array
        setLikedcourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className=" w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden h-full">
      <div className="relative">
        <img src={course.image.url} alt={course.image.alt} className=""></img>

        <div className=" rounded-full h-[40px] w-[40px] bg-white absolute bottom-3 right-2 grid place-items-center">
          <button onClick={clickHandler}>

            {
              likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem" />)
            }
           
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className=" text-white  font-semibold text-lg leading-6 ">
          {course.title}
        </p>
        <p className=" mt-2 text-white ">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
