import React, { useState } from "react";
import coursesData from "../data/courses.json";
import styles from "./courses.module.css";

function CourseList() {
  const [filterProfessor, setfilterProfessor] = useState("");

  //return either true or false
  const filterCourse = coursesData.filter((course) =>
    course.instructor.toLowerCase().includes(filterProfessor.toLowerCase())
  );

  return (
    <div className={styles.box}>
      <h1>Course List</h1>
      <input
        type="text"
        placeholder="Search by name"
        value={filterProfessor}
        //create event e.
        //when something changes on the input tag, a event is created
        //which contains all the information about change.
        //and the value of the input can be received by e.target.value
        onChange={(e) => setfilterProfessor(e.target.value)}
      />
      <ul>
        {filterCourse.map((course) => (
          <li key={course.id}>
            Course Name: {course.name} <br />
            Instructor: {course.instructor}
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
