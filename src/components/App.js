import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  return (
    <div className="page">
      <Header />
      <Main> 
        <PopupWithForm 
        name="edit-profile" 
        title="Editar Perfil">
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

        <PopupWithForm name="add-post" title="Novo Local">
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

        <PopupWithForm name="edit-avatar" title="Alterar a foto de perfil">
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
      </Main>
      <Footer />
    </div>
  );
}

export default App;
