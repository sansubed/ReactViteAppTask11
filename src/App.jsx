import React from "react";
import CourseList from "./components/CourseList";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <StudentList />
      <CourseList />
    </div>
  );
}

export default App;
