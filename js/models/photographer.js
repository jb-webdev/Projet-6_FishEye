export class Photographer {
	constructor(photographers) {
		this._id = photographers.id
		this._name = photographers.name
		this._city = photographers.city
		this._country = photographers.country
		this._tagline = photographers.tagline
		this._price = photographers.price
		this._portrait = photographers.portrait 
	}

	get id() {
		return this._id
	}
	get name(){
		return this._name
	}
	get city(){
		return this._city
	}
	get country (){
		return this._country
	}
	get tagline (){
		return this._tagline
	}
	get price (){
		return this._price
	}
	get portrait (){
		return `/assets/Photographers-ID-Photos/${this._portrait}`
	}
}