import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CourseService from "../services/course.service";
import axios from "axios";

const EnrollComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const history = useHistory();
  let [searchInput, setSearchInput] = useState("");
  let [searchResult, setSearchResult] = useState(null);
  let [message, setMessage] = useState("");
  const handleTakeToLogin = () => {
    history.push("/login");
  };
  const handleChangeInput = (e) => {
    setSearchInput(e.target.value);
  };
  const handleSearch = () => {
    CourseService.getCourseByName(searchInput)
      .then((data) => {
        console.log(data);
        history.go(0);
        setSearchResult(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEnroll = (e) => {
    console.log(currentUser.user._id, "currentUser.user._id");
    console.log("handleenroll working ");
    console.log(e, "e");

    CourseService.enroll(e.target.id, currentUser.user._id)
      .then(() => {
        window.alert("Done Enrollment");
        history.push("/course");
      })
      .catch((err) => {
        console.log(err.response);
        setMessage(err.response.data);
      });
  };

  let [courseData, setCourseData] = useState(null);
  useEffect(() => {
    console.log("Using effect");

    let _id;
    if (currentUser) {
      _id = currentUser.user._id;
    } else {
      _id = "";
    }

    if (currentUser.user.role == "student") {
      CourseService.getAllCourses(_id)
        .then((data) => {
          console.log(data, "data");
          setCourseData(data.data);
        })
        .catch((error) => {
          console.log(error);
          setMessage(error.response.data);
        });
    }
  }, []);

  // console.log(CourseService);

  return (
    <div style={{ padding: "3rem" }}>
      {!currentUser && (
        <div>
          <p>You must login first before searching for courses.</p>
          <button class="btn btn-primary btn-lg" onClick={handleTakeToLogin}>
            Take me to login page.
          </button>
        </div>
      )}
      {currentUser && currentUser.user.role == "instructor" && (
        <div>
          <h1>Only students can enroll in courses.</h1>
        </div>
      )}
      {currentUser && currentUser.user.role == "student" && (
        <div className="search input-group mb-3">
          <input
            onChange={handleChangeInput}
            type="text"
            class="form-control"
            placeholder="Please enter the course name"
          />

          <button onClick={handleSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      )}
      {message && <div className="alert alert-danger">{message}</div>}
      {currentUser && courseData && courseData.length != 0 && (
        <div>
          {courseData.map((course) => (
            <div id={course._id} className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>

                <p>Instructor: {course.instructor.username}</p>

                <p className="card-text">{course.description}</p>
                <p>Student Count: {course.students.length}</p>
                <p>Price: ${course.price}</p>
                {currentUser && currentUser.user.role == "student" && (
                  <button className="btn btn-primary " onClick={handleEnroll} id={course._id}>
                    Enroll
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {currentUser && searchResult && searchResult.length != 0 && (
        <div>
          <p>Data we got back from API.</p>

          {message && <div className="alert alert-danger">{message}</div>}

          {searchResult.map((course) => (
            <div key={course._id} className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <p>Price: {course.price}</p>
                <p>Student: {course.students.length}</p>

                <a
                  href="#"
                  onClick={handleEnroll}
                  className="card-text"
                  className="btn btn-primary"
                  id={course._id}
                >
                  Enroll
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnrollComponent;
