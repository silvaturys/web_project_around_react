export default function PopupWithForm({ title, name, children, isOpen}) {
    return(
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__content">
                <button className="popup__close-button" type="button">
                <img src="<%=require('./images/CloseIcon.svg')%>" alt="Fechar" className="popup__close-icon" />
                </button>
                <form className="popup__form" name={name}>
                    <h3 className="popup__title">{title}</h3>
                {children}
          <button className="popup__button" type="submit">Salvar</button>
                </form>
            </div>
        </div>
    );
}