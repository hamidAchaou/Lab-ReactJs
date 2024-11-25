import React, { useReducer } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  background-color: ${(props) =>
    props.type === "submit" ? "#007bff" : "#6c757d"};
  color: white;

  &:hover {
    background-color: ${(props) =>
      props.type === "submit" ? "#0056b3" : "#5a6268"};
  }
`;

const FormComponent = () => {
  const initialState = {
    userName: "",
    email: "",
    notes: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "input":
        return { ...state, [action.field]: action.value };
      case "resete":
        return initialState;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handelResets = () => {
    dispatch({ type: "reset" });
  };
  const handleChange = (e) => {
    dispatch({
      type: "input",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handelSubmite = (e) => {
    e.preventDefault();
    console.log(state);
    
  };
  return (
    <FormContainer>
      <Title>User Form</Title>
      <Form onSubmit={handelSubmite}>
        <Label htmlFor="userName">User Name</Label>
        <Input
          type="text"
          id="userName"
          name="userName"
          value={state.userName}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          name="notes"
          rows="4"
          value={state.notes}
          onChange={handleChange}
          placeholder="Enter additional notes"
        />

        <ButtonContainer>
          <Button type="reset" onClick={handelResets}>
            Reset
          </Button>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default FormComponent;
