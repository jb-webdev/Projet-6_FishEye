export class SectionFilter {
	constructor () {
		this.wrapperFilterContainer = document.getElementById('s-filter') 
	}

	createSectionFilter(){
		/**
         * création de la div filter
         */
		const wrapperFilter = document.createElement('fielset')
		wrapperFilter.setAttribute('class', 'wrapper-Filter')

		const filterTemplate = `
        
          <h2>
            <label id="filters-label" class="filters-title" >Trier par : </label>
          </h2>
      
          <div class="select-filters" id="select-filters">
        
              <button class="select-filters-button" id="btn-dropdown" type="button" role="button" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-label="trier par filtres">
                  <span class="option1" value="popularite" id="valueFilter">Popularité</span>
                  <span class="arrows fas fa-chevron-down"></span> 
              </button>
          
              <div class="container" id="container">
                  <ul role="listbox" aria-expanded="true" class="dropdown" id="dropdown" aria-activedescendant="option1" tabindex="0">
                    <li class="dropdown-option" id="popularite" role="option" aria-label="trier par popularité" tabindex="0">Popularité</li>
                    <li class="dropdown-option" id="date" role="option" aria-label="trier par date" tabindex="0">Date</li>
                    <li class="dropdown-option" id="titre" role="option" aria-label="trier par titre" tabindex="0">Titre</li> 
                  </ul> 
                  <button class="select-filters-button" id="btn-up" type="button" role="button" aria-haspopup="true" aria-expanded="true" tabindex="0" aria-label="fermer le choix de filtres">
                  <span class="arrows fas fa-chevron-up"></span>   
                  </button>
              </div> 

          </div>
        `
		wrapperFilter.innerHTML = filterTemplate
		this.wrapperFilterContainer.appendChild(wrapperFilter)
		return this.wrapperFilterContainer
	}


	/**
 * Filtre qui retourne un tableau trier par ordre DECROISSANT les LIKES
 * @param {medias} = array datamedia du photographe
 * @param {sortBy} = string popularite // date // titre en retour de la selection du filtre
 * @returns array
 */
	sortMedias (medias, sortBy) {
		switch (sortBy) {
		case 'popularite':
			medias = medias.sort((a, b) => b.likes - a.likes)
			break
		case 'date':
			medias = medias.sort((a, b) => new Date(b.date) - new Date(a.date))
			break
		case 'titre':
			medias = medias.sort((a, b) => a.title.localeCompare(b.title))
			break
		default:
			break
		}
  
		return medias
	}

	eventFilter(action){
		if (action === 'open'){
			document.querySelector('#btn-dropdown').addEventListener('click', () => {
				document.getElementById('container').style.display = 'flex'
				document.querySelector('#btn-dropdown').setAttribute('aria-expanded', 'true')
				document.getElementById('popularite').focus()
			})
		} else if (action === 'close') {
			document.querySelector('#btn-up').addEventListener('click', () => {
				document.getElementById('container').style.display = 'none'
				document.querySelector('#btn-dropdown').setAttribute('aria-expanded', 'false')
				document.querySelector('#btn-dropdown').focus()
			})
		}
	}
	
	/**
   * Fonction pour le traitement du filtre
   * @param {value} = string selectionner popularite // date // titre  
   */
	changeFilter (value){
		let tagFilter = document.getElementById('valueFilter')
		let text = 'Popularité'
		if  (value != 'popularite') {
			text = value
		}
		tagFilter.textContent = text
		tagFilter.setAttribute('value', value)
		document.getElementById('container').style.display = 'none'
	}
}