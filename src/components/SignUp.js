import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";

import firebaseService from '../services/firebase.service'
import { LoginContext } from "../providers/LoginProvider"

import { 
  Title,
  FormGroup,
  FormInput,
  SubmitButton, 
  SignUpDiv,
  SignUpForm
} from "./styled";

function SignUp({history}) {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUserHandler = (event, email, password) => {
        event.preventDefault();
        firebaseService.createUser(email, password);
        history.push("/");
        setEmail("");
        setPassword("");
    };
    
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
    
    const { user } = useContext(LoginContext);

    if(user !== null) {
      return <Redirect to="/" />;
    }

    return (
      <SignUpDiv>
        <Title>To Do List</Title>
        <h3>Cadastre-se</h3>
        <SignUpForm onSubmit={handleSubmit}>
          <FormGroup id="email">
            <FormInput
              autoFocus
              type="email"
              value={email}
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup id="password">
            <FormInput
              type="password"
              value={password}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <SubmitButton block type="submit" disabled={!validateForm()} onClick = {(e) => {createUserHandler(e, email, password)}}>
            Cadastrar
          </SubmitButton>
          <p className="text-center my-3">
            Já possui conta?{" "}
            <Link to="login">
              Entrar
            </Link>
            <br />
          </p>
        </SignUpForm>
      </SignUpDiv>
    );
}
export default SignUp;