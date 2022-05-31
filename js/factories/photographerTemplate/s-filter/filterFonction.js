/**
 * Filtre qui retourne un tableau trier par ordre DECROISSANT les LIKES
 * @param {medias} = array datamedia du photographe
 * @param {sortBy} = string popularite // date // titre en retour de la selection du filtre
 * @returns array
 */
const sortMedias = (medias, sortBy) => {
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
/**
 * Fonction pour l'ouverture du filtre
 */
const openFilter = () => {
	document.getElementById('container').style.display = 'flex'
	document.querySelector('#btn-dropdown').setAttribute('aria-expanded', 'true')
	document.getElementById('popularite').focus()
}
/**
 * Fonction pour la Fermeture du filtre
 */
const closeFilter = () => {
	document.getElementById('container').style.display = 'none'
	document.querySelector('#btn-dropdown').setAttribute('aria-expanded', 'false')
	document.querySelector('#btn-dropdown').focus()
}
/**
 * Fonction pour le traitement du filtre
 * @param {value} = string selectionner popularite // date // titre  
 */
const changeFilter = (value) => {
	let tagFilter = document.getElementById('valueFilter')
	let text = 'Popularité'
	if  (value != 'popularite') {
		text = value
	}
	tagFilter.textContent = text
	tagFilter.setAttribute('value', value)
	closeFilter()
}

export {sortMedias, openFilter, closeFilter, changeFilter}