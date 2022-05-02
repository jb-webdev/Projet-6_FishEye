// Fonction pour recuperer l'id du photographe dans notre url
function getPhotographerId() {
    return new URL(location.href).searchParams.get("id");
}

// Fonction qui controle si l'id existe dans la BDD
function iDifExist(obj, id) {
    let compteur = false;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].id == id) {
            compteur = true;
        }
    }
    return compteur
}

 // ICI CREER UNE FONCTION QUI VERIFI SI LA VIDEO EXISTE
 function ifVideoExist(el) {
    let stateVideo = false;
    if (el != "null") {
        stateVideo = true;
        return stateVideo
    }
    return stateVideo
}



export {getPhotographerId, iDifExist, ifVideoExist};