import trash from "../images/Trash.svg"
import heart from "../images/heart.svg"

export default function Card({ data, onCardClick }) {
    console.log(data)
    const {link, likes, name} = data

    const handleClick = () => {
        onCardClick(data);  
      };

    return(
        <div className="element">
            <button className="element__button element__button_trash" type="button">
                <img
                src={trash}
                alt="icone de lixeira"
                className="element__icon-trash"
                />
            </button>
            <img className="element__image" src={link} alt={name}  onClick={handleClick}/>
            <div className="element__container">
                <h2 className="element__text"> {name} </h2>
                <div className="element__info-like">
                <button className="element__button" type="button">
                    <img
                    src={heart}
                    alt="icone de coração"
                    className="element__icon"
                    />
                </button>
                <span className="elements__likes-number"> {likes.lenght} </span>
                </div>
            </div>
        </div>
    )
}