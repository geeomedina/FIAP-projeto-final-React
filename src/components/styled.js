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

// About
export const AboutDiv = styled.div`
  text-align: center;
  padding: 60px 0;
`

export const AboutDescription = styled.div`
  margin-bottom: 20px;
`

export const AboutFooter = styled.div`
  margin-top: 20px;
`

// Home
export const HomeDiv = styled.div`
  padding: 60px 30px;
  height: 100%;
`

export const HomeContainer = styled.div`
  margin: 0 auto;
  max-width: 1024px;
`

export const HomeSecondContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  margin: 0 auto;
  max-width: 1024px;
`

export const HomeDescription = styled.div`
  text-align: start;
  width: 50%;
`

export const NewButton = styled.div`
  width: 50%;
  text-align: end;
`

export const ActionColumn = styled.td`
  display: flex;
`

export const ActionButton = styled.img`
  width: 30px;
  padding-right: 10px;
  cursor: pointer;
`

export const HomeTable = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse;
`

export const SimpleTH = styled.th`
  padding: .75rem;
  vertical-align: bottom;
  border-bottom: 2px solid #a1a4a7;
  text-align: center;
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
`

export const SimpleTD = styled.td`
  padding: .75rem;
  display: table-cell;
`

// Login
export const LoginDiv = styled.div`
  padding: 60px 0;
  height: 100%;
`

export const LoginForm = styled.div`
  margin: 0 auto;
  max-width: 320px;
  padding: 10px;
`

// SignUp
export const SignUpDiv = styled.div`
  padding: 60px 0;
  height: 100%;
`

export const SignUpForm = styled.div`
  margin: 0 auto;
  max-width: 320px;
  padding: 10px;
`
