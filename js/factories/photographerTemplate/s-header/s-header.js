export class SectionHeader{
	constructor (photographe) {
		this._photographer = photographe
	}

	createSectionHeader(){
		/**
         * je creer ma section wrapper dans le DOM
         */
		const wrapperSection = document.createElement('section')
		wrapperSection.setAttribute('class', 'section-wrapper-header')

		wrapperSection.setAttribute('role', 'information du photographe')

		const headerTemplate = `
            <div id="one"
                role='information sur le photographe' 
                tabindex='0' 
                aria-label="Le photographe s'appelle 
                            ${this._photographer[0].name}, 
                            est habite ${this._photographer[0].city}, ${this._photographer[0].country},
                            il affiche comme message ${this._photographer[0].tagline} "
            >
                <h1 id="photographe-page-header_h2">
                    ${this._photographer[0].name}
                </h1>
                <p id="photographe-page-header_location">
                    ${this._photographer[0].city}, ${this._photographer[0].country}
                </p>
                <p id="photographe-page-header_tagline">
                    ${this._photographer[0].tagline}
                </p>
            </div>
            <div id="two">
                <button id="btn-header-displayModal"
                    class="contact_button"
                >
                    Contactez-moi
                </button>
            </div>
            <div id="three">
                <img id="header-page-photographer_image" 
                    alt="photo de profil de  ${this._photographer[0].name}" 
                    title="image de profil de  ${this._photographer[0].name}" 
                    src="/assets/Photographers-ID-Photos/${this._photographer[0].portrait}"
                >
            </div>
        `
		wrapperSection.innerHTML = headerTemplate
		/** On retourne la section Header avec les infos concernant le photographe selectionner */
		return wrapperSection
	}
}