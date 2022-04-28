class Media {
    constructor(medias, photogrpaher) {
        this._name = photogrpaher[0].name
        this._idMedia = medias.id
        this._photographerId = medias.photographerId
        this._title = medias.title
        this._image = medias.image
        this._likes = medias.likes
        this._date = medias.date
        this._price = medias.price
    }

    get name() {
        return this._name
    }    
    get idMedia() {
        return this._idMedia
    }
    get photographerId(){
        return this._photographerId
    }
    get title(){
        return this._title
    }
    get image (){
        return `/assets/Photographers-img/${this._portrait}`
    }
    get like (){
        return this._like
    }
    get date (){
        return this._date
    }
    get price (){
        return this._price
    }
}