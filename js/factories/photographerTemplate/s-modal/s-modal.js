
export class SectionModal {
	constructor (photographe) {
		this._photographer = photographe
	}
	createSectionModal(){
		const wrapperSection = document.createElement('div')
		wrapperSection.setAttribute('class', 'modal')
		wrapperSection.setAttribute('role', 'dialog')
		wrapperSection.setAttribute('aria-modal', 'true')
		wrapperSection.setAttribute('tabindex', '-1')
		wrapperSection.setAttribute('aria-labelledby', 'form')
        
		const modalTemplate = `
            <span class="close closeModal" id="closeModal" aria-labelledby="close" tabindex="0">
                <i class="fa-solid fa-xmark"></i>
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
                    <input id="btnSubmitMessage" class="btn-submit" type="submit" value="Envoyer" aria-label="soumettre" />
                </div>
            </form>
        `
		wrapperSection.innerHTML = modalTemplate
		return wrapperSection
	}
}