/** ici on prepare notre composant video pour la lightbox */
const videoMediaCreate = (media, pathImg) => {
	const eltFigure = document.createElement('figure')
	eltFigure.setAttribute('class', 'item')
	eltFigure.setAttribute('id', `media-${media.id}`)
	const eltVideo = document.createElement('video')
	eltVideo.setAttribute('class', 'item-media')
	eltVideo.setAttribute('controls', 'controls')
	eltVideo.setAttribute('alt', `${media.title}`)
	eltVideo.setAttribute('src', `${pathImg}${media.video}`)
	eltVideo.setAttribute('type', 'video/mp4')
	eltFigure.appendChild(eltVideo)
	return eltFigure
}
/** ici on prepare notre composant image pour la lightbox */
const imageMediaCreate = (media, pathImg) => {
	const eltFigure = document.createElement('figure')
	eltFigure.setAttribute('class', 'item')
	eltFigure.setAttribute('id', `media-${media.id}`)
	const eltImage = document.createElement('img')
	eltImage.setAttribute('class', 'item-media')
	eltImage.setAttribute('alt', `${media.title}`)
	eltImage.setAttribute('src', `${pathImg}${media.image}`)
	eltFigure.appendChild(eltImage)
	return eltFigure
}
/** ici on prepare notre composant fleche de gauche pour naviger dans notre lightbox */
const arrowLeftCreate = () => {
	const arrowLeft = document.createElement('span')
	arrowLeft.setAttribute('class', 'lightbox-left')
	arrowLeft.setAttribute('aria-hidden', 'true')
	let iconLeft = document.createElement('i')
	iconLeft.setAttribute('class', 'fa-solid fa-chevron-left')
	arrowLeft.appendChild(iconLeft)
	return arrowLeft
}
/** ici on prepare notre composant fleche de droite pour naviger dans notre lightbox */
const arrowRightCreate = () => {
	const arrowRight = document.createElement('span')
	arrowRight.setAttribute('class', 'lightbox-right')
	arrowRight.setAttribute('aria-hidden', 'true')
	let iconRight = document.createElement('i')
	iconRight.setAttribute('class', 'fa-solid fa-chevron-right')
	arrowRight.appendChild(iconRight)
	return arrowRight
}

export { videoMediaCreate, imageMediaCreate, arrowLeftCreate, arrowRightCreate }