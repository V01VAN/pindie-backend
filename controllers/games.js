// Файл controllers/games.js

const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    // Вернём найденные игры в формате JSON
    res.end(JSON.stringify(req.gamesArray));
  };

const sendGameCreated = (req,res) => {
  res.setHeader = ('Content-type','application/json')
  res.end(JSON.stringify(req.game));
};

const sendGameById = (req,res) => {
  res.setHeader('Content-type','application/json')
  res.end(JSON.stringify(req.game));
}

const sendGameUpdated = (req,res) => {
  res.setHeader('Content-type', 'application/json');
  res.status(200).send(JSON.stringify({message: "Игра успешно обновлена"}))
}

const sendGameDeleted = (req,res) => {
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(req.game));
};
  
module.exports = sendGameDeleted;
module.exports = sendGameUpdated;
module.exports = sendGameById;
module.exports = sendGameCreated;
module.exports = sendAllGames;
