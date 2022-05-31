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
		card.setAttribute('tabindex', '0')
		card.setAttribute('role', 'groupe')
		card.setAttribute('name', 'card')

		const essaiVideo = ifVideoExist(this._media.video)

		const videoHtml = `
            <figure title=${this._media.title} 
                class="card-img" 
                id=${this._media.idMedia} 
                tabindex="0" 
                aria-label ="video qui a pour titre ${this._media.title}"
            >
                <video 
                    class="card-video itemSelectUser" 
                    id=${this._media.idMedia}
                    controls="controls"
                    alt="${this._media.title}"
                    src="${this._media.video}" 
                    type="video/mp4">
                </video>
            </figure>
            <div class="card-description" tabindex="0">
                <h2 class="card-descripiton_title">
                    ${this._media.title}
                </h2>
                <span class="span card-description_like" aria-label ="cette video détient ${this._nbrLikesMedia} j'aime">
                    <p id="spanLikes-${this._media.idMedia}" class="nbr-likes">${this._nbrLikesMedia}</p>
                    <i class="${this._stateLIkes ? 'fa-solid' : 'fa-regular'} fa-heart" id="heart-${this._media.idMedia}"></i>
                </span>
            </div>
        `
		const imageHtml = `
            <figure title=${this._media.title} 
                class="card-img" 
                id=${this._media.idMedia}
                tabindex="0" 
                aria-label ="photo qui a pour titre ${this._media.title}"
                >
                <img
                    class="itemSelectUser"
                    id=${this._media.idMedia}
                    src="${this._media.image}"
                    alt="photo portant le nom de ${this._media.title}"
                    title="${this._media.title}"
                >
            </figure>
            <div class="card-description">
                <h2 class="card-descripiton_title">
                    ${this._media.title}
                </h2>
                <span class="span card-description_like" aria-label ="cette Photographie détient ${this._nbrLikesMedia} j'aime">
                    <p id="spanLikes-${this._media.idMedia}" class="nbr-likes">${this._nbrLikesMedia}</p>
                    <i class="${this._stateLIkes ? 'fa-solid' : 'fa-regular'} fa-heart" id="heart-${this._media.idMedia}"></i>
                </span>
            </div>
        `

		
		essaiVideo ? card.innerHTML = videoHtml : card.innerHTML = imageHtml
		return card
	}
}