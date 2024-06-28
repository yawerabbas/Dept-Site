import React from 'react'
import './students.css'
import { Link } from "react-router-dom";
const Student = () => {
  return (
    <div className='container stuwie'>
      <div className="ug">
        <Link className="link" to='/Students/UG2020' style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>UG2020</p>
            </div>
          </div>
        </Link>
        <Link className="link" to='/Students/UG2021' style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>UG2021</p>
            </div>
          </div>
        </Link>
        <Link className="link" to='/Students/UG2022' style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>UG2022</p>
            </div>
          </div>
        </Link>
        <Link className="link" to='/Students/UG2023' style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>UG2023</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="phd">
        <Link className="link" to='/Students/PHD' style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>PhD</p>
            </div>
          </div>
        </Link>
        <Link className="link" to='/Students/PHD' style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>Mtech-PhD</p>
            </div>
          </div>
        </Link>
      </div>
      <div className="pg">
        <Link className="link" to='/Students/PG2021' style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>MTech2021</p>
            </div>
          </div>
        </Link>
        <Link className="link" to='/Students/PG2022' style={{ textDecoration: 'none' }}>
          <div className= "card jk">
            <div className="card-bodystudent">
              <p className="card-textsudent ttxt" style={{ color: "Red" }}>Mtech2022</p>
            </div>
          </div>
        </Link>
      </div>
      
    </div>
  )
}

export default Student