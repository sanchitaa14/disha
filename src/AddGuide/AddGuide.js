import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

function AddGuide() {
  const formRef = useRef();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
    number: "",
    image: "",
    description: "",
    anumber: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        'service_7nxdcxu',
        'template_xxmnpwu',
        formRef.current,
        'BmEW-G3_nkGJJ-pF-'
      );

      console.log(response);

      if (response && response.status === 200) {
        alert('Thank you. We will get back to you as soon as possible, and let you know if you are eligible or not.');

        setCredentials({
          name: "",
          email: "",
          password: "",
          geolocation: "",
          number: "",
          image: "",
          description: "",
          anumber: ""
        });
      } else {
        throw new Error(`Failed to send email. Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error during email sending:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Container>
      <FormContainer ref={formRef} onSubmit={handleSubmit}>
        <h3>Register Yourself as a Guide</h3>

        {/* ... your existing input fields with ref attribute */}
        <InputContainer>
          <p>Name</p>
          <input
            type="text"
            placeholder="Full Name"
            id="fullname-field"
            name="name"
            value={credentials.name}
            onChange={onChange}
          />
        </InputContainer>
      
        <InputContainer>
          <p>ImageURL</p>
          <input
            type="text"
            placeholder="image url"
            id="image-field"
            name="image"
            value={credentials.image}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <p>A Short Description</p>
          <input
            type="text"
            placeholder="Short description"
            id="description-field"
            name="description"
            value={credentials.description}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <p>Location(City)</p>
          <input
            type="text"
            placeholder="Location"
            id="location-field"
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="password"
            id="password-field"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />

        </InputContainer>
        <InputContainer>
          <p>Email:</p>
          <input
            type="text"
            placeholder="email"
            id="email-field"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <p> Phone Number:</p>
          <input
            type="number"
            placeholder="Phone Number"
            id="number-field"
            name="number"
            value={credentials.number}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer>
          <p>Adhaar Number:</p>
          <input
            type="number"
            placeholder="Aadhar Number"
            id="anumber-field"
            name="anumber"
            value={credentials.anumber}
            onChange={onChange}
          />
        </InputContainer>

        {/* ... other input fields with ref attribute */}

        <Button type="submit"><Link to ="/profile">Add Guide </Link></Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
background-color: light-grey;
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  margin-top: 5rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: radial-gradient(transparent 60%, rgb(0, 0, 0, 0.7));
  backdrop-filter: blur(10px);
  box-shadow: 0 0 10px 4px rgb(0, 0, 0, 0.4);
  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default AddGuide;
