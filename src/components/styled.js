import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 20px;
`;

export const ErrorLabel = styled.div`
  color: red;
  margin-bottom: 10px;
`

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`

export const FormInput = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

export const SubmitButton = styled.button`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  display: block;
  width: 100%;
  height: 35px;
  border: 1px transparent solid;
  border-radius: 5px;

  .disabled, :disabled {
    opacity: .45;
  }
`

export const CancelButton = styled.button`
  color: #fff;
  border-color: #ff0000b8;
  margin-top: 10px;
  width: 100%;
  height: 35px;
  border-radius: 5px;
  border: 1px transparent solid;
  background-color: ${props => props.color || '#ff0000b8'};
`

export const Button = styled.button`
  color: #fff;
  width: 120px;
  height: 35px;
  border-radius: 5px;
  border: 1px transparent solid;
  background-color: ${props => props.color || '#007bff'};
`

export const NavBar = styled.div`      
  background-color: #888;
  display: flex;
`;

export const NavLogo = styled.a`
  font-size: 19px;
  padding: 10px 15px;
  text-align: left;
  background-color: ${props => props.color || '#7D7D7D'};
`

export const NavOptions = styled.a`
  font-size: 19px;
  padding: 20px 25px;
  display: inline-block;
`
export const NavDiv = styled.div`
  margin: auto;
`