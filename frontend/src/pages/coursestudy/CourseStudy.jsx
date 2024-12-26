import React, { useEffect } from "react";
import "./coursestudy.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  // Check if the user is authorized to access this page
  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  // Fetch course data based on the course ID
  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id]);

  return (
    <>
      {course && (
        <div className="course-study-page">
          <img src={`${server}/${course.image}`} alt={course.title} width={350} />
          <h2>{course.title}</h2>
          <h4>{course.description}</h4>
          <h5>Organized by - {course.createdBy}</h5>
          {/* <h5>Duration - {course.duration} weeks</h5> */}

          {/* Button to join WhatsApp */}
          <button className="common-btn">
            <a href={course.whatsapp} target="_blank" rel="noopener noreferrer">
              Join Now
            </a>
          </button>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
