import trash from "../images/Trash.svg"
import heart from "../images/heart.svg"
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ data, onCardClick, onDeleteClick, onCardLike }) {
    const {link, likes, name, owner} = data;
    const currentUser = useContext(CurrentUserContext);

    const isOwn = owner._id === currentUser._id;

    const cardDeleteButtonClassName = `element__button element__button_trash ${
        isOwn ? "element__button_trash_visible" : "element__button_trash_hidden"
      }`;

    const isLiked = likes.some((user) => user._id === currentUser._id);

    const cardLikeButtonClassName = `element__button ${isLiked ? "element__button_liked" : ""}`;

    const handleClick = () => {
        onCardClick(data);  
      };
      
      const handleLikeClick = () => {
        onCardLike(data);
      };
      
    return(
        <div className="element">
      {isOwn && (
        <button className={cardDeleteButtonClassName} type="button" onClick={onDeleteClick}>
          <img src={trash} alt="icone de lixeira" className="element__icon-trash" />
        </button>
      )}
      <img className="element__image" src={link} alt={name} onClick={handleClick} />
      <div className="element__container">
        <h2 className="element__text">{name}</h2>
        <div className="element__info-like">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}>
            <img src={heart} alt="icone de coração" className="element__icon" />
          </button>
          <span className="elements__likes-number">{likes.length}</span>
        </div>
      </div>
    </div>
    )
}