
export default class PhotoService {

    _apiBase = "https://boiling-refuge-66454.herokuapp.com/images";

    getPhotoList(name) {
        return this.getResource(`${name}`);
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        return await res.json();
    }
}