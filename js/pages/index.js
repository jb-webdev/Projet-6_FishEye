import {PhotographerApi} from '../api/Api.js';
import {PhotographerCard} from '../factories/photographer.js';
import {Photographer} from '../models/photographer.js';

class Index {
    constructor() {
        this.containerPhotographerCards = document.querySelector('.photographer_section')
        this.loaderAccueil = document.getElementById('loader')
        this.photographerApi = new PhotographerApi('../../data/photographers.json')
    }
    async main() {
        const photographerData = await this.photographerApi.getDataPhotographer();

        photographerData
            .map(photographe => new Photographer(photographe))
            .forEach(photographe => {
                // avec forEach je crée une carte par photographe dans mon DOM
                const Factories = new PhotographerCard(photographe)
                this.containerPhotographerCards.appendChild(
                    Factories.createPhotographerCard()
                    )
            });
            
    }
};

const index = new Index()

index.main()