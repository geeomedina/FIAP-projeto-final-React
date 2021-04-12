import React, { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { auth } from "../firebase";

import { LoginContext } from "../providers/LoginProvider"

import { 
  Title, 
  ErrorLabel,
  FormGroup,
  FormInput,
  SubmitButton 
} from "./styled";
import "./Login.css";

function Login({history}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    
    const { user } = useContext(LoginContext);
    
    const signInHandler = async (event, email, password) => {
      event.preventDefault();
      auth.signInWithEmailAndPassword(email, password).then((result) => {
          console.log(result.user)
          history.push("/");
      }).catch(error => {
          setError(true);
      });
    };
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    if(user !== null) {
      return <Redirect to="/" />;
    }

    return (
        <div className="login">
          <Title>To Do List</Title>
          <form className="login__form" onSubmit={handleSubmit}>
            <FormGroup size="lg" controlId="email">
              <FormInput
                autoFocus
                type="email"
                value={email}
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup size="lg" controlId="password">
              <FormInput
                type="password"
                value={password}
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={!validateForm()} onClick = {(e) => {signInHandler(e, email, password)}}>
              Entrar
            </SubmitButton>
            { error && 
              <ErrorLabel>A senha está inválida ou este e-mail não possui cadastro.</ErrorLabel>
            }
            <p className="text-center my-3">
              Não possui conta? {" "}
              <Link to="signup">
                Cadastre-se
              </Link>
            </p>
          </form>
        </div>
    );
}
export default Login;