/*** import des fonctions util par la vue */
import { getPhotographerId, iDifExist } from '../utils/functionsUtil.js'
import { displayModal, closeModal } from '../utils/contactForm.js' /** Fonction pour l'ouverture et la fermeture de la modal message */
import { sortMedias, openFilter, closeFilter, changeFilter } from '../utils/filterFonction.js' /** Fonction pour le filtre */
import { recupName, activeElement, removeElement, indexFigure } from '../utils/lightBoxFunction.js'
import { firstName, lastName, validEmail, validMessage } from '../utils/contactForm.js'
//import { addNumberLikes } from '../utils/likesSum.js'
/*** import des datas */
import { PhotographerProvider, MediaProvider } from '../provider/Provider.js'
/*** Import des Factories Utils pour la page */
import { Media } from '../models/media.js'
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
		this.wrapperSectionLightbox = document.getElementById('s-lightbox')
		this.openFilterBtn = document.querySelector('#btn-dropdown')
		this.wrapperLightboxContainer = document.querySelector('.box-image-slider') /** On recuperer le constenaire section lightbox par son id */


	}

	dislayPhotographer(listdatas, photographerSelect) {
		this.wrapperCardsContainer.innerHTML = ''
		listdatas
			.map(mediaData => new Media(mediaData, photographerSelect))
			.forEach(mediaData => {
				const FactoriesCards = new SectionCards(mediaData)
				this.wrapperCardsContainer.appendChild(
					FactoriesCards.createCards()
				)
			})

		/** On ecoute l'evenement pour afficher notre lightBox */
		document.querySelectorAll('.itemSelectUser').forEach(
			item => {
				item.addEventListener('click', () => {
					const idMediaSelect = item.id
					const nbrSlide = listdatas.length
					const sliderLeft = document.querySelector('.lightbox-left')
					const sliderRight = document.querySelector('.lightbox-right')
					const closeSlider = document.querySelector('.closeSlider')
					var index = indexFigure(listdatas, idMediaSelect)
					this.wrapperSectionLightbox.style.display = 'block'
					this.wrapperSectionLightbox.setAttribute('aria-hidden', 'true')
					this.wrapperFilterContainer.setAttribute('aria-hidden', 'false')
					this.sectionHeader.setAttribute('aria-hidden', 'false')
					this.wrapperCardsContainer.setAttribute('aria-hidden', 'false')
					closeSlider.focus()
					activeElement(idMediaSelect)
					var indexToSuprim = listdatas[index].id

					const next = (direction) => {
						var indexActive = index
						if (direction == 'next') {
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
						removeElement(listdatas[indexActive].id)
						activeElement(listdatas[index].id)
						indexToSuprim = listdatas[index].id
					}
					sliderLeft.onclick = () => { next('prev') }
					sliderLeft.addEventListener('keypress', (e) => {
						if (e.key === 'Enter') {
							next('prev')
						}
					})
					sliderRight.onclick = () => { next('next') }
					sliderRight.addEventListener('keypress', (e) => {
						if (e.key === 'Enter') {
							next('next')
						}
					})

					/* On ecoute l'evenement pour fermer notre LIGHTBOX et revenir sur la page photographe */
					closeSlider.onclick = () => {
						removeElement(indexToSuprim)
						document.getElementById('s-lightbox').style.display = 'none'
					}
					closeSlider.addEventListener('keypress', (e) => {
						if (e.key === 'Enter') {
							removeElement(indexToSuprim)
							document.getElementById('s-lightbox').style.display = 'none'
						}
					})

				})
			})
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



		if (iDifExist(photographerData, this.idPhotographer)) {
			const options = document.querySelectorAll('.dropdown-option')

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
			/** On ecoute l'evenement click et keydown sur le boutton pour fermer notre modal message */
			document.getElementById('closeModal').addEventListener('click', () => closeModal())
			document.getElementById('closeModal').addEventListener('keydown', (e) => { if (e.key === 'Enter') { closeModal() } })

			/** On ecoute l'evenement sur le Filtre */
			options.forEach(el => {
				el.addEventListener('click', event => {
					const optionId = event.target.getAttribute('id')
					changeFilter(optionId)
					this.dislayPhotographer(sortMedias(mediaPhotographer, optionId), photographerSelect)


				})

				el.addEventListener('keypress', event => {
					if (event.key === 'Enter') {
						const optionId = event.target.getAttribute('id')
						changeFilter(optionId)
						this.dislayPhotographer(sortMedias(mediaPhotographer, optionId), photographerSelect)
					}

				})
			})

			this.dislayPhotographer(sortMedias(mediaPhotographer, 'popularite'), photographerSelect)


			/**création de la lightbox */
			const FactoriesLigthbox = new SectionLightbox(mediaPhotographer, recupName(photographerSelect))
			this.wrapperLightboxContainer.appendChild(
				FactoriesLigthbox.createSectionLightbox()
			)

			/** ici on valide les entrees dans notre formulaire */
			document.getElementById('firstname').addEventListener('input', () => {
				firstName()
			})
			document.getElementById('lastname').addEventListener('input', () => {
				lastName()
			})
			document.getElementById('email').addEventListener('input', () => {
				validEmail()
			})
			document.getElementById('message').addEventListener('input', () => {
				validMessage()
			})
			document.forms['form'].addEventListener('submit', (e) => {
				let errorSubmitValidation = firstName()
				errorSubmitValidation = lastName() && errorSubmitValidation
				errorSubmitValidation = validEmail() && errorSubmitValidation
				errorSubmitValidation = validMessage() && errorSubmitValidation
				if (errorSubmitValidation == false) {
					e.preventDefault()
					return false
				} else {
					/** on bloc event default pour le moment */
					e.preventDefault()
					var valueToSend = {
						'firstname': document.forms['contact']['firstname'].value,
						'lastname': document.forms['contact']['lastname'].value,
						'email': document.forms['contact']['email'].value,
						'message': document.forms['contact']['message'].value,
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
			)
		}
	}
}

const photographerPage = new PhotographerPage()

photographerPage.main()
