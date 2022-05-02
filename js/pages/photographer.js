// import de tous les modules utile
import {getPhotographerId, iDifExist} from '../utils/pagePhotographer.js';
import {PhotographerProvider, MediaProvider} from '../provider/Provider.js';
import {Media} from '../models/media.js';
import {ErrorPage} from '../factories/errorPage/errorFactorie.js';
import {PhotographerCardPage} from '../factories/pagePhotographer.js';
import {MediaCardPage} from '../factories/mediaFactories.js';

class PhotographerPage {
    constructor() {
        this.sectionHeader = document.querySelector('.photograph-header')
        this.wrapperCardsContainer = document.querySelector('#section-cards')
        this.photographerProvider = new PhotographerProvider('../../data/photographers.json')
        this.mediaProvider = new MediaProvider('../../data/photographers.json')
    }

    async main() {
        const photographerData = await this.photographerProvider.getDataPhotographer();
        const mediaData = await this.mediaProvider.getDataMedia();
        // Je recupere l'id du photographe dans mon url
        let idRecup = getPhotographerId();

        // ICIC JE PASSE UNE CONDITION POUR EVITER DE PASSER UN MAUVAIS IDENTIFIER DANS L'URL
        if (!iDifExist(photographerData, idRecup)) {
            const FactoriesError = new ErrorPage();
            this.wrapperCardsContainer.appendChild(
                FactoriesError.createErrorPage()
            );
        } else {
            // je creer mes filtres pour ne recuperer que les infos du photographe et sont travail
            const photographerSelect = photographerData.filter(obj => obj.id == idRecup);

            const mediaPhotographer = mediaData.filter(obj => obj.photographerId == idRecup);

            const FactoriesPhotographer = new PhotographerCardPage(photographerSelect);

            this.sectionHeader.appendChild(
                FactoriesPhotographer.createPhotographerCardPage()
            )
            
            // TODO REGLER LE PROBLEME Du filtre des cartes

            mediaPhotographer
                .map(mediaData => new Media(mediaData, photographerSelect))

                .forEach(mediaData => {
                    const FactoriesMedia = new MediaCardPage(mediaData)
                    this.wrapperCardsContainer.appendChild(
                        FactoriesMedia.createMediaCardPage()
                    )
                });
        }
    }

};

const photographerPage = new PhotographerPage()

photographerPage.main()
