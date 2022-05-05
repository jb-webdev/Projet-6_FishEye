/**
 * Filtre qui retourne un tableau trier par ordre DECROISSANT les LIKES
 * @returns array
 */
 const filterByLikes = (array) => {
    let sortByMapped = (map, compareFn) => (a, b) => compareFn(map(a), map(b));
    let byValue = (a, b) => a - b;
    let toLikes = e => e.likes;
    let byLikes = sortByMapped(toLikes, byValue);
    return [...array].slice().sort(byLikes).reverse()
}
/**
 * Filtre qui retourne un tableau trier par ordre ALPHABETIQUE les TITRES
 * @returns array
 */
 const SortArray = (x, y) => { return x.title.localeCompare(y.title) }
/**
 * Filtre qui retourne un tableau trier par ordre DECROISSANT les DATES
 * @returns array
 */
 const trierDate = (x, y) => {
    const firstDate = new Date(x.date),
        SecondDate = new Date(y.date);

    if (firstDate < SecondDate) return -1;
    if (firstDate > SecondDate) return 1;
    return 0;
};

export {
    filterByLikes,
    SortArray,
    trierDate
};