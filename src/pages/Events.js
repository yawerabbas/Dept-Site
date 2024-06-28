import React, { useState } from 'react';
import './events.css';

const Event = () => {
  const [formStatus, setFormStatus] = useState('Send');
  const [formSuccess, setFormSuccess] = useState(false);
  const [usera, setusera] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    const response = await fetch("http://localhost:3500/api/createnote", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name: usera.name, email: usera.email, message: usera.message })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    // Simulate successful submission
    setFormStatus('Send');
    setFormSuccess(true);
    setusera({ name: '', email: '', location: '', message: '' });
  };

  const handleChange = (event) => {
    setusera({ ...usera, [event.target.name]: event.target.value });
  };

  return (
    <div className="container mt-5" style={{ padding: '50px' }}>
      <div className="ceve">
        <div className="map">
          <iframe
            className='amap'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1589.023534654505!2d73.11601691806675!3d26.478776812725307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941eb3d67760b67%3A0xba41dc0982107219!2sDepartment%20of%20Civil%20and%20Infrastructure%20Engineering%2C%20IIT%20Jodhpur!5e0!3m2!1sen!2sin!4v1684794309027!5m2!1sen!2sin"
            style={{ allowfullscreen: "" }}
            title="Map"
          ></iframe>
        </div>
        <div className="formc card">
          <h2 className="mb-3">Contact Us</h2>
          {formSuccess && (
            <div className="alert alert-success" role="alert">
              Message sent successfully!
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input
                className="form-control"
                type="text"
                id="name"
                required
                name="name"
                value={usera.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                id="email"
                required
                name="email"
                value={usera.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                required
                name="message"
                value={usera.message}
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-danger" type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Event;
