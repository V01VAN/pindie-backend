const gamesRouter = require('express').Router();

const findAllGames = require('../middlewares/games');
const createGame = require('../middlewares/games');
const sendGameCreated = require('../controllers/games');
const sendAllGames = require('../controllers/games');
const findGameById = require('../middlewares/games');
const sendGameById = require('../controllers/games');
const updateGame = require('../middlewares/games');
const sendGameUpdated = require('../controllers/games');
const deleteGame = require('../middlewares/games');
const sendGameDeleted = require('../controllers/games');
const checkEmptyFields = require('../middlewares/games');
const checkIfUsersAreSafe = require('../middlewares/games');
const checkIfCategoriesAvaliable = require('../middlewares/games');
const checkIsGameExists = require('../middlewares/games');
const checkAuth = require('../middlewares/auth');
const checkIsVoteRequest = require('../middlewares/games');

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put('/games', findGameById, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdated );
gamesRouter.delete('/games/:id', checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;