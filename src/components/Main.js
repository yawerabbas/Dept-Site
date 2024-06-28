import React from 'react'
import './main.css'
const Main = () => {
    return (
        <div>
            <section className='know'>
                <div className='tt'>
                    <main className="cont">
                        <img style={{ height: "4rem", marginBottom: "1.5rem", marginRight: "10px" }} src="https://iitj.ac.in/uploaded_docs/dept_upload/cvl/logo_sample_image-2022-10-19-12-38-pm.jpg" alt='logo' />
                        <p>Know More About:</p>
                        <section className="animation">
                            <div className="first"><div>Department</div></div>
                            <div className="second"><div>Architects</div></div>
                        </section>
                    </main>
                    <div className='te'>
                        <p className='bigtext'>
                            The rapidly urbanizing society and increasing quality of life demand reliable and
                            intelligent infrastructure systems which are capable of catering to the societal
                            needs at different scales – from an individual to the community level. Consequently,
                            the civil and infrastructure industry has undergone profound changes and is constantly
                            evolving. However, the new-age designs and innovations in the civil and infrastructure
                            industry can only be driven by a group of engineering graduates having multidisciplinary
                            training and a sound understanding of emerging technologies. The Department of Civil and
                            Infrastructure Engineering, IIT Jodhpur  esatablished in January 2020. We started academics
                            programs in the academic year 2020-2021. The department offers unique programs that incorporate
                            and integrate the elements of conventional civil engineering with advanced transformative technologies such as
                            artificial intelligence (AI), cyber-physical-systems (CPS), digital twins (DT), and automated management and
                            information systems
                        </p>
                    </div>
                </div>
                <div className='ranjuPhoto'>
                    <div className="card" style={{ width: "22rem" }}>
                        <h3 style={{ marginBottom: "1rem" }} className='hod'>Head of Department</h3>
                        <img src="https://iitj.ac.in/dept_faculty_pic/ranju.jpg" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">Ranju Mohan</h5>
                            <p className="card-text"><i>
                                "The Department strives to be internationally renowned center of excellence in education,research,and innovations
                                with a major focus on <b>Sustainability</b> and <b>Digitalization of Infrastructure</b>"
                            </i></p>
                        </div>
                    </div>
                </div>

            </section>

            <section className='sec'>

                <h3 className='focus'>Our Focus</h3>
                <div className='list'>
                    <ul>
                        <li className='el'>Energy and Environment</li>
                        <li className='el'>Building Sciences, Safety, and Services</li>
                        <li className='el'>Applications of AI, IoT, and CPS in Civil and Infrastructure Engineering</li>
                        <li className='el'>Smart and Integrated Infrastructure</li>
                        <li className='el'>Urban Architecture and Planning</li>
                        <li className='el'>Construction Technology and Management</li>
                        <li className='el'>Transportation Engineering</li>
                        <li className='el'>Structural Engineering</li>
                        <li className='el'>Geotechnical Engineering</li>
                        <li className='el'>Water resources Engineering</li>
                        <li className='el'>Engineering Geology</li>
                    </ul>
                </div>
            </section>
            <section className='sec'>

                <h3 className='focus'>Mission</h3>
                <div className='list'>
                    <ul>
                        <li className='el'>Develop unique courses in the field of Civil and Infrastructure Engineering through advanced UG and PG programs with a  multidisciplinary perspective.</li>
                        <li className='el'>Establish high quality teaching and research facilities in the areas of smart, resilient, and sustainable infrastructure engineering to foster the needs of society.</li>
                        <li className='el'>Promote consilient research through application of AI/ML, cyber-physical-systems, digital twin and advanced visualization in the areas of Energy, Environment, Transportation, and Construction.</li>
                        <li className='el'>Promote innovative and entrepreneurial activities through intellectual property generation and transfer.</li>
                        <li className='el'>Nurture the potential of students to become future leaders in the Civil Engineering industry for leadership achievements, scientific breakthroughs and social welfare.</li>
                    </ul>
                </div>
            </section>
            <section className='sec'>
                <h3 className='focus'>News and Events</h3>
                <a href="https://iitj.ac.in/uploaded_docs/Academic%20Calendar%20for%20AY%202022-23%20Semester-I_06062022.pdf"><h1 className='academic'>Academic Calender 2022-23</h1></a>
                <div className='third'>
                    <div className="card ndone" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Research Highlights</h5>
                            <p className="card-text kk">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/" className="btn btn-primary hmm">Click Here</a>
                        </div>
                    </div>
                    <div className="card ndone" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Seminars and Meetings</h5>
                            <p className="card-text kk">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/" className="btn btn-primary hmm">Click Here</a>
                        </div>
                    </div>
                    <div className="card ndone" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">News and Newsletters</h5>
                            <p className="card-text kk">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="/" className="btn btn-primary hmm">Click Here</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Main