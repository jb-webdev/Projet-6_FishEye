export class HomePhotographerCard {
	constructor (photographe) {
		this._photographer = photographe
	}

	createHomePhotographerCard(){
		/**
         * je crée une balise html "article"
         */
		const article = document.createElement('article')
		article.setAttribute('role', `${'information du photographe ' + this._photographer.name} }`)

		const HomeTemplateCard = `
            <a class="wrapper-link-photographer" 
                href="photographer.html?id=${this._photographer.id}" 
                title="${'liens vers la page de ' + this._photographer.name}"
            >
                <img 
                    src="${this._photographer.portrait}" 
                    alt="photo de profil de "
                >
                <h2 class="name-photographer">${this._photographer.name}</h2>
                <p class="wrapper-info-photographer">
                    <span class="photographer-location"> ${this._photographer.city}, ${this._photographer.country}</span>
                    <span class="photographer-profil"> ${this._photographer.tagline}</span>
                    <span class="photographer-price"> ${this._photographer.price}€/jour</span>
                </p>
            </a>
        `
        
		article.innerHTML = HomeTemplateCard

		return article
	}
}