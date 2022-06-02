import {ifVideoExist} from '../functionsUtil.js' /* import de la function pour trier les images des video */

export class SectionCards {
	constructor(mediaData, heartLikes) {
		this._media = mediaData
		this._heartLikes = heartLikes
		this._stateLIkes = false
		this._nbrLikesMedia = this._media._likes
		
	}
	createCards() {
		let stateHeart = this._heartLikes
		const resultFind = stateHeart.find(element => element == this._media.idMedia)

		if (resultFind ){
			this._stateLIkes = true
		}
		if (this._stateLIkes){
			this._nbrLikesMedia = this._media._likes +1
		}
		/**
         * Création de la carte Media
         */
		const card = document.createElement('div')
		card.setAttribute('class', 'card')
		card.setAttribute('name', 'card')

		const essaiVideo = ifVideoExist(this._media.video)

		const videoHtml = `
            <figure
                class="card-img" 
                id=${this._media.idMedia}   
            >
                <video 
                    class="card-video itemSelectUser" 
                    tabindex="0"
                    id=${this._media.idMedia}
                    src="${this._media.video}" 
                    alt="cette video a pour titre ${this._media.title}" 
                    type="video/mp4">
                </video>
            </figure>
            <div class="card-description" tabindex="0">
                <h2 class="card-descripiton_title" aria-hidden='true'>
                    ${this._media.title}
                </h2>
                <span class="span card-description_like" aria-label ="cette video détient ${this._nbrLikesMedia} j'aime, ${this._stateLIkes ? 'cette video vous plaît déjà.' : ''}">
                    <p id="spanLikes-${this._media.idMedia}" class="nbr-likes">${this._nbrLikesMedia}</p>
                    <i tabindex="0" 
                        aria-label="taper entrer pour ${this._stateLIkes ? 'supprimer' : 'ajouter'} un like" 
                        class="${this._stateLIkes ? 'fa-solid' : 'fa-regular'} fa-heart" id="heart-${this._media.idMedia}"
                    ></i>
                </span>
            </div>
        `
		const imageHtml = `
            <figure 
                class="card-img" 
                id=${this._media.idMedia}
                >
                <img
                    class="itemSelectUser"
                    tabindex="0"
                    id=${this._media.idMedia}
                    src="${this._media.image}"
                    alt="cette image a pour titre ${this._media.title}"  
                >
            </figure>
            <div class="card-description" tabindex="0">
                <h2 class="card-descripiton_title" aria-hidden='true'>
                    ${this._media.title}
                </h2>
                <span class="span card-description_like" 
                        aria-label ="cette image a pour titre ${this._media.title}, est elle détient ${this._nbrLikesMedia} j'aime, ${this._stateLIkes ? 'cette photo vous plaît déjà.' : ''}">
                    <p id="spanLikes-${this._media.idMedia}" class="nbr-likes">${this._nbrLikesMedia}</p>
                    <i tabindex="0"
                        aria-label="taper entrer pour ${this._stateLIkes ? 'supprimer' : 'ajouter'} un like"
                        class="${this._stateLIkes ? 'fa-solid' : 'fa-regular'} fa-heart" id="heart-${this._media.idMedia}"></i>
                </span>
            </div>
        `

		
		essaiVideo ? card.innerHTML = videoHtml : card.innerHTML = imageHtml
		return card
	}
}