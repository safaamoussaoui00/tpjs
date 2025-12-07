let books = [
    { id: 1, titre: "Clean Code", auteur: "R.Martin", prix: 250, stock: 12 },
    { id: 2, titre: "You Dont Know JS", auteur: "Kyle Simpson", prix: 180, stock: 5 },
    { id: 3, titre: "Eloquent JS", auteur: "Marijn Haverbeke", prix: 200, stock: 0 }
];


let maxId = books.length + 1;


function addBook(titre, auteur, prix, stock) {
    let book = {
        id: maxId++,
        titre,
        auteur,
        prix,
        stock
    };
    books.push(book);
    console.log(`Livre "${titre}" ajouté !`);
}


function getBooksByAuthor(auteur) {
    return books.filter(b => b.auteur === auteur);
}


function valeurStock() {
    return books.reduce((total, b) => total + b.prix * b.stock, 0);
}


function updateStock(id, newStock) {
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


addBook("JavaScript: The Good Parts", "Douglas Crockford", 220, 6);

console.log("Livres de Kyle Simpson :", getBooksByAuthor("Kyle Simpson"));

console.log("Valeur totale du stock :", valeurStock());

updateStock(2, 10);

console.log("Livres triés par prix :", sortByPrice());
git