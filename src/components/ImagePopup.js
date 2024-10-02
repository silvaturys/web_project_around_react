import closeIcon from "../images/CloseIcon.svg"

export default function ImagePopup(){
    return(
        <section className="popup" id="PopupImage">
            <div className="popup__content-image">
                <button className="popup__type-close" id="CloseImagePopup">
                <img
                    src={closeIcon}
                    className="popup__icon popup__icon-close"
                    alt="simbolo de X, fechar"
                />
                </button>
                <img alt="imagem ampliada" className="popup__image" />
                <p className="popup__paragraph" />
            </div>
        </section>
    );
}