import axios from "axios";
// import axois from "axios";
// import Course from "./server/models/course-model";
const API_URL = "http://localhost:8080/api/courses";

class CourseService {
  post(title, description, max, price, startDate) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.post(
      API_URL,
      { title, description, max, price, startDate },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  getEnrolledCourses(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    // console.log(_id, "idididididid");

    return axios.post(
      API_URL + "/student",
      { _id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  getAllCourses(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_URL + "/allcourses/allcourses", {
      headers: {
        Authorization: token,
      },
    });
  }

  getCourseByName(name) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    return axios.get(API_URL + "/findByName/" + name, {
      headers: {
        Authorization: token,
      },
    });
  }

  get(_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    console.log(_id, "_id");

    return axios.post(
      API_URL + "/instructor",
      { _id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }
  getInstructor(_id, instructor_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    // console.log(_id, "_id");
    // console.log(instructor_id, "instructor_id");

    return axios.post(
      API_URL + "/instructor/" + instructor_id,
      { _id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  enroll(_id, user_id) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    // console.log(user_id, "user_id");
    // console.log(user_id, "id");
    return axios.post(
      API_URL + "/enroll/" + _id,
      { user_id },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  editCourse(_id, title, description, max, price, startDate) {
    let token;
    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }

    console.log(_id, "id");

    return axios.post(
      API_URL + "/" + _id,
      { title, description, max, price, startDate },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  deleteStudentCourse(_id, user) {
    let token;

    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    // console.log(_id, { user }, "fsdfsdfds");

    return axios.post(
      API_URL + "/deletestudent/" + _id,
      { user },
      {
        headers: {
          Authorization: token,
        },
      }
    );
  }

  deleteCourse(_id) {
    let token;

    if (localStorage.getItem("user")) {
      token = JSON.parse(localStorage.getItem("user")).token;
    } else {
      token = "";
    }
    // console.log(_id);

    return axios.delete(API_URL + "/deletecourse/" + _id, {
      headers: {
        Authorization: token,
      },
    });
  }
}

export default new CourseService();
