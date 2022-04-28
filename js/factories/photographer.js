class PhotographerCard {
    constructor (photographe) {
        this._photographer = photographe
    }

    createPhotographerCard(){
        // je crée une balise html "article"
        const article = document.createElement('article');
        article.setAttribute("role", `${"information du photographe " + this._photographer.name} }`)
        // je crée une balise html "a" pour le liensvers la page du photographe
        const linkA = document.createElement('a');
        linkA.setAttribute("href", `photographer.html?id=${this._photographer.id}`);
        linkA.setAttribute("class", "wrapper-link-photographer");
        linkA.setAttribute("title", `${"liens vers la page de " + this._photographer.name}`);

        // je crée une balise html "img"
        const img = document.createElement('img');
        img.setAttribute("src", `${this._photographer.portrait}`);
        img.setAttribute("alt", `${"photo de profil de " + this._photographer.name}`)
        
        
        const h2 = document.createElement('h2');
        h2.innerHTML = this._photographer.name;
        h2.setAttribute("class", "name-photographer");

        // j'intègre la photo et le nom du photographe dans la balise "a"
        linkA.appendChild(img);
        linkA.appendChild(h2);

        // jec crée mes balise paragraphe pour inserer les informations des photographes.
        const location  = document.createElement('p');
        location.innerHTML = `${this._photographer.city} ${this._photographer.country}`;
        location.setAttribute("class", "photographer-location");

        const tagline = document.createElement ('p');
        tagline.innerHTML = this._photographer.tagline
        tagline.setAttribute("class", "photographer-profil");

        const price = document.createElement('p')
        price.innerHTML = `${this._photographer.price} €/jours`;
        price.setAttribute("class", "photographer-price");
        
        article.appendChild(linkA);
        article.appendChild(location);
        article.appendChild(tagline);
        article.appendChild(price);
        return article;
    }
}