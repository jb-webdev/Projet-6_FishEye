import {PhotographerProvider} from '../provider/Provider.js';
import { HomePhotographerCard } from '../factories/homeTemplateCard/homePhotographerCard.js';
import {Photographer} from '../models/photographer.js';

class Index {
    constructor() {
        this.containerPhotographerCards = document.querySelector('.photographer_section')
        this.loaderAccueil = document.getElementById('loader')
        this.photographerProvider = new PhotographerProvider('../../data/photographers.json')
    }
    async main() {
        const photographerData = await this.photographerProvider.getDataPhotographer();

        photographerData
            .map(photographe => new Photographer(photographe))
            .forEach(photographe => {
                /**
                 * avec forEach je crée une carte par photographe dans mon DOM
                 */
                const Factories = new HomePhotographerCard(photographe)
                this.containerPhotographerCards.appendChild(
                    Factories.createHomePhotographerCard()
                    )
            });
            
    }
};

const index = new Index()

index.main()