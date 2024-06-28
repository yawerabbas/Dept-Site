import React , {useState , useEffect} from "react";
import Facultycard from './facultycard';
const Faculty = () => {
  const hod = {
    pic: "https://iitj.ac.in/dept_faculty_pic/ranju.jpg",
    name: "Ranju Mohan",
    desig: "Assistant Professor",
    email: "head_civil@iitj.ac.in",
    phone: "02912801657",
    phd: "Indian Institute of Technology Madras",
    field:
      "Traffic flow theory; Macroscopic and Microscopic modelling of traffic flow; Connected and autonomous vehicles; Dynamic Traffic Assignment",
  };
  const user = {
    pic: "https://iitj.ac.in/dept_faculty_pic/dbhattu.jpg",
    name: "Deepika Bhattu",
    desig: "Assistant Professor",
    email: "dbhattu@iitj.ac.in",
    phone: "0291 280 1654",
    phd: "Indian Institute of Technology Kanpur",
    field:
      "Emission sources, characterization and secondary aerosol formation potential; Real-time aerosol measurements using mass spectrometery techniques; Source apportionment techniques; Physical, chemical and hygroscopic properties of atmospheric aerosols and cloud condensation nuclei (CCN) activity",
  };
  const [items, setitems] = useState([])
  const loadData = async () => {
    let response = await fetch("http://localhost:3500/api/displaydata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
    response = await response.json()
    //setcat(response[1]);
    setitems(response[0])
    console.log(response[0]);
  }
  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="FacultyLists">
      <div className="FacultyMem" style={{ padding: "10px" }}>
        <h3>FACULTY MEMBERS</h3>
        <div className="HOD">
          <h3>HEAD OF DEPARTMENT</h3>
          <Facultycard faculty={hod}></Facultycard>
        </div>
        <div className="otherFaculty">
          <h3>OTHER FACULTY MEMBERS</h3>
          {
            items.map((i)=>{
              return (
                <Facultycard faculty={i}></Facultycard>
              )
              
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default Faculty;
