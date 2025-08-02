import React from 'react';

const CourseDetails = () => {
  const courses = ['ReactJS', 'Node.js', 'MongoDB'];
  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>🎓 {course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
