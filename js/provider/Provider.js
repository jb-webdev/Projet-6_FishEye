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
     * 
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
    constructor(url) {
        super(url)
    }
    async getDataMedia (){
        return await this.getMedia()
    }
}
export {PhotographerProvider, MediaProvider};