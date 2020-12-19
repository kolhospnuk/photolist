
import React, {Component} from "react";
import "./modalWindow.css";

export default class ModalWindow extends Component {

    render() {
        const {modalOpen, imageItem, openingModal} = this.props;

        let classModal = "modal";

        if (modalOpen) {
            classModal = `${classModal} open`;
        }

        return (
            <div className={classModal}>
                <div className="modal-window">
                    <img className="modal-window-img" src={imageItem.url} alt='photo'/>
                    <form className="modal-window-form">
                        <input type="text" placeholder="Your name"/>
                        <input type="text" placeholder="Your comment"/>
                        <button type="submit">
                            Leave a comment
                        </button>
                    </form>
                </div>
                <div className="modal-comment">
                    nice photo dsvdddddd
                </div>
                <div className="modal-cross"
                    onClick={() => openingModal(modalOpen)}>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    }
}