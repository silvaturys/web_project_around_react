import avatarEdit from "../images/editprofile.svg"
import editIcon from "../images/edit__vector.svg"
import addIcon from "../images/add__button.svg"
import closeIcon from "../images/CloseIcon.svg"
import Card from "./Card"

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  userName,
  userDescription,
  userAvatar,
  cards, 
  onCardClick,
  onDeleteClick
}){
    return(
        <main className="content">
    {/*-----------------------------AREA DO PERFIL---------------------------*/}
    <section className="profile">;
      <div className="profile__container">
        <div className="profile__avatar-container" onClick={onEditAvatarClick}>
          <img
            src={userAvatar}
            alt="imagem de perfil"
            className="profile__image"
          />
          <img
            src={avatarEdit}
            alt="icone caneta"
            className="profile__avatar-edit"
          />
        </div>
        <h1 className="profile__name"> {userName} </h1>
        <p className="profile__area"> {userDescription} </p>
        <button type="button" className="profile__edit-button" onClick={onEditProfileClick}>
          <img
            src={editIcon}
            alt="icone de editar algo, uma caneta"
          />
        </button>
        <button type="button" className="profile__add-button" onClick={onAddPlaceClick}>
          <img
            src={addIcon}
            alt="símbolo de adição"
          />
        </button>
      </div>
    </section>
<section className="elements">
      {cards.map((item) => (
        <Card 
        key={item._id} 
        data={item}
        onCardClick={onCardClick}
        onDeleteClick={onDeleteClick}
        />
      ))}
    </section>
  </main>
    );
}