/**
 * Fonction qui additionne le nombres de likes recu par le photographe
 */

export const sumLikes = (a) => {
	let sum = 0
	for(let i = 0; i <a.length; i++){
		sum = sum + a[i].likes
	}
	return sum
}

export const addLikes = (mediaPhotographer, idLikes) => {
	/*creer une fonction pour ajouter un likes si on click sur le coeur */
	
	let id = idLikes
	let medias = mediaPhotographer
	for (let i = 0; i < medias.length; i++){
		if (id === medias[i].id ){
			console.log(medias[i].likes)
		}
		return medias
	}
}



export const addNumberLikes = (nbrString) => {
	let nbrLikesString = nbrString
	let numberLikes = parseInt(nbrLikesString)
	numberLikes ++

	return numberLikes

}
