export class SectionFilter {
    constructor () {}

    createSectionFilter(){
        /**
         * je creer ma div Filtre
         */
        const wrapperFilter = document.createElement("fielset");
        wrapperFilter.setAttribute("class", "wrapper-Filter");

        const filterTemplate = `
        
          <h2>
            <label id="filters-label" class="filters-title" >Trier par : </label>
          </h2>
      
          <div class="select-filters" id="select-filters">
        
              <button class="select-filters-button" id="btn-dropdown" type="button" role="button" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-label="trier par filtres">
                  <span class="option1" value="popularite">Popularité</span>
                  <span class="arrows fas fa-chevron-down"></span> 
              </button>
          
              <div class="container" id="container">
                  <ul role="listbox" aria-expanded="true" class="dropdown" id="dropdown" aria-activedescendant="option1" tabindex="0">
                  <li class="dropdown-option" id="option1" role="option" aria-label="trier par popularité" tabindex="0">Popularité</li>
                  <li class="dropdown-option" id="option2" role="option" aria-label="trier par date" tabindex="0">Date</li>
                  <li class="dropdown-option" id="option3" role="option" aria-label="trier par titre" tabindex="0">Titre</li> 
                  </ul> 
                  <button class="select-filters-button" id="btn-up" type="button" role="button" aria-haspopup="true" aria-expanded="true" tabindex="0" aria-label="fermer le choix de filtres">
                  <span class="arrows fas fa-chevron-up"></span>   
                  </button>
              </div> 

          </div>
        `
        wrapperFilter.innerHTML = filterTemplate;

        return wrapperFilter;
    }
}