/**
 * Function pour recuperer l'id du Photographe selectiondans l'url
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
/** 
 * Fonction pour modifier l'id recuperer on ne recupere que l'id
 * exemple on recupere 'img-123456789" on retourne => "123456789"
 * @param {id} => pour l'id recuperer dans le dom
 * @param {text} => pour la partie à suprimer
 */
const modifyId  = (id, text) => {
	let idToModify = id
	let idModify = idToModify.replace(text, '')
	return idModify
}
/** Export des fonctions */
export {
	getPhotographerId, 
	iDifExist,
	ifVideoExist,
	modifyId
}