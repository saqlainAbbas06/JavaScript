// Build a Book Organizer
// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.

// Your books array should have a minimum of three objects.

// You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.

// The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.

// The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.

// The sortByYear function should return 0 if both releaseYear values are equal.

// You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.

// You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.


const books = [
  {
    title: "The Great Gatsby",
    authorName: "F. Scott Fitzgerald",
    releaseYear: 2012
  },
  {
    title: "To Kill a Mockingbird",
    authorName: "Harper Lee",
    releaseYear: 2000
  },
  {
    title: "Pride and Prejudice",
    authorName: "Jane Austen",
    releaseYear: 1998
  }
];

function sortByYear(book1, book2){
  if(book1.releaseYear < book2.releaseYear){
    return -1
  }else if(book1.releaseYear > book2.releaseYear){
    return 1
  }else{
    return 0
  }
}

function filteredBook(books, year){
  return books.filter(book => book.releaseYear < year)
}

const filteredBooks = filteredBook(books, 2000)
const sortedBooks = filteredBooks.sort(sortByYear);


