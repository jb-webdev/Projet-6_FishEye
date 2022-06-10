export class HeartLikes{
	constructor(){
		this.totalLikesPhotographer = 0
		this.heart = []
	}
	/** retourne le nombre de likes total du photographe */
	LikesPhotographer(dataMediaPhotogrpahe){
		let sum = 0
		for (let i = 0; i < dataMediaPhotogrpahe.length; i++) {
			sum = sum + dataMediaPhotogrpahe[i].likes
		}
		return this.totalLikesPhotographer = sum
	}
	/** Retourne un Tableau d'id Media liker par l'utilisateur */
	HeartLikes (){
		return this.heart
	}
	/** Methode qui ajoute dans le tableau l'id */
	addLikes(idMedia){
		this.heart.push(idMedia)
		this.totalLikesPhotographer ++
	}
	/** Methode qui suprime le media présent dans le tableau */
	supLikes(idMedia){
		let indexMedia = this.heart.indexOf(idMedia)
		this.heart.splice(indexMedia, 1)
		this.totalLikesPhotographer --
	}
	/** Fonction qui additionne le nombres de likes recu par le photographe
	*/
	sumLikes = (a) => {
		let sum = 0
		for (let i = 0; i < a.length; i++) {
			sum = sum + a[i].likes
		}
		return sum
	}
}