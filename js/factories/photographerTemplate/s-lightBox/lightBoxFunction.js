/** Fonction qui traite la construction du chemin pour les media
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
/** On recupere l'element du DOM à afficher et on l'active pour l'afficher*/
const activeElement = (a) => {
	var elt = `media-${a}`
	const element = document.getElementById(elt).classList

	element.add('active')
}
/** On recupere l'element du DOM à cacher et on le desactive*/
const removeElement = (a) => {
	var elt = `media-${a}`
	console.log(elt)
	const element = document.getElementById(elt).classList
	element.remove('active')
	console.log(element)
}

const changeTabIndex = (stateItem) =>{
	var indexIdItemOf = [
		'one', 
		'dropdown', 
		'popularite', 
		'date', 
		'titre', 
		'btn-header-displayModal', 
		'header-logo'
	]

	if(stateItem === 'off'){
		let itemSelectUser = document.querySelectorAll('.itemSelectUser')
		for (let i = 0; i < itemSelectUser.length; i++){
			itemSelectUser[i].setAttribute('tabIndex', '-1')
		}			
		for(let i = 0; i < indexIdItemOf; i++){
			let itemTag = document.getElementById(indexIdItemOf[i])
			itemTag.setAttribute('tabIndex', '-1')
			return itemTag
		}
	} else if(stateItem === 'on'){
		// on passe tabIndex="0"
		let itemSelectUser = document.querySelectorAll('.itemSelectUser')
		for (let i = 0; i < itemSelectUser.length; i++){
			itemSelectUser[i].setAttribute('tabIndex', '0')
		}	
		document.getElementById('s-cards').setAttribute('tabIndex', '-1')
		for(let i = 0; i < indexIdItemOf; i++){
			let itemTag = document.getElementById(indexIdItemOf[i])
			itemTag.setAttribute('tabIndex', '0')
			return itemTag
		}
	}

}

export { indexFigure, activeElement, removeElement, recupName, changeTabIndex}






