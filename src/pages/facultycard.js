import React from "react";
import "./Faculty.css";

export default function Facultycard(props) {
  return (
    <div className="FacultyCard">
      <div className="INFO">
        <div className="FacultyImg">
          <img src={props.faculty.pic} alt="" />
        </div>
        <div className="FacultyDetails">
          <div className="HL1"></div>
          <div className="FacultyName">
            <h2>{props.faculty.name}</h2>
            <h3>{props.faculty.designation}</h3>
          </div>
          <div className="HL2"></div>
          <div className="HL1"></div>
          <div className="FacultyInfo">
            <div className="FacultyContacts">
              <h3>eMail:{props.faculty.email}</h3>
              <h3>Phone:{props.faculty.phone}</h3>
              <h3>PH.D:{props.faculty.phd}</h3>
            </div>
            <div className="VL1"></div>
            <div className="FacultySubject">
              <h3>{props.faculty.area}</h3>
            </div>
          </div>
          <div className="HL1"></div>
        </div>
      </div>
      <button className="Facultybtn">View Work</button>
    </div>
  );
}
