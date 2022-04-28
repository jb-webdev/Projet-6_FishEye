class PhotographerCardPage {
    constructor (photographe) {
        this._photographer = photographe
    }

    createPhotographerCardPage(){
        // je creer ma section wrapper dans le DOM
        const wrapperSection = document.createElement("section");
        wrapperSection.setAttribute("class", "section-wrapper-header");

        // je creer le conteneur one
        const boxOne = document.createElement('div');
        boxOne.setAttribute("id", "one");
        // Je creer mes composant pour le conteneur one
        const h2Header = document.createElement("h2");
        h2Header.setAttribute("id", "photographe-page-header_h2");
        h2Header.innerHTML = this._photographer[0].name;

        const locationHeader = document.createElement("p");
        locationHeader.setAttribute("id", "photographe-page-header_location")
        locationHeader.innerHTML = `${this._photographer[0].city}, ${this._photographer[0].country}`;

        const taglineHeader = document.createElement("p");
        taglineHeader.setAttribute("id", "photographe-page-header_tagline");
        taglineHeader.innerHTML = this._photographer[0].tagline;

        // j'hydrate mon conteneur avec mes composants
        boxOne.appendChild(h2Header);
        boxOne.appendChild(locationHeader);
        boxOne.appendChild(taglineHeader);


        // maintenant je creer le conteneur two
        const boxTwo = document.createElement('div');
        boxTwo.setAttribute("id", "two");

        // Je creer mon composant button
        const buttonHeader = document.createElement("button");
        buttonHeader.setAttribute("class", "contact_button");
        buttonHeader.setAttribute("onclick", `displayModal()`);
        buttonHeader.innerHTML = "Contactez-moi";
        // j'hydrate mon conteneur avec mon composant
        boxTwo.appendChild(buttonHeader)

        // je creer le conteneur three
        const boxThree = document.createElement('div');
        boxThree.setAttribute("id", "three");

        // ici Je creer mon composant
        const imgHeader = document.createElement('img');
        imgHeader.setAttribute('id', "header-page-photographer_image");
        imgHeader.setAttribute('alt', `${"photo de profil de " + this._photographer[0].name}`);
        imgHeader.setAttribute('title', `${"photo de profil de " + this._photographer[0].name}`);
        imgHeader.setAttribute('src', `/assets/Photographers-ID-Photos/${this._photographer[0].portrait}`);


        // J'hydrate mon conteneur avec mon composant
        boxThree.appendChild(imgHeader);
        
        wrapperSection.appendChild(boxOne);
        wrapperSection.appendChild(boxTwo);
        wrapperSection.appendChild(boxThree);

        return wrapperSection;
    }
}