let books = [
    { id: 1, titre:"Clean Code", auteur:"R.Martin", prix: 250, stock:12 },
    { id: 2, titre:"You Don’t Know JS", auteur:"Kyle Simpson", prix: 180, stock:5 },
    { id: 3, titre:"Eloquent JS", auteur:"Marijn Haverbeke", prix: 200, stock:8 }
];

function calculTotal() {
    let totale = 0;
    for (let i = 0; i < books.length; i++) {
        totale += books[i].prix * books[i].stock;
    }
    return totale;
}

function updatestock(id, newStock) {
    let book = books.find(b => b.id === id);
    if (book) {
        book.stock = newStock;
        console.log(`Stock du livre "${book.titre}" mis à jour : ${newStock}`);
    } else {
        console.log("Livre introuvable !");
    }
}

function sortByPrice() {
    return books.sort((a, b) => a.prix - b.prix);
}

console.log("Total valeur du stock:", calculTotal());
updatestock(2, 10);
console.log(sortByPrice());
