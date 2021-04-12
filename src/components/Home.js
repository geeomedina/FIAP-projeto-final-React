import React, { useEffect, useState } from 'react';
import firebaseService from '../services/firebase.service';
import Modal from "react-modal";
import ModalForm from './ModalForm';

import icon_edit from "../assets/icon_edit.png";
import icon_delete from "../assets/icon_trash.png";
import { 
  Title, 
  CancelButton,
  Button, 
  HomeDiv,
  HomeContainer,
  HomeSecondContainer,
  HomeDescription,
  NewButton,
  ActionColumn,
  ActionButton,
  HomeTable,
  SimpleTH,
  SimpleTD
} from './styled';

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
    <HomeDiv>
      <Title>To Do List</Title>
      <HomeSecondContainer>
        <HomeDescription>
          <span>Gerencie suas tarefas ou anotações.</span>
        </HomeDescription>
        <NewButton>
          <Button onClick={() => newItem()}>Nova Tarefa</Button>
        </NewButton>
      </HomeSecondContainer>

      <HomeContainer>
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
        <HomeTable>
          <thead>
            <tr>
              <SimpleTH>Título</SimpleTH>
              <SimpleTH>Descrição</SimpleTH>
              <SimpleTH></SimpleTH>
            </tr>
          </thead>
          <tbody>
            { list && list.map((item, index) =>
              <tr key={ index }>
                <SimpleTD>{ item.title }</SimpleTD>
                <SimpleTD>{ item.description }</SimpleTD>
                <ActionColumn>
                  <div onClick={() => editItem(item)} title="Editar">
                    <ActionButton src={icon_edit} alt="Editar" />
                  </div>
                  <div onClick={() => deleteItem(item)} title="Deletar">
                    <ActionButton src={icon_delete} alt="Deletar" />
                  </div>
                </ActionColumn>
              </tr>
            )}
          </tbody>
        </HomeTable>
      </HomeContainer>
    </HomeDiv>
  );
}
  
  export default Home;