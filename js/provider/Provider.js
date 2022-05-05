class Provider {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }
    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('une erreur c\'est produite', err))
    }
    async getMedia() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('une erreur c\'est produite', err))
    }
}
class PhotographerProvider extends Provider {
    /**
     * Avec cette class on retourne touttes les datas des photographes
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getDataPhotographer() {
        return await this.get()
    }
}
class MediaProvider extends Provider {
    /**
     * 
     * avec cette class on retourne toutes les informations concerantn les media présent dans la BDD
     * @param {String} url 
     */
    constructor(url) {
        super(url)
    }
    async getDataMedia (){
        return await this.getMedia()
    }
}
export {PhotographerProvider, MediaProvider};