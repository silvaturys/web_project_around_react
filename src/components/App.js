import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setIsConfirmDeletePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);


  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
 
  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);
  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);
  const handleDeletePopupClick = () => setIsConfirmDeletePopupOpen(true)

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  }

  const closeAllPopups = () =>{
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmDeletePopupOpen(false);
  }

  useEffect (() => {
    api.getUserInfo().then((ApiUserInfo) => {
      setCurrentUser(ApiUserInfo)
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

  async function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    
    await api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((currentCard) => 
          currentCard._id === card._id ? newCard : currentCard
        ));
      })
      .catch((error) => console.error(error));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
     <div className="page">
      
      <Header />
      <Main
       onEditProfileClick={handleEditProfileClick}
       onAddPlaceClick={handleAddPlaceClick}
       onEditAvatarClick={handleEditAvatarClick}
       cards={cards}
       onCardClick={handleCardClick}
       onDeleteClick={handleDeletePopupClick}
       onCardLike={handleCardLike}/>

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
          required
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
          required
        />
        <span className="popup__error" id="title-error" />
        <input
          name="link"
          type="url"
          className="popup__input"
          id="image-link"
          placeholder="Link de imagem"
          required
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
          required
        />
        <span className="input-link-error popup__error" id="input-link-error">
          Por favor, introduza um endereço da web.
        </span>
        </PopupWithForm>

        <PopupWithForm 
        name="delete-confirmation"
        title="Tem certeza?"
        isOpen={isConfirmDeletePopupOpen}
        onClose={closeAllPopups}
        isDeleteConfirmation={true}
      ></PopupWithForm>
    

        <ImagePopup></ImagePopup>
      <Footer />
     </div>
    </CurrentUserContext.Provider>
    
  );
}

export default App;
