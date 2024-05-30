const sendAllCategories = (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  res.end(JSON.stringify(req.categoriesArray));
};

const sendCategoryCreated = (req,res) => {
  res.setHeader = ('Content-type','application/json')
  res.end(JSON.stringify(req.category));
};

const sendCategoryById = (req,res) => {
  res.setHeader('Content-type','application/json')
  res.end(JSON.stringify(req.category));
}

const sendCategoryUpdated = (req,res) => {
  res.setHeader('Content-type', 'application/json');
  res.status(200).send(JSON.stringify({message: "Категория успешно обновлена"}))
}
 
const sendCategoryDeleted = (req,res) => {
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify(req.category));
};
  
module.exports = sendCategoryDeleted;
module.exports = sendCategoryUpdated
module.exports = sendCategoryById;
module.exports = sendCategoryCreated;
module.exports = sendAllCategories;
