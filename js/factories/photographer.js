export class PhotographerCard {
    constructor (photographe) {
        this._photographer = photographe
    }

    createPhotographerCard(){
        // je crée une balise html "article"
        const article = document.createElement('article');
        article.setAttribute("role", `${"information du photographe " + this._photographer.name} }`)

        const HomeTemplate = `
            <a class="wrapper-link-photographer" 
                href="photographer.html?id=${this._photographer.id}" 
                title="${"liens vers la page de " + this._photographer.name}"
            >
                <img 
                    src="${this._photographer.portrait}" 
                    alt="photo de profil de ${this._photographer.name}">
                <h2 class="name-photographer">${this._photographer.name}</h2>
            </a>
            <p class="photographer-location">${this._photographer.city}, ${this._photographer.country}</p>
            <p class="photographer-profil">${this._photographer.tagline}</p>
            <p class="photographer-price">${this._photographer.price}€/jour</p>
        `;
        
        article.innerHTML = HomeTemplate;

        return article;
    }
}