
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Research from './pages/Research';
import Faculty from './pages/Faculty';
import Student from './pages/Student';
import Events from './pages/Events';
import Achievements from './pages/Achievements';
import AcademicProgramms from './pages/AcademicProgramms';
import AcademicProgrammsPG from './pages/AcademicProgrammsPG';
import Footer from './components/Footer';
import StudentPG2022 from './studentspage/StudentsPG2022'
import StudentPG2021 from './studentspage/StudentsPG2021'
import StudentUG2023 from './studentspage/StudentsUG2023'
import StudentUG2022 from './studentspage/StudentsUG2022'
import StudentUG2021 from './studentspage/StudentsUG2021'
import StudentUG2020 from './studentspage/StudentsUG2020'
import StudentPHD from './studentspage/StudentsPHD'
import Preloader from './components/Preloader';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Regular from './pages/Regular';
import Smart from './pages/Smart';
import Environ from './pages/Environ';
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {
        loading ? (<Preloader />) :
          (
            <div>
              <Header />

              <BrowserRouter>
                <Navbar />
                <Routes>
                  <Route exact path='/' element={< Home />}></Route>
                  <Route exact path="Achievements" element={<Achievements />} />
                  <Route exact path="AcademicProgramms" element={<AcademicProgramms />} />
                  <Route exact path="AcademicProgrammsPG" element={<AcademicProgrammsPG />} />
                  <Route exact path="Research" element={<Research />} />
                  <Route exact path="Faculty" element={<Faculty />} />
                  <Route exact path="Students" element={<Student />} />
                  <Route exact path="Students/UG2020" element={<StudentUG2020 />} />
                  <Route exact path="Students/UG2021" element={<StudentUG2021 />} />
                  <Route exact path="Students/UG2022" element={<StudentUG2022 />} />
                  <Route exact path="Students/UG2023" element={<StudentUG2023 />} />
                  <Route exact path="Students/PG2021" element={<StudentPG2021 />} />
                  <Route exact path="Students/PG2022" element={<StudentPG2022 />} />
                  <Route exact path="Students/PHD" element={<StudentPHD />} />
                  <Route exact path="AcademicProgramms/regular" element={<Regular />} />
                  <Route exact path="AcademicProgramms/smart" element={<Smart />} />
                  <Route exact path="AcademicProgramms/environ" element={<Environ />} />
                  <Route exact path="Events" element={<Events />} />
                </Routes>
                <Footer />
              </BrowserRouter>
            </div>
          )
      }

    </div>
  );
}

export default App;

