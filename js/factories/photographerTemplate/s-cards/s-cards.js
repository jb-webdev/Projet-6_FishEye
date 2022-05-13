import {ifVideoExist} from '../../../utils/functionsUtil.js'; /* import de la function pour trier les images des video */

export class SectionCards {
    constructor(mediaData) {
        this._media = mediaData
    }
    createCards() {
        /**
         * Ensuite ICI JE CREER LA CARTE DU MEDIA
         */
        const card = document.createElement('div');
        card.setAttribute("class", "card");
        const essaiVideo = ifVideoExist(this._media.video);
        
         const videoHtml = `
            <a href="#" title=${this._media.title} class="card-img">
                <video 
                    class="card-video" 
                    controls="controls"
                    alt="${this._media.title}"
                    src="${this._media.video}" 
                    type="video/mp4">
                </video>
            </a>
            <div class="card-description">
                <h2 class="card-descripiton_title">
                    ${this._media.title}
                </h2>
                <span class="span" 
                    class="card-description_like">
                    ${this._media._likes}
                    <i class="fa-solid fa-heart"></i>
                </span>
            </div>
        `
        const imageHtml = `
            <a href="#" title=${this._media.title} class="card-img">
                <img
                    src="${this._media.image}"
                    alt="photo portant le nom de ${this._media.title}"
                    title="${this._media.title}"
                >
            </a>
            <div class="card-description">
                <h2 class="card-descripiton_title">
                    ${this._media.title}
                </h2>
                <span class="span" 
                    class="card-description_like">
                    ${this._media._likes}
                    
                    <i class="fa-regular fa-heart"></i>
                </span>
            </div>
        `
        // pour passer le coeur rempli mettre l'icon en fa-solid au lieu de fa-regular au click !
        /**
         * On verifie si essaiVideo et vrai ou faux / et on monte  une video ||  une image
         */

        essaiVideo ? card.innerHTML = videoHtml : card.innerHTML = imageHtml
        
        return card
    }
}