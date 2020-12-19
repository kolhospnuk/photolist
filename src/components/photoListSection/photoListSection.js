
import React, {Component} from "react";
import "./photoListSection.css";

export default class PhotoListSection extends Component {

    render() {
        const {imageList, openingModal} = this.props;

        const photoItem = imageList.map(item => {
            return (
                <li className="photos-list-item">
                    <img src={item.url}
                         alt='photo'
                         onClick={() => openingModal(item)}
                        />
                </li>
            )
        })

        return (
            <>
                <div className="photos">
                    <ul className="photos-list">
                        {photoItem}
                    </ul>
                </div>
            </>
         )
    }
}