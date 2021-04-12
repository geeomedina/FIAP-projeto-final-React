import React, { useState, useEffect } from "react";
import firebaseService from '../services/firebase.service';

import { 
  ModalTitle,
  FormGroup,
  FormInput,
  SubmitButton 
} from "./styled";

function ModalForm({content}) {

  const [item, setItem] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const user = window.localStorage.getItem("user");

  useEffect(() => {
    const getItem = () => {
      if(Object.keys(content).length > 0) {
        setTitle(content.title);
        setDescription(content.description);
      }
    }
    getItem();
  }, [content]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setItem(content);
    item.title = title;
    item.description = description;
    item.userId = user;
    if(Object.keys(content).length > 0) {
      await firebaseService.editItem(content.id, item);
      window.location.reload();
    } else {
      await firebaseService.addItem(item);
      window.location.reload();
    }
  };
  
  function validateForm() {
    console.log(title.length > 0 && description.length > 0);
    return title.length > 0 && description.length > 0;
  }

  return (
    <div>
      {Object.keys(content).length === 0 && 
        <ModalTitle>Novo Item</ModalTitle>
      }
      {Object.keys(content).length > 0 && 
        <ModalTitle>Editar Item</ModalTitle>
      }
      <form>
        <FormGroup size="lg" controlId="title">
          <FormInput
              autoFocus
              type="text"
              value={title}
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>
        <FormGroup size="lg" controlId="description">
          <FormInput
              type="text"
              value={description}
              placeholder="Descrição"
              onChange={(e) => setDescription(e.target.value)}
          />
        </FormGroup>
        <SubmitButton block type="submit" disabled={!validateForm()} onClick = {(e) => {handleSubmit(e)}}>
          Salvar
        </SubmitButton>
      </form>
    </div>
  )
}

export default ModalForm;