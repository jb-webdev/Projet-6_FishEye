import { indexFigure } from "../../../utils/lightBoxFunction.js"
import { videoMediaCreate, imageMediaCreate } from "./modelMedia.js"
import { removeElement, activeElement } from "../../../utils/lightBoxFunction.js"

export class SectionLightbox {
    constructor(mediaPhotographer, selectIdMedia, pathImg) {
        this._mediaPhotographer = mediaPhotographer
        this._selectIdMedia = selectIdMedia
        this._pathImg = pathImg
        // on recupere l'index de notre media dans le Tableau
        this._indexMediaSlider = indexFigure(this._mediaPhotographer, this._selectIdMedia)

        this._sliderLeft = document.querySelector('.lightbox-left')
        this._sliderRight = document.querySelector('.lightbox-right')

    }
    createSectionLightbox() {

        /* On recupere la longuer de notre array mediaPhotographer*/
        const nbrSlide = this._mediaPhotographer.length
        /* On creer une variable pour l'index de notre LIGHTBOX*/
        var index = this._indexMediaSlider

        /** On creer notre wrapper */
        const wrapperItem = document.createElement('div')
        wrapperItem.setAttribute("class", 'wrapper-item')

        /** On monte notre LIGHTBOX et on affiche le media selectionner */
        for (let i = 0; i < nbrSlide; i++) {
            if (this._mediaPhotographer[i].video) {
                const videoBoxCreate = videoMediaCreate(this._mediaPhotographer[i].id, this._mediaPhotographer[i].title, this._pathImg, this._mediaPhotographer[i].video, this._selectIdMedia)
                wrapperItem.appendChild(videoBoxCreate)

            } else {
                const imageBoxCreate = imageMediaCreate(this._mediaPhotographer[i].id, this._mediaPhotographer[i].title, this._pathImg, this._mediaPhotographer[i].image, this._selectIdMedia)
                wrapperItem.appendChild(imageBoxCreate)
            }
        }

        /** on creer notre fonction pour gerer le slide de la LIGHTBOX */
        const next = (direction) => {
            var indexActive = index
            if (direction == "next") {
                index++
                if (index == nbrSlide) {
                    index = 0
                }
            } else {
                if (index == 0) {
                    index = nbrSlide - 1
                } else {
                    index--
                }
            }
            /** On cache le media et on aficche le suivant ou le precedent */
            removeElement(this._mediaPhotographer[indexActive].id)
            activeElement(this._mediaPhotographer[index].id)
        }

        /** On ecoute l'evenement du click sur le dom pour ce diriger avant ou après le media actif sur la page*/
        this._sliderLeft.onclick = () => { next("prev") }
        this._sliderRight.onclick = () => { next("next") }

        /* On ecoute l'evenement pour fermer notre LIGHTBOX et revenir sur la page photographe */
        document.querySelector('.fa-xmark').addEventListener('click', function () {
            document.getElementById('s-lightbox').style.display = "none"
        })

        /** On retour notre composant monté */
        return wrapperItem
    }
}