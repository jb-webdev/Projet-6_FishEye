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
