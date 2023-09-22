import studentInfo from "../data/students.json";
import styles from "./students.module.css";

function StudentList() {
  return (
    <div>
      <div className={styles.box}>
        <h1>StudentList</h1>
        {studentInfo.map((student, index) => {
          return (
            <div key={index}>
              Name: {student.name} <br />
              Id: {student.id} <br />
              Age: {student.age} <br />
              Courses: {student.courses.join(", ")} <br /> <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentList;
