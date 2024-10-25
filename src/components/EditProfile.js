import { useState, useContext, useEffect } from 'react';
import {CurrentUserContext }from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditProfile({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  // Variáveis de estado para os campos de formulário
  const [name, setName] = useState(currentUser.name || ''); 
  const [description, setDescription] = useState(currentUser.about || '');

  // Atualizando valores dos inputs em tempo real
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }


  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm 
        name="edit-profile" 
        title="Editar Perfil"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}>
        <input
          type="text"
          className="popup__input"
          id="name"
          name="name"
          placeholder="Nome"
          autoComplete="name"
          minLength={2}
          maxLength={40}
          required
          value={name} 
          onChange={handleNameChange} 
        />
        <span className="popup__error" id="name-error" />
        <input
          name="about"
          type="text"
          className="popup__input"
          id="area"
          placeholder="Sobre mim"
          minLength={2}
          maxLength={200}
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="area-error" />
        </PopupWithForm>
    // <form
    //   className="popup__form"
    //   name="profile-form"
    //   id="edit-profile-form"
    //   noValidate
    //   onSubmit={handleSubmit} // Função de submit
    // >
    //   <label className="popup__label">
    //     <input
    //       className="popup__input popup__input_type_name"
    //       id="owner-name"
    //       maxLength="40"
    //       minLength="2"
    //       name="userName"
    //       placeholder="Name"
    //       required
    //       type="text"
    //       value={name} // Valor atrelado à variável de estado
    //       onChange={handleNameChange} // Atualiza o estado quando o valor muda
    //     />
    //     <span className="popup__error" id="owner-name-error"></span>
    //   </label>
    //   <label className="popup__label">
    //     <input
    //       className="popup__input popup__input_type_description"
    //       id="owner-description"
    //       maxLength="200"
    //       minLength="2"
    //       name="userDescription"
    //       placeholder="About me"
    //       required
    //       type="text"
    //       value={description} // Valor atrelado à variável de estado
    //       onChange={handleDescriptionChange} // Atualiza o estado quando o valor muda
    //     />
    //     <span className="popup__error" id="owner-description-error"></span>
    //   </label>
    //   <button className="button popup__button" type="submit">
    //     Save
    //   </button>
    // </form>
  );
}