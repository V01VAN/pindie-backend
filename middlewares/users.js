const users = require('../models/user');
const bcrypt = require("bcryptjs");

const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({});
  next();
}

const createUser = async (req, res, next) => {
  try{
  req.user = await users.create(req.body)
  next()
  } catch {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка создания пользователя" }));
  }
};
const findUserById = async (req,res,next) => {
  try{
    req.user = await users.findById(req.params.id);
    next();
  } catch (error) {
    res.setHeader('Content-type','application/json');
    res.status(404).send(JSON.stringify({message: 'Пользователь не найден'}));
  }
}

const updateUser = async (req,res,next) => {
  try{
   req.user = await users.findByIdAndUpdate(req.params.id, req.body);
   next();
  } catch(error) {
    res.setHeader('Content-type','application/json');
    res.status(400).send(JSON.stringify({message: 'Ошибка обновления пользователя'}))
  }
}

const deleteUser = async (req,res,next) => {
  try{
   req.game = await games.findByIdAndDelete(req.params.id);
   next();
  } catch(error) {
    res.setHeader('Content-type','application/json');
    res.status(400).send(JSON.stringify({message: 'Ошибка удаления пользователя'}))
  };
};

 const checkEmptyNameAndEmailAndPassword = async (req,res,next) => {
  if (
    !req.body.name ||
    !req.body.password ||
    !req.body.email
  ) {
    res.setHeader('Content-type','application/json');
    res.status(400).send(JSON.stringify({message: "Заполните все пустые поля"}));
  } else{
    next();
  };
 };

 const checkEmptyNameAndEmail = async (req,res,next) => {
  if (
    !req.body.name ||
    !req.body.email
  ) {
    res.setHeader('Content-type','application/json');
    res.status(400).send(JSON.stringify({message: "Заполните все пустые поля"}));
  } else{
    next();
  };
 };

 const checkIsUserExists = async (req, res, next) => {
  const isInArray = req.usersArray.find((user) => {
    return req.body.email === category.email;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Пользователь с таким email уже существует" }));
  } else {
    next();
  }
};

const filterPassword = async(req,res,next) => {
  const filterUser = (user) => {
    const {password, ...userWithoutPassword} = user.toObject();
    return userWithoutPassword;
  };
  if (req.user) {
    req.user = filterUser(req.user);
  };
  if (req.usersArray){
    req.usersArray = req.usersArray.map((user) => filterUser(user));
  };
  next();
};

const hashPassword = async (req, res, next) => {
  try {
    // Создаём случайную строку длиной в десять символов
    const salt = await bcrypt.genSalt(10);
    // Хешируем пароль
    const hash = await bcrypt.hash(req.body.password, salt);
    // Полученный в запросе пароль подменяем на хеш
    req.body.password = hash;
    next();
  } catch (error) {
    res.status(400).send({ message: "Ошибка хеширования пароля" });
  }
}; 

module.exports = hashPassword;
module.exports = filterPassword;
module.exports = checkIsUserExists;
module.exports = checkEmptyNameAndEmail;
module.exports = checkEmptyNameAndEmailAndPassword;
module.exports = deleteUser;
module.exports = updateUser;
module.exports = findUserById;
module.exports = createUser;
module.exports = findAllUsers;