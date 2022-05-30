/**
 * Function pour recuperer l'id du Photographe selection
 * @returns id photographer
 */
const getPhotographerId = () =>{
	return new URL(location.href).searchParams.get('id')
}
/**
 * Function qui controle si l'identifiant selectionner existe dans la BDD
 * @returns boolean
 */
const iDifExist = (obj, id) => {
	let compteur = false
	for (let i = 0; i < obj.length; i++) {
		if (obj[i].id == id) {
			compteur = true
		}
	}
	return compteur
}
/**
 * Function qui controle la video existe dans la BDD
 * @returns boolean
 */
const ifVideoExist = (el) => {
	let stateVideo = false
	if (el != 'null') {
		stateVideo = true
		return stateVideo
	}
	return stateVideo
}
const modifyId  = (id, text) => {
	let idToModify = id
	let idModify = idToModify.replace(text, '')
	return idModify
}



/** On exporte les fonctions */
export {
	getPhotographerId, 
	iDifExist,
	ifVideoExist,
	modifyId
}