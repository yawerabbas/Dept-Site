import React from 'react'
import './AcademicProgramms.css';
import photo from './pg_photo.jpeg'
const AcademicProgrammsPG = () => {
  return (
    <div>
        <img className='canvas' src="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/slide_05092022.png" alt="btech_photo" />
      <section className='btech'>
        <div className='btech_head_d'>
          <hr style={{ width: "15rem", height: "2rem", padding: "2rem" }} />
          <h1 className='btech_head'>POSTGRADUATE  PROGRAMS</h1>
        </div>
        <div className='stats'>
          <div style={{ paddingRight: "5rem", paddingLeft: "5rem" }}>
            <p>30+</p>
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
            <h1 className='btech_head'>ALL - PG -  PROGRAMS</h1>
          </div>
          <div className='list'>
            <ul>
              <li className='el'>M Tech/M Tech-Ph D in Civil and Infrastructure Engineering with Specialization in Energy</li>
              <p>To cater to future needs and emerging infrastructure, this program exclusively designed with a tremendous focus on energy sources such as solar, wind, and hydropower. The program is offered to the students/candidates with diverse engineering backgrounds from India and abroad who are interested in learning and applying the fundamental and advanced technologies (energy conversion, transmission, distribution, storage, and conservation) in different areas of energy engineering. The program equips students with a unique set of skills desired in multidisciplinary and dynamic energy industries.</p>
              <li className='el'>M Tech/M Tech-Ph D in Civil and Infrastructure Engineering with Specialization in Environmental Engineering</li>
              <p>
              The program aims to produce scientifically and technologically resourceful professionals with a broad knowledge of environmental processes and engineering techniques integrated with basic knowledge of biosafety, toxicology, and other public health issues required in identifying emerging complex problems at the interface of environmental engineering and public health, and creatively developing effective solutions. This specially tailored program will enable students to think proactively and preemptively while confronting public health challenges emerging out of local and global environmental issues. The integration of major thrust areas of Civil, Infrastructure, and Environmental Engineering with Public health in this cross-disciplinary program will enable graduates to interface between urban development and the sustainable environment
              </p>
            </ul>
          </div>
        </div>
        <div className='curriculam'>
          <div className="card ndone" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Curriculam</h5>
              <p className="card-text kk">B.TECT REGULAR AND SPECIALIZATION</p>
              <a href="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/UG_Civil%20and%20Infrastructure%20Engineering%20Curriculum%20_document-2020-10-03-20-04-pm.pdf" className="btn btn-primary hmm">PDF - CURRICULUM</a>
            </div>
          </div>
        </div>
        <div className='aboutUs' style={{padding:"2rem"}} >
          
          <div className='tx' style={{padding:"5rem"}}>
          <h1>ABOUT US</h1>
            <p>
            Through undergraduate programs, the department aims to provide an expanded but holistic understanding of different civil and infrastructure systems and an in-depth understanding of the differences, similarities, and relations between different scales and components of it. The students will be trained to integrate conventional methods with emerging technologies to design intelligent civil and infrastructure systems from a multidisciplinary perspective. They also get exposed to advanced transformative techniques such as Internet-of-Things (IoT), machine learning, big data, cyber-physical systems, and digital twin (DT) in the design and maintenance of different civil and infrastructure systems. 
            </p>
          </div>
          <img style={{width:"50%" , padding:"5rem" , borderRadius:"10px"}} src={photo} alt="ugStudents"/>
        </div>
      </section>
      <section>
      <div className='btech_head_d'>
          <hr style={{ width: "15rem", height: "2rem", padding: "2rem" }} />
          <h1 className='btech_head'>DOCTORAL  PROGRAMS</h1>
        </div>
        <div className="container stuwie">
        <div className="ug">
        <div className="link"  style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>Rock Mechanics and Engineering Geology</p>
            </div>
          </div>
        </div>
        <div className="link"  style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>Transportation Engineering</p>
            </div>
          </div>
        </div>
        <div className="link"  style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>Environmental Engineering</p>
            </div>
          </div>
        </div>
        <div className="link"  style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>Structural Engineering</p>
            </div>
          </div>
        </div>
        <div className="link"  style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>Geotechnical Engineering</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
      
    </div>
  )
}

export default AcademicProgrammsPG