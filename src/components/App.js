import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from "react";
import api from "../utils/api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);
 
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  const closeAllPopups = () =>{
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  useEffect (() => {
    api.getUserInfo().then((userData) => {
      setUserName(userData.name);
      setUserDescription(userData.about);
      setUserAvatar(userData.avatar);
    })
    .catch((err) => {
      console.log("Erro ao carregar dados do usuário: ", err);
    });
  }, []);

  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log("Erro ao carregar os cartões: ", err);
      });
  }, []);

  return (
    <div className="page">
      <Header />
      <Main
       onEditProfileClick={handleEditProfileClick}
       onAddPlaceClick={handleAddPlaceClick}
       onEditAvatarClick={handleEditAvatarClick}
       userName={userName}
       userDescription={userDescription}
       userAvatar={userAvatar}
       cards={cards}
       onCardClick={handleCardClick}/>

      <ImagePopup 
      card={selectedCard}  
      isOpen={isImagePopupOpen}
      onClose={closeAllPopups}  
      />

        <PopupWithForm 
        name="edit-profile" 
        title="Editar Perfil"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input
          type="text"
          className="popup__input"
          id="name"
          name="name"
          placeholder="Nome"
          autoComplete="name"
          minLength={2}
          maxLength={40}
          required=""
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
          required=""
        />
        <span className="popup__error" id="area-error" />
        </PopupWithForm>

        <PopupWithForm 
        name="add-post" 
        title="Novo Local"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input
          name="name"
          type="text"
          className="popup__input"
          id="title"
          placeholder="Título"
          minLength={2}
          maxLength={30}
          required=""
        />
        <span className="popup__error" id="title-error" />
        <input
          name="link"
          type="url"
          className="popup__input"
          id="image-link"
          placeholder="Link de imagem"
          required=""
        />
        <span className="popup__error" id="image-link-error" />
        </PopupWithForm>

        <PopupWithForm 
        name="edit-avatar" 
        title="Alterar a foto de perfil"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input
          type="url"
          className="popup__input"
          id="input-link"
          name="avatarLink"
          placeholder="Link da imagem"
          required=""
        />
        <span className="input-link-error popup__error" id="input-link-error">
          Por favor, introduza um endereço da web.
        </span>
        </PopupWithForm>

        <ImagePopup></ImagePopup>
      <Footer />
    </div>
  );
}

export default App;
