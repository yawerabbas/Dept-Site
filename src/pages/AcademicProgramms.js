import React from 'react'
import './AcademicProgramms.css'
import photo from './ug_photo.jpeg'
import {Link} from 'react-router-dom'
const AcademicProgramms = () => {
  return (
    <div>
      <img className='canvas' src="https://iitj.ac.in/department/img/civil/Slide%202-UG%20program.png" alt="btech_photo" />
      <section className='btech'>
        <div className='btech_head_d'>
          <hr style={{ width: "15rem", height: "2rem", padding: "2rem" }} />
          <h1 className='btech_head'>UNDERGRADUATE  PROGRAMS</h1>
        </div>
        <div className='stats'>
          <div style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
            <p>100+</p>
            <p>STUDENTS</p>
          </div>
          <div style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
            <p>50+</p>
            <p>PROJECTS</p>
          </div>
          <div style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
            <p>10+</p>
            <p>LABS AND PRACTICAL</p>
            <p>INNOVATIONS</p>
          </div>
        </div>
        <div className='mnv'>
          <div className='m'>
            <div className='btech_head_d'>
              <hr style={{ width: "15rem", height: "2rem", padding: "2rem" }} />
              <h1 className='btech_head'>Mission</h1>
            </div>
            <ul className='list'>
              <li className='el'>Develop unique courses in the field of Civil and Infrastructure Engineering through advanced UG and PG programs with a  multidisciplinary perspective.</li>
              <li className='el'>Establish high quality teaching and research facilities in the areas of smart, resilient, and sustainable infrastructure engineering to foster the needs of society.</li>
              <li className='el'>Promote consilient research through application of AI/ML, cyber-physical-systems, digital twin and advanced visualization in the areas of Energy, Environment, Transportation, and Construction.</li>
            </ul>
          </div>
          <div className='v'>
            <div className='btech_head_d'>
              <hr style={{ width: "15rem", height: "2rem", padding: "2rem" }} />
              <h1 className='btech_head'>Vision</h1>
            </div>
            <p className="card-text">
              "The Department strives to be internationally renowned center of excellence in education,research,and innovations
              with a major focus on Sustainability and Digitalization of Infrastructure"
            </p>
          </div>

        </div>
        <div className='ugp'>
          <div className='btech_head_d'>
            <hr style={{ width: "15rem", height: "2rem", padding: "2rem" }} />
            <h1 className='btech_head'>ALL - UG -  PROGRAMS</h1>
          </div>
          
          <div className='list'>
            <ul>
              <li className='el' style={{ fontSize: "20px", fontWeight: "400", padding: "10px" }}><b>B Tech [Regular] Civil and Infrastrcuture Engineering</b></li>
              <Link to = "/AcademicProgramms/regular" >List Of Courses</Link>
              <li className='el' style={{ fontSize: "20px", fontWeight: "400", padding: "10px" }}><b>B Tech Civil and Infrastrcuture Engineering with specialization in Environmental Engineering.</b></li>
              <Link to = "/AcademicProgramms/environ" >List Of Courses</Link>
              
              
              <li className='el' style={{ fontSize: "20px", fontWeight: "400", padding: "10px" }}><b>B Tech Civil and Infrastrcuture Engineering with specialization in Smart Infrastructure.</b></li>
              <Link to = "/AcademicProgramms/smart" >List Of Courses</Link>
              
            </ul>
          </div>
        </div>
        <div className='curriculam'>
          <div className="card nndone" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-titlen">Curriculam</h5>
              <p className="card-text kkn">B.TECT REGULAR AND SPECIALIZATION</p>
              <a href="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf" className="btn btn-primary hmmn">PDF - CURRICULUM</a>
            </div>
          </div>
        </div>
        <div className='aboutUs' style={{ padding: "2rem" }} >

          <div className='tx' style={{ padding: "5rem" }}>
            <h1>ABOUT US</h1>
            <p>
              Through undergraduate programs, the department aims to provide an expanded but holistic understanding of different civil and infrastructure systems and an in-depth understanding of the differences, similarities, and relations between different scales and components of it. The students will be trained to integrate conventional methods with emerging technologies to design intelligent civil and infrastructure systems from a multidisciplinary perspective. They also get exposed to advanced transformative techniques such as Internet-of-Things (IoT), machine learning, big data, cyber-physical systems, and digital twin (DT) in the design and maintenance of different civil and infrastructure systems.
            </p>
          </div>
          <img style={{ width: "50%", padding: "5rem", borderRadius: "10px" }} src={photo} alt="ugStudents" />
        </div>
      </section>

    </div>
  )
}

export default AcademicProgramms