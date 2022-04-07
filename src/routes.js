const { addBooksHandler, getAllBooksHandler, getDetailBooksHandler, editDataBooksHandler, deleteBooksHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBooksHandler,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooksHandler,
  },
  {
    method: "GET",
    path: "/books/{id}",
    handler: getDetailBooksHandler,
  },
  {
    method: "PUT",
    path: "/books/{id}",
    handler: editDataBooksHandler,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: deleteBooksHandler,
  },
];

module.exports = routes;
