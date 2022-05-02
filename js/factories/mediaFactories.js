import {ifVideoExist} from '../utils/pagePhotographer.js';

export class MediaCardPage {
    constructor(mediaData) {
        this._media = mediaData
    }
    createMediaCardPage() {
        // 1 - Ensuite ICI JE CREER LA CARTE DU MEDIA
        const card = document.createElement('div');
        card.setAttribute("class", "card");

        const essaiVideo = ifVideoExist(this._media.video);
        
        // ICI JE CREER UNE CONDITION POUR AFFICHER SOIT UNE IMAGE SOIT UNE VIDEO
        if (!essaiVideo) {
            const imageHtml = `
                <div class="card-img">
                    <img
                        src="${this._media.image}"
                        alt="${this._media.title}"
                        title="${this._media.title}"
                    >
                </div>
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
            card.innerHTML = imageHtml;

        } else {
            const videoHtml = `
                <div class="card-img">
                    <video 
                        class="card-video" 
                        controls="controls"
                        alt="${this._media.title}"
                        src="${this._media.video}" 
                        type="video/mp4">
                    </video>
                </div>
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
            card.innerHTML = videoHtml;
        }
        return card;
    }
}