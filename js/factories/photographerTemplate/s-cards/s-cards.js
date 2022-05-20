import {ifVideoExist} from '../../../utils/functionsUtil.js' /* import de la function pour trier les images des video */

export class SectionCards {
	constructor(mediaData) {
		this._media = mediaData
	}
	createCards() {
		/**
         * Ensuite ICI JE CREER LA CARTE DU MEDIA
         */
		const card = document.createElement('div')
		card.setAttribute('class', 'card')
		const essaiVideo = ifVideoExist(this._media.video)
        
		const videoHtml = `
            <figure title=${this._media.title} class="card-img" id=${this._media.idMedia}>
                <video 
                    class="card-video itemSelectUser" 
                    id=${this._media.idMedia}
                    controls="controls"
                    alt="${this._media.title}"
                    src="${this._media.video}" 
                    type="video/mp4">
                </video>
            </figure>
            <div class="card-description">
                <h2 class="card-descripiton_title">
                    ${this._media.title}
                </h2>
                <span class="span card-description_like">
                    ${this._media._likes}
                    <i class="fa-regular fa-heart"></i>
                </span>
            </div>
        `
		const imageHtml = `
            <figure title=${this._media.title} class="card-img" id=${this._media.idMedia}>
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
                <span class="span card-description_like">
                    ${this._media._likes}
                    
                    <i class="fa-regular fa-heart"></i>
                </span>
            </div>
        `

		essaiVideo ? card.innerHTML = videoHtml : card.innerHTML = imageHtml
        
		return card
	}
}