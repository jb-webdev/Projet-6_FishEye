import { videoMediaCreate, imageMediaCreate } from './modelMedia.js'

export class SectionLightbox {
	constructor(mediaPhotographer, pathImg) {
		this._mediaPhotographer = mediaPhotographer
		this._pathImg = pathImg
	}
	createSectionLightbox() {
		/* On recupere la longueur de notre array mediaPhotographer */
		const nbrSlide = this._mediaPhotographer.length
		/** On creer notre wrapper */
		const wrapperItem = document.createElement('div')
		wrapperItem.setAttribute('class', 'wrapper-item')
		wrapperItem.setAttribute('role', 'group')
		/** On monte notre LIGHTBOX et on affiche le media selectionner */
		for (let i = 0; i < nbrSlide; i++) {
			if (this._mediaPhotographer[i].video) {
				const videoBoxCreate = videoMediaCreate(this._mediaPhotographer[i], this._pathImg)
				wrapperItem.appendChild(videoBoxCreate)
			} else {
				const imageBoxCreate = imageMediaCreate(this._mediaPhotographer[i], this._pathImg)
				wrapperItem.appendChild(imageBoxCreate)
			}
		}
		/** On retour notre composant monté */
		return wrapperItem
	}
}