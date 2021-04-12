import { Title, AboutDiv, AboutDescription, AboutFooter } from "./styled";

function About() {
    return (
      <AboutDiv>
          <Title>To Do List</Title>

          <AboutDescription>Gerencie suas tarefas ou anotações neste app.</AboutDescription>

          <div>Felipe Oliveira - RM 338405</div>
          <div>Francisco Olvera - RM 338050</div>
          <div>Geovane Medina - RM 338045</div>
          <div>Marcello Chuahy - RM 337780</div>

          <AboutFooter>Todos os direitos reservados. © 2021</AboutFooter>
      </AboutDiv>
    );
  }
  
  export default About;