import profileImage from "../images/perfil_image.png"
import avatarEdit from "../images/editprofile.svg"
import editIcon from "../images/edit__vector.svg"
import addIcon from "../images/add__button.svg"
import closeIcon from "../images/CloseIcon.svg"

export default function Main() {
 

    return(
        <main className="content">
    {/*-----------------------------AREA DO PERFIL---------------------------*/}
    <section className="profile">;
      <div className="profile__container">
        <div className="profile__avatar-container">
          <img
            src={profileImage}
            alt="imagem de um idoso"
            className="profile__image"
          />
          <img
            src={avatarEdit}
            alt="icone caneta"
            className="profile__avatar-edit"
          />
        </div>
        <h1 className="profile__name"> Jacques Cousteau </h1>
        <p className="profile__area"> Explorar </p>
        <button type="button" className="profile__edit-button">
          <img
            src={editIcon}
            alt="icone de editar algo, uma caneta"
          />
        </button>
        <button type="button" className="profile__add-button">
          <img
            src={addIcon}
            alt="símbolo de adição"
          />
        </button>
      </div>
    </section>
     {/*------------------------COFIRMAR DELETE-------------------------*/}
    <section className="popup " id="popup-delete-confirmation">
  <div className="popup__content" id="popupFormConfirmation">
    <button className="popup__close-button" type="button">
      <img
        src={closeIcon}
        alt="Ícone de fechar"
        className="popup__close-button"
      />
    </button>
    <h2 className="popup__title">Tem certeza?</h2>
    <button type="button" value="submit" className="popup__button">
      Sim
    </button>
  </div>
</section>
  </main>
    );
}