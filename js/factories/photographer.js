class PhotographerCard {
    constructor (photographe) {
        this._photographer = photographe
    }

    createPhotographerCard(){
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", `${this._photographer.portrait}`);
        const h2 = document.createElement('h2');
        h2.innerHTML = this._photographer.name;
        const location  = document.createElement('p');
        location.innerHTML = `${this._photographer.city} ${this._photographer.country}`;
        const tagline = document.createElement ('p');
        tagline.innerHTML = this._photographer.tagline
        const price = document.createElement('p')
        price.innerHTML = `${this._photographer.price} €/jours`;
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tagline);
        article.appendChild(price);
        return article;
    }
}