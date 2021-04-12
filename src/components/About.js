import './About.css';
import { Title } from "./styled";

function About() {
    return (
      <div className="About">
          <Title>To Do List</Title>

          <div className="about__description">Gerencie suas tarefas ou anotações neste app.</div>

          <div>Felipe Oliveira - RM 338405</div>
          <div>Francisco Olvera - RM 338050</div>
          <div>Geovane Medina - RM 338045</div>
          <div>Marcello Chuahy - RM 337780</div>

          <div className="about__footer">Todos os direitos reservados. © 2021</div>
      </div>
    );
  }
  
  export default About;