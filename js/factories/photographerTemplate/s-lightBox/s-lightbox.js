export class SectionLightbox {
    constructor(){}
    createSectionLightbox(){
        const wrapperSection = document.createElement("div")
        wrapperSection.setAttribute("id", "lightbox-content")
        wrapperSection.setAttribute("class", "lightbox-content")
        wrapperSection.setAttribute("role", "dialog")
        wrapperSection.setAttribute("aria-modal", "true")
        wrapperSection.setAttribute("tabindex", "-1")
        wrapperSection.setAttribute("aria-label", "lightbox, agrandissement de l'image voir le texte à fournir")


        const lightboxSection = `
            <div class="lightbox" id="lightbox">
                <button class="lightbox-prev" id="left" type="button" aria-labelledby="prev" tabindex="0"></button>
                <p class="sr-only" id="prev" aria-hidden="true">image précédente</p>
                <div class="divLightbox">
                    <ul class="lightbox-container"></ul>
                    <button class="lightbox-close" id="closeLightbox" type="button" aria-labelledby="close-lightbox" tabindex="0"></button>
                    <p class="sr-only" id="close-lightbox" aria-hidden="true">fermer la lightbox</p>
                </div>
                <button class="lightbox-next" id="right" type="button" aria-labelledby="next" tabindex="0"></button>
                <p class="sr-only" id="next" aria-hidden="true">image suivante</p>
            </div>
        `
        wrapperSection.innerHTML = lightboxSection
        return wrapperSection

    }
}