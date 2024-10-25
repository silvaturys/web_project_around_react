import React, { useState, useContext, useRef } from 'react';
import {CurrentUserContext }from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

export default function EditAvatar ({ isOpen, onClose, onUpdateAvatar }) {
    const currentUser = useContext(CurrentUserContext);
    const avatarRef = useRef("");
    const [link, setLink] = useState("");
    

    React.useEffect(() => {
        setLink(currentUser.avatar);
      }, [currentUser]);

      function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value, 
        });
      }

      return (
        <PopupWithForm 
        name="edit-avatar" 
        title="Alterar a foto de perfil"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}>
        <input
          type="url"
          className="popup__input"
          id="input-link"
          name="avatarLink"
          placeholder="Link da imagem"
          required
          ref={avatarRef}
          defaultValue={link} 
        />
        <span className="input-link-error popup__error" id="input-link-error">
          Por favor, introduza um endereço da web.
        </span>
        </PopupWithForm>
      )
}