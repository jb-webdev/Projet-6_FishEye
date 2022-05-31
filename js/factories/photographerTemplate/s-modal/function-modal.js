/* eslint-disable no-useless-escape */


/**
 * Fonction affichage de la modal message
 * 
 */
const displayModal = () => {
	const modal = document.getElementById('s-modal')
	modal.style.display = 'block'
}
/**
 * Fonction fermeture de la modal message
 * 
 */
const closeModal = () => {
	const modal = document.getElementById('s-modal')
	modal.style.display = 'none'
}
/**
 * Fonction validation formulaire prenom / firstname
 * @returns bollean
 */

const firstName = () => {
	const elt = document.forms['contact']['firstname'].value
	let regex = /^[a-zA-Z-\s]{2,}$/
	let errorFirstName = false
  
	let msgError = document.getElementById('message-firstname')
	let errorInputBorder = document.getElementById('firstname')
  
	if (!elt) {
		msgError.innerText = 'Le champ ne doit pas être vide !'
		msgError.style.backgroundColor = 'red'
		errorInputBorder.style.border = '3px solid red'
		errorFirstName = false
	} else if (!regex.test(elt)) {
		msgError.innerText = 'Veuillez entrer 2 caractères ou plus'
		msgError.style.backgroundColor = 'red'
		errorInputBorder.style.border = '3px solid red'
		errorFirstName = false
	} else if (regex.test(elt)) {
		msgError.innerText = 'super ! '
		msgError.style.color = 'green'
		msgError.style.backgroundColor = 'transparent'
		errorInputBorder.style.border = '3px solid green'
		errorInputBorder.style.background = '#ffffff'
		errorFirstName = true
	}
	else {
		errorFirstName = true
	}
	return errorFirstName
}
/**
 * Fonction validation formulaire nom / name
 * @returns bollean
 */
const lastName = () => {
	const elt = document.forms['contact']['lastname'].value
	let regex = /^[a-zA-Z-\s]{2,}$/
	let errorLastName = false
  
	let msgError = document.getElementById('message-lastname')
	let errorInputBorder = document.getElementById('lastname')
  
	if (!elt) {
		msgError.innerText = 'Le champ ne doit pas être vide !'
		msgError.style.backgroundColor = 'red'
		errorInputBorder.style.border = '3px solid red'
		errorLastName = false
	} else if (!regex.test(elt)) {
		msgError.innerText = 'Veuillez entrer 2 caractères ou plus'
		msgError.style.backgroundColor = 'red'
		errorInputBorder.style.border = '3px solid red'
		errorLastName = false
	} else if (regex.test(elt)) {
		msgError.innerText = 'super ! '
		msgError.style.color = 'green'
		msgError.style.backgroundColor = 'transparent'
		errorInputBorder.style.border = '3px solid green'
		errorInputBorder.style.background = '#ffffff'
		errorLastName = true
	}
	else {
		errorLastName = true
	}
	return errorLastName
}
/**
 * Fonction validation formulaire email
 * @returns bollean
 */
const validEmail = () => {
	let elt = document.forms['contact']['email'].value
	let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	let errorEmail = false
	let errorInputBorder = document.getElementById('email')

	let msgError = document.getElementById('message-email')

	if (!elt) {
		msgError.innerHTML = 'Le champ ne doit pas être vide !'
		msgError.style.backgroundColor = 'red'
		errorInputBorder.style.border = '3px solid red'
		errorEmail = false
	} else if (!regexEmail.test(elt)) {
		msgError.innerHTML = 'Votre email est invalide'
		msgError.style.backgroundColor = 'red'
		errorInputBorder.style.border = '3px solid red'
		errorEmail = false
	} else if (regexEmail.test(elt)) {
		msgError.innerText = 'super ! '
		msgError.style.color = 'green'
		msgError.style.backgroundColor = 'transparent'
		errorInputBorder.style.border = '3px solid green'
		errorInputBorder.style.background = '#ffffff'
		errorEmail = true
	}
	return errorEmail

}
/**
 * Fonction validation formulaire message
 * @returns bollean
 */
const validMessage = () => {
	let elt = document.forms['contact']['message'].value
	let regexMessage = /^[a-zA-Z-\!\?\.\,\;\s]{2,250}$/
	let errormessage = false
	let errorInputBorder = document.getElementById('message')

	let msgError = document.getElementById('message-message')

	if (!elt) {
		msgError.innerHTML = 'Le champ ne doit pas être vide !'
		msgError.style.backgroundColor = 'red'
		errorInputBorder.style.border = '3px solid red'
		errormessage = false
	} else if (!regexMessage.test(elt)) {
		msgError.innerHTML = 'Votre message est invalide'
		msgError.style.backgroundColor = 'red'
		errorInputBorder.style.border = '3px solid red'
		errormessage = false
	} else if (regexMessage.test(elt)) {
		msgError.innerText = 'super ! '
		msgError.style.color = 'green'
		msgError.style.backgroundColor = 'transparent'
		errorInputBorder.style.border = '3px solid green'
		errorInputBorder.style.background = '#ffffff'
		errormessage = true
	}
	return errormessage

}
export {
	displayModal, 
	closeModal, 
	firstName, 
	lastName, 
	validEmail,
	validMessage
}

