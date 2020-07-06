import axios from "axios";

export default {
  // Gets all users
  getUsers: () => {
    return axios.get('/users');
  },
  // Gets the user with the given id
  getUser: (id) => {
    return axios.get('/users/' + id);
  },
  createUser: () => {
    return axios.post('/users');
  },
  updateUserDecks: (id) => {
    return axios.post('/decks/' + id);
  },
  updateDeckCards: (id) => {
    return axios.post('/cards/' + id);
  }
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
