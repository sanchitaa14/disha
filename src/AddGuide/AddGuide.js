import axios from "../axios";
import React, { useState } from "react";
import styled from "styled-components";
function AddGuide() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [number, setNumber] = useState(0);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const addGuide = (e) => {
    e.preventDefault();

    axios
      .post("/guides/add", { name,price,location, image, number, description })
      .then(() => {
        setName("");
        setImage("");
        setPrice(0);
        setNumber(0);
        setDescription("");
        setLocation("");

      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <Logo>
        <h1>Disha</h1>
      </Logo>

      <FormContainer>
        <h3>Register Yourself as a Guide</h3>

        <InputContainer>
          <p>Name</p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </InputContainer>
        <InputContainer>
          <p>ImageURL</p>
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </InputContainer>
        <InputContainer>
          <p>A Short Description</p>
          <input
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </InputContainer>
        <InputContainer>
          <p>Location(City)</p>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </InputContainer>
        <InputContainer>
          <p>Number</p>
          <input
            type="number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </InputContainer>

        <Button onClick={addGuide}>Add Guide</Button>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;

const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
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