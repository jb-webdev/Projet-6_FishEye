/*** import des fonctions util par la vue */
import { getPhotographerId, iDifExist } from '../utils/functionsUtil.js' 
import { displayModal, closeModal } from '../utils/contactForm.js' /** Fonction pour l'ouverture et la fermeture de la modal message */
import { sortMedias, openFilter, closeFilter, essaiFilterSelect } from '../utils/filterFonction.js' /** Fonction pour le filtre */
import { recupName } from '../utils/lightBoxFunction.js'
import { firstName, lastName, validEmail, validMessage} from '../utils/contactForm.js'

/*** import des datas */
import {PhotographerProvider, MediaProvider} from '../provider/Provider.js'
/*** Import des Factories Utils pour la page */
import {Media} from '../models/media.js'
import { ErrorPage } from './errorPage.js'
import { SectionHeader } from '../factories/photographerTemplate/s-header/s-header.js'
import { SectionFilter } from '../factories/photographerTemplate/s-filter/s-filter.js'
import { SectionCards } from '../factories/photographerTemplate/s-cards/s-cards.js'
import { SectionModal } from '../factories/photographerTemplate/s-modal/s-modal.js'
import { SectionLightbox } from '../factories/photographerTemplate/s-lightBox/s-lightbox.js'


class PhotographerPage {
    constructor() {
        this.photographerProvider = new PhotographerProvider('../../data/photographers.json')
        this.mediaProvider = new MediaProvider('../../data/photographers.json')

        this.idPhotographer = getPhotographerId() /* On recupere l'id du photograph dans l'url */
        this.sectionHeader = document.querySelector('.photograph-header') /* On recupere le conteneur de la section Header */
        this.wrapperCardsContainer = document.getElementById('s-cards') /* On recupere le conteneur wrapper */
        this.wrapperFilterContainer = document.getElementById('s-filter') /* On recupere le container pour inserer le template du filtre */ 
        this.wrapperModalContainer = document.getElementById('s-modal') /* On recupere le container pour inserer le template de la modal message */
        this.openFilterBtn = document.querySelector('#btn-dropdown')
        this.wrapperLightboxContainer = document.querySelector('.box-image-slider') /** On recuperer le constenaire section lightbox par son id */
    }
    
    async main() {
        /*** On recuperer les DATA à trier dans la page */
        const photographerData = await this.photographerProvider.getDataPhotographer()
        const mediaData = await this.mediaProvider.getDataMedia()
        /*** je creer mes filtres pour ne recuperer que les infos du photographe et sont travail*/
        const photographerSelect = photographerData.filter(obj => obj.id == this.idPhotographer)
        const mediaPhotographer = mediaData.filter(obj => obj.photographerId == this.idPhotographer)
        
        const FactoriesError = new ErrorPage()
        const FactoriesHeader = new SectionHeader(photographerSelect)
        const FactoriesFilter = new SectionFilter()
        const FactoriesModal = new SectionModal(photographerSelect)


        var optionSelect = "option1"
        
        //const FactorieLightboox = new SectionLightbox()
        
        if(iDifExist(photographerData, this.idPhotographer)){
            /** On construit notre header a afficher sur la page */
            this.sectionHeader.appendChild(
                FactoriesHeader.createSectionHeader()
            )
            /** On construit notre filtre pour les medias à afficher sur la page */
            this.wrapperFilterContainer.appendChild(
                FactoriesFilter.createSectionFilter()
            )
            /** On ecoute les évenement pour l'ouverture et la fermeture du filtre */
            document.querySelector('#btn-dropdown').addEventListener('click', () => openFilter())
            document.querySelector('#btn-up').addEventListener('click', () => closeFilter())
            
           /** On construit notre modal message à afficher sur la page */
            this.wrapperModalContainer.appendChild(
                FactoriesModal.createSectionModal()
            )
            /** On ecoute l'evenement click sur le boutton pour afficher notre modal message */
            document.getElementById('btn-header-displayModal').addEventListener('click', () => displayModal())
            /** On ecoute l'evenement click sur le boutton pour fermer notre modal message */
            document.getElementById('closeModal').addEventListener('click', () => closeModal())
            
            var testOption = essaiFilterSelect()
            console.log(testOption)
            // retourne le resultat selectionner par l'utilisateur soit "date" || "titre" || "popularité"
            
            sortMedias(mediaPhotographer, optionSelect)
            
            
            
            /* On construit notre section cards du photographe selection à la page accueil */
            mediaPhotographer
            .map(mediaData => new Media(mediaData, photographerSelect))
            .forEach(mediaData => {
                const FactoriesCards = new SectionCards(mediaData)
                this.wrapperCardsContainer.appendChild(
                    FactoriesCards.createCards()
                )
            })
            /**On ecoute l'evenement sur le media et on creer notre lightbox */
            document.querySelectorAll('.itemSelectUser').forEach(
                item => { item.addEventListener('click', () =>{
                    document.getElementById('s-lightbox').style.display = "block"
                    const FactoriesLigthbox = new SectionLightbox(mediaPhotographer, item.id, recupName(photographerSelect))
                    this.wrapperLightboxContainer.appendChild(
                        FactoriesLigthbox.createSectionLightbox()
                    )
                })
            })
            /** ici on valide les entrees dans notre formulaire */
            document.getElementById('firstname').addEventListener("input", function (e) {
                firstName();
            });
            document.getElementById('lastname').addEventListener("input", function (e) {
                lastName();
            });
            document.getElementById('email').addEventListener("input", function (e) {
                validEmail();
            });
            document.getElementById('message').addEventListener('input', function (e) {
                validMessage()
            })
            document.forms["form"].addEventListener("submit", function (e) {
                
                let errorSubmitValidation = firstName()
                errorSubmitValidation = lastName() && errorSubmitValidation;
                errorSubmitValidation = validEmail() && errorSubmitValidation;
                errorSubmitValidation = validMessage() && errorSubmitValidation;
            
            
                if (errorSubmitValidation == false) {
                    e.preventDefault()
                    return false
                } else {
                    /** on bloc event default pour le moment */
                    e.preventDefault()
                    var valueToSend = {
                        "firstname" : document.forms["contact"]['firstname'].value,
                        "lastname" : document.forms["contact"]['lastname'].value,
                        "email" : document.forms["contact"]['email'].value,
                        "message" : document.forms["contact"]['message'].value,
                    }
                    console.log(valueToSend)
                    closeModal()

                    return true
                }
            })
        } else {
            /** si l'id n'existe pas dans les datas alors on affiche la page erreur et on redirige usr la page accueil */
            this.wrapperCardsContainer.appendChild(
                FactoriesError.createErrorPage()
            );  
        } 
    }

};

const photographerPage = new PhotographerPage()

photographerPage.main()
