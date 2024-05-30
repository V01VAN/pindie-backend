const sendAllUsers = (req, res) => {

  res.setHeader('Content-Type', 'application/json');
  
  res.end(JSON.stringify(req.categoriesArray));
};

const sendUserCreated = (req,res) => {
  res.setHeader = ('Content-type','application/json')
  res.end(JSON.stringify(req.user));
};

const sendUserById = (req,res) => {
  res.setHeader('Content-type','application/json')
  res.end(JSON.stringify(req.user));
}

const sendUserUpdated = (req,res) => {
  res.setHeader('Content-type', 'application/json');
  res.status(200).send(JSON.stringify({message: "Пользователь успешно обновлен"}))
}
 
const sendUserDeleted = (req,res) => {
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(req.user));
};
  
const sendMe = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.user));
}; 

module.exports = sendMe;
module.exports = sendUserDeleted;
module.exports = sendUserUpdated
module.exports = sendUserById;
module.exports = sendUserCreated;
module.exports = sendAllUsers;
