import React from "react";

const About = () => {
  return (
    <div className="container about">
      <div className="title">
        <h2>Task Organiser 3.0</h2>
      </div>
      <div>
        <p className="text para1">
          This project was bootstrapped with Create React App for the frontend
          and Express generator for the Nodejs backend.
        </p>
        <p className="text">
          This is a simple 3- tier web application which can be used to schedule
          activities. The application consists of a Frontend React application,
          Backend (Node js, Express js) and a Relational database - PostgreSQL.
        </p>
      </div>
    </div>
  );
};

export default About;
