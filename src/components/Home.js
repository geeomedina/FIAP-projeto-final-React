import React, { useEffect, useState } from 'react';
import firebaseService from '../services/firebase.service';
import { Table } from 'react-bootstrap';
import Modal from "react-modal";
import ModalForm from './ModalForm';

import icon_edit from "../assets/icon_edit.png";
import icon_delete from "../assets/icon_trash.png";
import { 
  Title, 
  CancelButton,
  Button 
} from './styled';
import './Home.css';

function Home() {

  const [list, setList] = useState([]);
  const [selected, setSelected] = useState({});
  const [openModal, setOpenModal] = useState(false);
  
  const user = window.localStorage.getItem("user");

  useEffect(() => {
    const getList = async () => {
      if(user !== null) {
        const data = await firebaseService.getItems(user);
        setList(data);
      } else {
        window.location.reload();
      }
    }
    getList();
  }, [user]);

  function newItem() {
    setSelected({});
    setOpenModal(true);
  }

  function editItem(item) {
    setSelected(item);
    setOpenModal(true);
  }

  const deleteItem = async (item) => {
    await firebaseService.deleteItem(item.id);
    window.location.reload();
  }

  return (
    <div className="home">
      <Title>To Do List</Title>
      <div className="home__content-div home__container">
        <div className="home__description">
          <span>Gerencie suas tarefas ou anotações.</span>
        </div>
        <div className="home__new-button">
          <Button onClick={() => newItem()}>Nova Tarefa</Button>
        </div>
      </div>
      <div className="home__container">
        <Modal 
          isOpen={openModal}
          ariaHideApp={false}
          onRequestClose={() => setOpenModal(false)}
          style={
            {
              overlay: {
                backgroundColor: '#454545bf',
                textAlign: 'center'
              },
              content: {
                inset: '25%',
                maxWidth: '50%',
                maxHeight: '50%'
              }
            }
          }
          >
          <ModalForm content={selected}></ModalForm>
          <CancelButton onClick={() => setOpenModal(false)}>Cancelar</CancelButton>
        </Modal>
        <Table responsive>
          <thead>
            <tr>
              <th>Título</th>
              <th>Descrição</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { list && list.map((item, index) =>
              <tr key={ index }>
                <td>{ item.title }</td>
                <td>{ item.description }</td>
                <td className="home__action-column">
                  <div onClick={() => editItem(item)} title="Editar">
                    <img className="home__action-button" src={icon_edit} alt="Editar" />
                  </div>
                  <div onClick={() => deleteItem(item)} title="Deletar">
                    <img className="home__action-button" src={icon_delete} alt="Deletar" />
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
  
  export default Home;