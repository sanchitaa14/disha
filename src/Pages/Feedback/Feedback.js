import React, { useRef, useState } from 'react';
import './Feedback.css'; // Make sure to import your CSS file
import emailjs from '@emailjs/browser';

function Feedback() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    subject: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_disha',
        'template_dvn1lvc',
        {
          from_name: form.name,
          to_name: 'Disha',
          from_email: form.email,
          to_email: 'sanchitabhardwaj04@gmail.com',
          message: form.message,
        },
        'iJECXbI8SrncnNnEV'
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
            phone: '',
            subject: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div className="container-feed">
      <h1 className='feed-h1'>Feedback</h1>

      <div className="contact-box">
        <div className="contact-left">
          <h3>Send your request</h3>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input className='feed-input'
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder=""
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input
                className='feed-input'
                  type="number"
                  name="phone"
                  value={form.phone}
                  placeholder="number"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label>Email</label>
                <input
                className='feed-input'
                  type="email"
                  name="email"
                  value={form.email}
                  placeholder="john3122@gmail.com"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input
                className='feed-input'
                  type="text"
                  name="subject"
                  value={form.subject}
                  placeholder="write here"
                  onChange={handleChange}
                />
              </div>
            </div>
            <label>Feedback</label>
            <textarea className='feed-text'
              rows="5"
              name="message"
              placeholder="Your message"
              onChange={handleChange}
              value={form.message}
            ></textarea>

            <button className="btn-feed" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
        <div className="contact-right"></div>
      </div>
    </div>
  );
}

export default Feedback;
