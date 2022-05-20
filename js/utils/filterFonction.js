/**
 * Filtre qui retourne un tableau trier par ordre DECROISSANT les LIKES
 * @returns array
 */
const sortMedias = (medias, sortBy) => {
	switch (sortBy) {
	case 'option1':
		medias = medias.sort((a, b) => b.likes - a.likes)
		break
	case 'option2':
		medias = medias.sort((a, b) => new Date(b.date) - new Date(a.date))
		break
	case 'option3':
		medias = medias.sort((a, b) => a.title.localeCompare(b.title))
		break
	default:
		break
	}
  
	return medias
}

/**
 * Fonction pour 
 * Ouverture du filtre
 */
const openFilter = () => {
	document.getElementById('container').style.display = 'flex'
	document.querySelector('#btn-dropdown').setAttribute('aria-expanded', 'true')
	document.getElementById('option1').focus()
}

/**
 * Fonction pour la
 * Fermeture du filtre
 */
const closeFilter = () => {
	document.getElementById('container').style.display = 'none'
	document.querySelector('#btn-dropdown').setAttribute('aria-expanded', 'false')
	document.querySelector('#btn-dropdown').focus()
}

const essaiFilterSelect = () => {
	document.querySelectorAll('.dropdown-option').forEach(item => {
		item.addEventListener('click', () => {
			console.log(item.id)
		})
	})
}

export {sortMedias, openFilter, closeFilter, essaiFilterSelect}
 






  



