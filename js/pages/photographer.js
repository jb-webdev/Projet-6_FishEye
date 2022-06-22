/*** import des fonctions util par la vue */
import { getPhotographerId, iDifExist, modifyId} from '../factories/photographerTemplate/functionsUtil.js'
import { recupName, activeElement, removeElement, indexFigure, changeTabIndex} from '../factories/photographerTemplate/s-lightBox/lightBoxFunction.js' /**Fonction pour la lightbox */

/*** import des datas */
import { PhotographerProvider, MediaProvider } from '../provider/Provider.js'

/*** Import des Factories Utils pour la page */
import { Media } from '../models/media.js'
import { ErrorPage } from './errorPage.js'
import { SectionHeader } from '../factories/photographerTemplate/s-header.js'
import { SectionFilter } from '../factories/photographerTemplate/s-filter.js'
import { SectionModal } from '../factories/photographerTemplate/s-modal.js'
import { SectionCards } from '../factories/photographerTemplate/s-cards.js'
import { HeartLikes } from '../factories/photographerTemplate/HeartLikes.js'
import { SectionLightbox } from '../factories/photographerTemplate/s-lightBox/s-lightbox.js'

class PhotographerPage {
	constructor() {
		this.photographerProvider = new PhotographerProvider('../../data/photographers.json')
		this.mediaProvider = new MediaProvider('../../data/photographers.json')
		this.idPhotographer = getPhotographerId() /* On recupere l'id du photograph dans l'url */
		this.heartLikes = new HeartLikes()

		this.wrapperSectionLightbox = document.getElementById('s-lightbox') /**On recupere le container pour notre lightBox */
		this.sectionHeader = document.querySelector('.photograph-header') /* On recupere le conteneur de la section Header */
		this.wrapperCardsContainer = document.getElementById('s-cards') /* On recupere le conteneur wrapper */
		this.wrapperFilterContainer = document.getElementById('s-filter') /* On recupere le container pour inserer le template du filtre */
		this.wrapperModalContainer = document.getElementById('s-modal') /* On recupere le container pour inserer le template de la modal message */
		this.openFilterBtn = document.querySelector('#btn-dropdown') /** On recupere notre container filter */
		this.wrapperLightboxContainer = document.querySelector('.box-image-slider') /** On recuperer le constenaire section lightbox par son id */
		this.infoPrice = document.getElementById('s-info-price') /** On recupere notre container info-price pour afficher le tarif du photographe*/
		this.infoLikes = document.getElementById('s-info-totalLikes') /** On recupere notre container totalLikes pour l'affichage du nombre de likes total du photographe */
		
	}
	/** On creer une function global pour modifier notre affichage dynamiquement selon les choix de notre utilisateur  */
	dislayPhotographer(listdatas, photographerSelect) {
		this.wrapperCardsContainer.innerHTML = ''
		listdatas
			.map(mediaData => new Media(mediaData, photographerSelect))
			.forEach(mediaData => {
				const FactoriesCards = new SectionCards(mediaData, this.heartLikes.heart)
				FactoriesCards.createCards()
			})
		/** Modal likes et price du photographe */
		this.infoPrice.innerHTML = `${photographerSelect[0].price} €/jour`
		this.infoLikes.innerHTML = this.heartLikes.totalLikesPhotographer

		/**Gestion des likes */
		const likesTag = document.querySelectorAll('.fa-heart')
		likesTag.forEach(el => {
			el.addEventListener('click', event => {
				let idMediaWindow = event.target.getAttribute('id')
				let idMedia = modifyId(idMediaWindow, 'heart-')
				let position = this.heartLikes.heart.indexOf(idMedia)
				if(position < 0) {
					this.heartLikes.addLikes(idMedia)
					let tagHeart = document.getElementById('heart-'+ idMedia).classList
					tagHeart.remove('fa-regular')
					tagHeart.remove('fa-heart')
					tagHeart.add('fa-solid')
					tagHeart.add('fa-heart')
					let spanLike = document.getElementById('spanLikes-' + idMedia)
					spanLike.innerHTML = parseInt(spanLike.innerHTML) +1
					this.infoLikes.innerHTML = parseInt(this.infoLikes.innerHTML)  +1
	
				} else {
					this.heartLikes.supLikes(idMedia)
					let tagHeart = document.getElementById('heart-'+ idMedia).classList
					tagHeart.remove('fa-solid')
					tagHeart.remove('fa-heart')
					tagHeart.add('fa-regular')
					tagHeart.add('fa-heart')
					let spanLike = document.getElementById('spanLikes-' + idMedia)
					spanLike.innerHTML = parseInt(spanLike.innerHTML) -1
					this.infoLikes.innerHTML = parseInt(this.infoLikes.innerHTML) -1
				}
			})
		})

		/**OpenCaroussel */
		document.querySelectorAll('.itemSelectUser').forEach(item => {
			item.addEventListener('click', () => {
				const idMediaSelect = item.id
				const nbrSlide = listdatas.length
				const sliderLeft = document.querySelector('.lightbox-left')
				const sliderRight = document.querySelector('.lightbox-right')
				const closeSlider = document.querySelector('.closeSlider')
				var index = indexFigure(listdatas, idMediaSelect)
				this.wrapperSectionLightbox.style.display = 'block'
				this.wrapperSectionLightbox.setAttribute('aria-hidden', 'false')
				this.wrapperFilterContainer.setAttribute('aria-hidden', 'true')
				this.sectionHeader.setAttribute('aria-hidden', 'true')
				this.wrapperCardsContainer.setAttribute('aria-hidden', 'true')
				changeTabIndex('off')
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
					this.wrapperSectionLightbox.style.display = 'none'
					this.wrapperSectionLightbox.setAttribute('aria-hidden', 'true')
					this.wrapperFilterContainer.setAttribute('aria-hidden', 'false')
					this.sectionHeader.setAttribute('aria-hidden', 'false')
					this.wrapperCardsContainer.setAttribute('aria-hidden', 'false')
					changeTabIndex('on')
				}
				closeSlider.addEventListener('keypress', (e) => {
					if (e.key === 'Enter') {
						removeElement(indexToSuprim)
						this.wrapperSectionLightbox.style.display = 'none'
					}
				})
				window.addEventListener('keyup', event =>{
					var nomTouche = event.key
					if(nomTouche === 'ArrowLeft'){
						next('prev')
					} if (nomTouche === 'ArrowRight') {
						next('next')
					} if (nomTouche === 'Escape') {
						removeElement(indexToSuprim)
						this.wrapperSectionLightbox.style.display = 'none'
						this.wrapperSectionLightbox.setAttribute('aria-hidden', 'true')
						this.wrapperFilterContainer.setAttribute('aria-hidden', 'false')
						this.sectionHeader.setAttribute('aria-hidden', 'false')
						this.wrapperCardsContainer.setAttribute('aria-hidden', 'false')
						changeTabIndex('on')
					}
				})
			})
			item.addEventListener('keypress', event => {
				if (event.key === 'Enter') {
					const idMediaSelect = item.id
					const nbrSlide = listdatas.length
					const sliderLeft = document.querySelector('.lightbox-left')
					const sliderRight = document.querySelector('.lightbox-right')
					const closeSlider = document.querySelector('.closeSlider')
					var index = indexFigure(listdatas, idMediaSelect)
					this.wrapperSectionLightbox.style.display = 'block'
					this.wrapperSectionLightbox.setAttribute('aria-hidden', 'false')
					this.wrapperFilterContainer.setAttribute('aria-hidden', 'true')
					this.sectionHeader.setAttribute('aria-hidden', 'true')
					this.wrapperCardsContainer.setAttribute('aria-hidden', 'true')
					changeTabIndex('off')
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
						this.wrapperSectionLightbox.style.display = 'none'
						this.wrapperSectionLightbox.setAttribute('aria-hidden', 'true')
						this.wrapperFilterContainer.setAttribute('aria-hidden', 'false')
						this.sectionHeader.setAttribute('aria-hidden', 'false')
						this.wrapperCardsContainer.setAttribute('aria-hidden', 'false')
						changeTabIndex('on')
					}
					closeSlider.addEventListener('keypress', (e) => {
						if (e.key === 'Enter') {
							removeElement(indexToSuprim)
							this.wrapperSectionLightbox.style.display = 'none'
						}
					})
					window.addEventListener('keyup', event =>{
						var nomTouche = event.key
						if(nomTouche === 'ArrowLeft'){
							next('prev')
						} if (nomTouche === 'ArrowRight') {
							next('next')
						} if (nomTouche === 'Escape') {
							removeElement(indexToSuprim)
							this.wrapperSectionLightbox.style.display = 'none'
							this.wrapperSectionLightbox.setAttribute('aria-hidden', 'true')
							this.wrapperFilterContainer.setAttribute('aria-hidden', 'false')
							this.sectionHeader.setAttribute('aria-hidden', 'false')
							this.wrapperCardsContainer.setAttribute('aria-hidden', 'false')
							changeTabIndex('on')
						}
					})
					
				}
			})
		})
	}
	

	async main() {
		/*** On recuperer les DATAS à trier dans la page */
		const photographerData = await this.photographerProvider.getDataPhotographer()
		const mediaData = await this.mediaProvider.getDataMedia()
		/*** je creer mes filtres pour ne recuperer que les infos du photographe et sont travail*/
		const photographerSelect = photographerData.filter(obj => obj.id == this.idPhotographer)
		const mediaPhotographer = mediaData.filter(obj => obj.photographerId == this.idPhotographer)

		/** On calcul le nombre de likes du photographe */
		this.heartLikes.LikesPhotographer(mediaPhotographer)
		
		/**On creer nos factories */
		const FactoriesError = new ErrorPage()
		const FactoriesHeader = new SectionHeader(photographerSelect)
		const FactoriesFilter = new SectionFilter()
		const FactoriesModal = new SectionModal(photographerSelect)
		const FactoriesLigthbox = new SectionLightbox(mediaPhotographer, recupName(photographerSelect))
		

		/**On utilise une condition pour l'affichage ou pas de la page error */
		if (iDifExist(photographerData, this.idPhotographer)) {
			/** On construit notre header a afficher sur la page */
			FactoriesHeader.createSectionHeader()
			/** On construit notre filtre pour les medias à afficher sur la page */
			FactoriesFilter.initUtilSectionFilterMethod()
			/** On construit notre Modal pour le message */
			FactoriesModal.initUtilSectionModalMethod()
			/** On ecoute l'evenement sur le Filtre */
			const options = document.querySelectorAll('.dropdown-option')
			options.forEach(el => {
				el.addEventListener('click', event => {
					const optionId = event.target.getAttribute('id')
					FactoriesFilter.changeFilter(optionId)
					this.dislayPhotographer(FactoriesFilter.sortMedias(mediaPhotographer, optionId), photographerSelect)
				})
				el.addEventListener('keypress', event => {
					if (event.key === 'Enter') {
						const optionId = event.target.getAttribute('id')
						FactoriesFilter.changeFilter(optionId)
						this.dislayPhotographer(FactoriesFilter.sortMedias(mediaPhotographer, optionId), photographerSelect)
					}
				})
			})
			
			this.dislayPhotographer(FactoriesFilter.sortMedias(mediaPhotographer, 'popularite'), photographerSelect)
			/**création de la lightbox */
			FactoriesLigthbox.createSectionLightbox()
				
		} else {
			/** si l'id n'existe pas dans les datas alors on affiche la page erreur et on redirige vers la page accueil */
			this.wrapperCardsContainer.appendChild(
				FactoriesError.createErrorPage()
			)
		}
	}
}

const photographerPage = new PhotographerPage()

photographerPage.main()
