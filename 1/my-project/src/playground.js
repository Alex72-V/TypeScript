class Book {
    constructor(name, genre, pageAmount) {
        this.name = name
        this.genre = genre
        this.pageAmount = pageAmount
    }
}

const books = [
    new Book('H P', 'fantasy', 980),
    new Book('L O K', 'fantasy', 1001),
    new Book('G O T', 'lifestyle', 1001)
]
function findSuitableBook (genre, pageLimit) {
    return books.find((book) => {
        return book.genre === genre && book.pageAmount <= pageLimit
    })
}
console.log(findSuitableBook('fantasy', 1000))
//38:00