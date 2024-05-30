const usersRouter = require('express').Router();

const findAllUsers = require('../middlewares/users');
const sendAllUsers = require('../controllers/users');
const createUser = require('../middlewares/users');
const sendUserCreated = require('../controllers/users');
const findUserById = require('../middlewares/users');
const sendUserById = require('../controllers/users');
const updateUser = require('../middlewares/users');
const sendUserUpdated = require('../controllers/users');
const deleteUser = require('../middlewares/users');
const sendUserDeleted = require('../controllers/users');
const checkEmptyNameAndEmailAndPassword = require('../middlewares/users');
const checkEmptyNameAndEmail = require('../middlewares/users');
const checkIsUserExists = require('../middlewares/users');
const filterPassword = require('../middlewares/users');
const hashPassword = require('../middlewares/users');
const checkAuth = require('../middlewares/auth');
const sendMe = require('../controllers/users')

usersRouter.get('/users', findAllUsers, filterPassword, sendAllUsers);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    hashPassword,
    createUser,
    sendUserCreated
  ); 
usersRouter.get('/users/:id', findUserById, filterPassword, sendUserById );
usersRouter.put('/users', checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated );
usersRouter.delete('/users/:id', checkAuth, deleteUser, sendUserDeleted);
usersRouter.get("/me", checkAuth, sendMe); 


module.exports = usersRouter;