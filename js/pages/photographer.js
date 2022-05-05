// import de tous les modules utile
import {getPhotographerId, iDifExist} from '../utils/pagePhotographer.js'
import {PhotographerProvider, MediaProvider} from '../provider/Provider.js'
import {Media} from '../models/media.js'
import {ErrorPage} from '../factories/errorPage/errorFactorie.js'
import {PhotographerCardPage} from '../factories/pagePhotographer.js'
import {MediaCardPage} from '../factories/mediaFactories.js'

class PhotographerPage {
    constructor() {
        this.sectionHeader = document.querySelector('.photograph-header')
        this.wrapperCardsContainer = document.querySelector('#section-cards')
        this.photographerProvider = new PhotographerProvider('../../data/photographers.json')
        this.mediaProvider = new MediaProvider('../../data/photographers.json')
        this.idPhotographer = getPhotographerId()
    }

    async main() {
        /**
         * On recuperer les DATA a trier dans la page
         */
        const photographerData = await this.photographerProvider.getDataPhotographer()
        const mediaData = await this.mediaProvider.getDataMedia()
        /**
         * je creer mes filtres pour ne recuperer que les infos du photographe et sont travail
         */
        const photographerSelect = photographerData.filter(obj => obj.id == this.idPhotographer)
        const mediaPhotographer = mediaData.filter(obj => obj.photographerId == this.idPhotographer)
        /**
         * je creer mes Factories pour ma page
         */
        const FactoriesPhotographer = new PhotographerCardPage(photographerSelect)
        const FactoriesError = new ErrorPage()
        /**
         * ICI JE PASSE UNE CONDITION POUR TRAITER L'ERREUR ID DE L'URL
         */

        if (!iDifExist(photographerData, this.idPhotographer)) {
            this.wrapperCardsContainer.appendChild(
                FactoriesError.createErrorPage()
            );
        } else {
            this.sectionHeader.appendChild(
                FactoriesPhotographer.createPhotographerCardPage()
            )
            mediaPhotographer
                .map(mediaData => new Media(mediaData, photographerSelect))
                .forEach(mediaData => {
                    const FactoriesMedia = new MediaCardPage(mediaData)
                    this.wrapperCardsContainer.appendChild(
                        FactoriesMedia.createMediaCardPage()
                    )
                })
        }
    }

};

const photographerPage = new PhotographerPage()

photographerPage.main()
