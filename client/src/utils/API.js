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
  updateUser: (id) => {
    return axios.put('/users/' + id);
  },
  deleteUser: (id) => {
    return axios.delete("/users/" + id);
  }
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/books", bookData);
//   }
};
