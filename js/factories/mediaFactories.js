class MediaCardPage {
    constructor(mediaData) {
        this._media = mediaData
    }

    createMediaCardPage() {
        // tous d'abord je regle le probème de la gestion du chemin pour les images.
        const namePhotographer = this._media._name;
        const recupPrenom = namePhotographer.substring(0, namePhotographer.indexOf(" "));
        const pathImage = recupPrenom.replace('-', ' ');
        

        // 1 - Ensuite ICI JE CREER LA CARTE DU MEDIA
        const card = document.createElement('div');
        card.setAttribute("class", "card");

        // 2 - JE CREER MON COMPO IMAGE 
        const boxImage = document.createElement('div');
        boxImage.setAttribute("class", "card-img")

        // J'HYDRATE MON COMPO WRAPPERCARD
        card.appendChild(boxImage);

        // 5 - ICI JE CREER MA BALISE IMAGE
        const imgTag = document.createElement('img');
        imgTag.setAttribute("src", `./assets/photographer-img/${pathImage}/${this._media._image}`);
        imgTag.setAttribute("alt", `Le titre de l'image est ${this._media.title}`),
        imgTag.setAttribute("title", `Le titre de l'image est ${this._media.title}`),

        // 6 - J'HYDRATE MON COMPOSANT boxImage
        boxImage.appendChild(imgTag);
        
        
        // 7 - ICI JE CREE MON COMPOSANT DESCRIPTION
        const descriptionTag = document.createElement('div');
        descriptionTag.setAttribute("class", "card-description" );
        
        // 8 - JE CREER MON COMPOSANT H2
        const h2Tag = document.createElement("h2");
        h2Tag.innerHTML = this._media.title;
        h2Tag.setAttribute("class", "card-descripiton_title")
        descriptionTag.appendChild(h2Tag);

        // 9 - ICI JE CREER MA BALISE SPAN LIKES
        const spanTag = document.createElement("span", "span");
        spanTag.setAttribute("class", "card-description_like");
        spanTag.innerHTML = this._media._likes;

        const iconTag = document.createElement("i");
        iconTag.setAttribute("class", "fa-solid fa-heart");

        spanTag.appendChild(iconTag);
        descriptionTag.appendChild(spanTag);
        
        card.appendChild(descriptionTag);
        return card;
    }
}