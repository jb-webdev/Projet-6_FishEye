class Api {
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


class PhotographerApi extends Api {
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

class MediaApi extends Api {
    constructor(url) {
        super(url)
    }
    async getDataMedia (){
        return await this.getMedia()
    }
}
