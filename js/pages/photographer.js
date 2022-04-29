//Mettre le code JavaScript lié à la page photographer.html
class PhotographerPage {
    constructor() {

        this.sectionHeader = document.querySelector('.photograph-header')
        this.wrapperCardsContainer = document.querySelector('#section-cards')
        this.photographerApi = new PhotographerApi('../../data/photographers.json')
        this.mediaApi = new MediaApi('../../data/photographers.json')
    }

    async main() {
        const photographerData = await this.photographerApi.getDataPhotographer();
        const mediaData = await this.mediaApi.getDataMedia();
        // Je recupere l'id du photographe dans mon url
        function getPhotographerId() {
            return new URL(location.href).searchParams.get("id");
        }
        let idRecup = getPhotographerId();
        // ICI JE CONTROLE SI L'ID EXISTE AVANT DE RÉALISÉ LES TRITEMENTS D'AFFICHAGE
        function iDifExist(obj, id) {
            let compteur = false;
            for (let i = 0; i < obj.length; i++) {
                if (obj[i].id == id) {
                    compteur = true;
                }
            }
            return compteur
        }
        
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
