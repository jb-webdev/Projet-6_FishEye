import {ifVideoExist} from './functionsUtil.js' /* import de la function pour trier les images des video */

export class SectionCards {
	constructor(mediaData, heartLikes) {
		this._media = mediaData
		this._heartLikes = heartLikes
		this._stateLIkes = false
		this._nbrLikesMedia = this._media._likes
		this.wrapperCardsContainer = document.getElementById('s-cards') /* On recupere le conteneur wrapper */

		
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

		const videoHtml =  `
            <figure
                class="card-img" 
                id=${this._media.idMedia}   
            >
                <video 
                    class="card-video itemSelectUser" 
                    tabindex="0"
                    id=${this._media.idMedia}
                    src="${this._media.video}" 
                    title="cette video a pour titre ${this._media.title}; Taper entrer pour afficher en gros plan" 
                    type="video/mp4">
                </video>
            </figure>
            <div class="card-description">
                <h2 class="card-descripiton_title">
                    ${this._media.title}
                </h2>
                <span class="span card-description_like"    >
                    <p id="spanLikes-${this._media.idMedia}" class="nbr-likes">${this._nbrLikesMedia}</p>
                    <span class="${this._stateLIkes ? 'fa-solid' : 'fa-regular'} fa-heart" id="heart-${this._media.idMedia}"></span>
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
                alt="cette image a pour titre ${this._media.title}; Taper entrer pour afficher en gros plan"
                title=""  
            >
        </figure>
        <div class="card-description">
            <h2 class="card-descripiton_title">
                ${this._media.title}
            </h2>
            <span class="span card-description_like"    >
                <p id="spanLikes-${this._media.idMedia}" class="nbr-likes">${this._nbrLikesMedia}</p>
                <span class="${this._stateLIkes ? 'fa-solid' : 'fa-regular'} fa-heart" id="heart-${this._media.idMedia}"></span>
            </span>
        </div>
        `

		
		essaiVideo ? card.innerHTML = videoHtml : card.innerHTML = imageHtml
		this.wrapperCardsContainer.appendChild(card)
		return this.wrapperCardsContainer
	}


}