/* eslint-disable no-useless-escape */

export class SectionModal {
	constructor (photographe) {
		this._photographer = photographe
		this.wrapperModalContainer = document.getElementById('s-modal') /* On recupere le container pour inserer le template de la modal message */
		
	}
	createSectionModal(){
		const wrapperSection = document.createElement('div')
		wrapperSection.setAttribute('class', 'modal')
		wrapperSection.setAttribute('role', 'dialog')
		wrapperSection.setAttribute('aria-modal', 'true')
		wrapperSection.setAttribute('aria-labelledby', 'form')
		
        
		const modalTemplate = `
            <span class="close closeModal" id="closeModal" aria-labelledby="close">
				<span class="fa-solid fa-xmark"></span>
            </span>
            <h2 class="modal-title">Contactez-moi<br>${this._photographer[0].name}</h2>
            <form 
                id="form" 
                class="modal-form" 
                name="contact" 
                method="POST" 
                action="#" 
                role="group"
                aria-labelledby="formualire d'envoie de message" 
                aria-label="formulaire de contact"
            >
                <div class="modal-form-formData">
                    <label class="modal-form-formData-label" for="firstname">Prénom</label>
                    <input 
                        id="firstname" 
                        class="modal-form-formData-input" 
                        type="text" 
                        tabindex="0" 
                        aria-labelledby="prenom"
                        aria-describedby="veuillez saisir au moins deux caractères" placeholder="veuillez saisir votre prénom"
                        aria-required="true" 
                    />
                    <span class="pError" id="message-firstname"></span>
                </div>
                <div class="modal-form-formData">
                    <label class="modal-form-formData-label" for="lastname">Nom</label>
                    <input 
                        id="lastname" 
                        class="modal-form-formData-input" 
                        type="text" 
                        tabindex="0" 
                        aria-labelledby="nom"
                        aria-describedby="veuillez saisir au moins deux caractères" 
                        placeholder="veuillez saisir votre nom"
                        aria-required="true" 
                    />
                    <span id="message-lastname" class="pError"></span>
                </div>
                <div class="modal-form-formData">
                    <label class="modal-form-formData-label" for="email">Email</label>
                    <input 
                        id="email" 
                        class="modal-form-formData-input" 
                        type="email"
                        tabindex="0" 
                        aria-labelledby="email"
                        aria-describedby="veuillez saisir une adresse email valide" 
                        placeholder="veuillez saisir votre email"
                        aria-required="true" 
                    />
                    <span class="pError" id="message-email"></span>
                </div>
                <div class="modal-form-formData">
                    <label class="modal-form-formData-labelArea" for="message">Votre message</label>
                    <textarea 
                        id="message" 
                        class="modal-form-formData-textarea" 
                        name="message" 
                        minlength="2" 
                        maxlength="250"
                        aria-labelledby="message"
                        aria-describedby="veuillez saisir votre message avec un minimum de deux caractères et un maximum de 250 caractères"
                        placeholder="veuillez saisir votre message"
                    ></textarea>
                    <span class="pError" id="message-message"></span>
                </div>
                <div class="divBtn">
                    <input id="btnSubmitMessage" class="btn-submit" type="submit" value="Envoyer" aria-label="Envoyer le message" />
                </div>
            </form>
        `
		wrapperSection.innerHTML = modalTemplate
		this.wrapperModalContainer.appendChild(wrapperSection)
		return this.wrapperModalContainer
	}

	/**
     * Ouverture de la modal modal
     * @param {*} action 
     */
	displayModal(action){
		if (action === 'open'){
			const btnContact = document.getElementById('btn-header-displayModal')
			const filter = document.getElementById('s-filter')
			const btnDropdown = document.getElementById('btn-dropdown')
			const cards = document.getElementById('s-cards')
			const modal = document.getElementById('s-modal')
			const divModal = document.querySelector('.modal')

			document.querySelectorAll('.itemSelectUser').forEach(item => {
				item.setAttribute('tabindex', -1)
			})
			document.querySelectorAll('.card-description').forEach(item => {
				item.setAttribute('tabindex', -1)
			})
			btnContact.setAttribute('tabindex', -1)
			filter.setAttribute('tabindex', -1)
			btnDropdown.setAttribute('tabindex', -1)
			cards.setAttribute('tabindex', -1)
			divModal.setAttribute('tabindex', 0)
			modal.setAttribute('aria-hiden', 'false')
			modal.style.display = 'block'	
			divModal.focus()
		} else if (action === 'close'){

			const btnContact = document.getElementById('btn-header-displayModal')
			const filter = document.getElementById('s-filter')
			const btnDropdown = document.getElementById('btn-dropdown')
			const cards = document.getElementById('s-cards')
			const modal = document.getElementById('s-modal')

			document.querySelectorAll('.itemSelectUser').forEach(item => {
				item.setAttribute('tabindex', 0)
			})
			document.querySelectorAll('.card-description').forEach(item => {
				item.setAttribute('tabindex', 0)
			})
			btnContact.setAttribute('tabindex', 0)
			filter.setAttribute('tabindex', 0)
			btnDropdown.setAttribute('tabindex', 0)
			cards.setAttribute('tabindex', 0)
			modal.setAttribute('aria-hiden', 'true')
			modal.style.display = 'none'
		}
	}


	/**
     * Fonction pour l'ouverture et la fermeture de la modal
     * 
     */
	eventModal(){
		/** On ecoute l'evenement click sur le boutton pour afficher notre modal message */
		document.getElementById('btn-header-displayModal').addEventListener('click', () => this.displayModal('open'))
		/** On ecoute l'evenement click et keydown sur le boutton pour fermer notre modal message */
		document.getElementById('closeModal').addEventListener('click', () => this.displayModal('close') )
		document.getElementById('closeModal').addEventListener('keydown', (e) => { if (e.key === 'Enter') { this.displayModal('close') } })
		window.addEventListener('keyup', event =>{
			var nomTouche = event.key
			if (nomTouche === 'Escape') {
				this.displayModal('close') 
			}
		})
	}
	
