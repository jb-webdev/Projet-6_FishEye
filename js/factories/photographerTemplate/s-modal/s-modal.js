
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
            <span class="close closeModal" id="closeModal" aria-labelledby="close" tabindex="0"></span>
            <h2 class="modal-title">Contactez-moi<br>${this._photographer[0].name}</h2>
            <form id="form" class="modal-form" name="contact" method="POST" action="#" aria-label="formulaire de contact">
                <div class="modal-form-formData">
                    <label class="modal-form-formData-label" for="firstname">Prénom</label>
                    <input id="firstname" class="modal-form-formData-input" type="text" tabindex="0"
                        aria-labelledby="message-firstname" aria-required="true" />
                    <span class="pError" id="message-firstname"></span>
                </div>
                <div class="modal-form-formData">
                    <label class="modal-form-formData-label" for="lastname">Nom</label>
                    <input id="lastname" class="modal-form-formData-input" type="text" tabindex="0"
                        aria-labelledby="message-lastname" aria-required="true" />
                    <span id="message-lastname" class="pError"></span>
                </div>
                <div class="modal-form-formData">
                    <label class="modal-form-formData-label" for="email">Email</label>
                    <input class="modal-form-formData-input" id="email" type="email" tabindex="0" aria-labelledby="message-email"
                        aria-required="true"/>
                    <span class="pError" id="message-email"></span>
                </div>
                <div class="modal-form-formData">
                    <label class="modal-form-formData-labelArea" for="message">Votre message</label>
                    <textarea id="message" class="modal-form-formData-textarea" name="message" minlength="2" maxlength="250"
                        tabindex="0" aria-labelledby="message-message"></textarea>
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