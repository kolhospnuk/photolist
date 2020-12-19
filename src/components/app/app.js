import React, {Component} from 'react';
import "./app.css";

import Header from "../header/header";
import PhotoListSection from "../photoListSection/photoListSection";
import PhotoService from "../services/photoService";
import Spinner from "../spinner/spinner";
import ModalWindow from "../modalWindow/modalWindow";

export default class App extends Component {

    state = {
        modalOpen: false,
        imageList: [],
        imageItem: []
    }

    componentDidMount() {
        this.showList();
    }

    openingModal = (item) => {
        this.setState({
            modalOpen: !this.state.modalOpen,
            imageItem: item
        })
    }

    showList() {
        const service = new PhotoService();

        service.getPhotoList("")
            .then(res => {
                this.setState({
                    imageList: res
                })
            })
    }

    render() {
        const {imageList, imageItem, modalOpen} = this.state;

        if (imageList.length > 0) {
            return (
                <>
                    <Header/>
                    <PhotoListSection imageList={imageList}
                                      openingModal={this.openingModal}/>
                    <ModalWindow imageItem={imageItem}
                                 modalOpen={modalOpen}
                                 openingModal={this.openingModal}/>
                </>
            )
        } else {
            return <Spinner className="spinner"/>
        }
    }
}