	/**
     * Fonction validation formulaire prenom / firstname
     * @returns bollean
     */

	firstName() {
		const elt = document.forms['contact']['firstname'].value
		let regex = /^[a-zA-Z-\s]{2,}$/
		let errorFirstName = false

		let msgError = document.getElementById('message-firstname')
		let errorInputBorder = document.getElementById('firstname')

		if (!elt) {
			msgError.innerText = 'Le champ ne doit pas être vide !'
			msgError.style.backgroundColor = 'red'
			errorInputBorder.style.border = '3px solid red'
			errorFirstName = false
		} else if (!regex.test(elt)) {
			msgError.innerText = 'Veuillez entrer 2 caractères ou plus'
			msgError.style.backgroundColor = 'red'
			errorInputBorder.style.border = '3px solid red'
			errorFirstName = false
		} else if (regex.test(elt)) {
			msgError.innerText = 'super ! '
			msgError.style.color = 'green'
			msgError.style.backgroundColor = 'transparent'
			errorInputBorder.style.border = '3px solid green'
			errorInputBorder.style.background = '#ffffff'
			errorFirstName = true
		}
		else {
			errorFirstName = true
		}
		return errorFirstName
	}
	/**
     * Fonction validation formulaire nom / name
     * @returns bollean
     */
	lastName() {
		const elt = document.forms['contact']['lastname'].value
		let regex = /^[a-zA-Z-\s]{2,}$/
		let errorLastName = false

		let msgError = document.getElementById('message-lastname')
		let errorInputBorder = document.getElementById('lastname')

		if (!elt) {
			msgError.innerText = 'Le champ ne doit pas être vide !'
			msgError.style.backgroundColor = 'red'
			errorInputBorder.style.border = '3px solid red'
			errorLastName = false
		} else if (!regex.test(elt)) {
			msgError.innerText = 'Veuillez entrer 2 caractères ou plus'
			msgError.style.backgroundColor = 'red'
			errorInputBorder.style.border = '3px solid red'
			errorLastName = false
		} else if (regex.test(elt)) {
			msgError.innerText = 'super ! '
			msgError.style.color = 'green'
			msgError.style.backgroundColor = 'transparent'
			errorInputBorder.style.border = '3px solid green'
			errorInputBorder.style.background = '#ffffff'
			errorLastName = true
		}
		else {
			errorLastName = true
		}
		return errorLastName
	}
	/**
     * Fonction validation formulaire email
     * @returns bollean
     */
	validEmail() {
		let elt = document.forms['contact']['email'].value
		let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		let errorEmail = false
		let errorInputBorder = document.getElementById('email')

		let msgError = document.getElementById('message-email')

		if (!elt) {
			msgError.innerHTML = 'Le champ ne doit pas être vide !'
			msgError.style.backgroundColor = 'red'
			errorInputBorder.style.border = '3px solid red'
			errorEmail = false
		} else if (!regexEmail.test(elt)) {
			msgError.innerHTML = 'Votre email est invalide'
			msgError.style.backgroundColor = 'red'
			errorInputBorder.style.border = '3px solid red'
			errorEmail = false
		} else if (regexEmail.test(elt)) {
			msgError.innerText = 'super ! '
			msgError.style.color = 'green'
			msgError.style.backgroundColor = 'transparent'
			errorInputBorder.style.border = '3px solid green'
			errorInputBorder.style.background = '#ffffff'
			errorEmail = true
		}
		return errorEmail

	}
	/**
     * Fonction validation formulaire message
     * @returns bollean
     */
	validMessage() {
		let elt = document.forms['contact']['message'].value
		// eslint-disable-next-line no-useless-escape
		let regexMessage = /^[a-zA-Z-\!\?\.\,\;\s]{2,250}$/
		let errormessage = false
		let errorInputBorder = document.getElementById('message')

		let msgError = document.getElementById('message-message')

		if (!elt) {
			msgError.innerHTML = 'Le champ ne doit pas être vide !'
			msgError.style.backgroundColor = 'red'
			errorInputBorder.style.border = '3px solid red'
			errormessage = false
		} else if (!regexMessage.test(elt)) {
			msgError.innerHTML = 'Votre message est invalide'
			msgError.style.backgroundColor = 'red'
			errorInputBorder.style.border = '3px solid red'
			errormessage = false
		} else if (regexMessage.test(elt)) {
			msgError.innerText = 'super ! '
			msgError.style.color = 'green'
			msgError.style.backgroundColor = 'transparent'
			errorInputBorder.style.border = '3px solid green'
			errorInputBorder.style.background = '#ffffff'
			errormessage = true
		}
		return errormessage
	}

	validForm() {
		/** On valide les entrees dans notre formulaire */
		document.getElementById('firstname').addEventListener('input', () => {
			this.firstName()
		})
		document.getElementById('lastname').addEventListener('input', () => {
			this.lastName()
		})
		document.getElementById('email').addEventListener('input', () => {
			this.validEmail()
		})
		document.getElementById('message').addEventListener('input', () => {
			this.validMessage()
		})
		document.forms['form'].addEventListener('submit', (e) => {
			let errorSubmitValidation = this.firstName()
			errorSubmitValidation = this.lastName() && errorSubmitValidation
			errorSubmitValidation = this.validEmail() && errorSubmitValidation
			errorSubmitValidation = this.validMessage() && errorSubmitValidation
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
				this.displayModal('close')
				return true
			}
		})
	}
}