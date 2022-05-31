/** Fonction qui traite la construiction du chemin pour les media
 * @return String
 */
const recupName = (photographer) => {
	let namePhotographer = photographer[0].name
	let recupPrenom = namePhotographer.substring(0, namePhotographer.indexOf(' '))
	let pathImage = recupPrenom.replace('-', ' ')
	return `/assets/photographer-img/${pathImage}/`
}

/**
 * Function qui retourne la position dans le tableau 
 * @param {arrayItem} = tableau de media
 * @param {idFigureSelectionner} = id du media
 * */
const indexFigure = (arrayItem, idFigureSelectionner) => {
	for (let i = 0; i < arrayItem.length; i++) {
		if (arrayItem[i].id == idFigureSelectionner) {
			return i
		}
	}
}
/** On recupere l'element du dome à afficher et on l'active pour l'afficher*/
const activeElement = (a) => {
	var elt = `media-${a}`
	const element = document.getElementById(elt).classList
	element.add('active')
}
/** On recupere l'element du dome à cacher et on le desactive*/
const removeElement = (a) => {
	var elt = `media-${a}`
	const element = document.getElementById(elt).classList
	element.remove('active')
}

export { indexFigure, activeElement, removeElement, recupName}






