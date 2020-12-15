// const router = require('express').Router();
// const {
//   createUser,
//   getSingleUser,
//   saveBook,
//   deleteBook,
//   login,
// } = require('../../controllers/user-controller');

// const { authMiddleware } = require('../../utils/auth');

// router.route('/').post(createUser).put(authMiddleware, saveBook);

// router.route('/login').post(login);

// router.route('/me').get(authMiddleware, getSingleUser);

// router.route('/books/:bookId').delete(authMiddleware, deleteBook);

// module.exports = router;


const router = require("express").Router();
const booksController = require("../../controllers/bookControllers");

router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.delete);
  // .delete(booksController.remove);

module.exports = router;
