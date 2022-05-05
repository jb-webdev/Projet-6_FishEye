export class PhotographerCardPage {
    constructor (photographe) {
        this._photographer = photographe
    }

    createPhotographerCardPage(){
        /**
         * je creer ma section wrapper dans le DOM
         */
        const wrapperSection = document.createElement("section");
        wrapperSection.setAttribute("class", "section-wrapper-header");

        
        const headerPhotographerTemplate = `
            <div id="one">
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
        wrapperSection.innerHTML = headerPhotographerTemplate;

        return wrapperSection;
    }
}