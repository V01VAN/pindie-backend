const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
 console.log("GET /categories");
 req.categoriesArray = await categories.find({});
 next();
};

const checkIsCategoryExists = async (req, res, next) => {
    const isInArray = req.categoriesArray.find((category) => {
      return req.body.name === category.name;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
    } else {
      next();
    }
  }; 
  
const createCategory = async (req, res, next) => {
    try{
    console.log("POST /categories");
    req.category = await categories.create(req.body)
    next()
    } catch {
      res.setHeader("Content-Type", "application/json");
      res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
    }
  };

const findCategoryById = async (req,res,next) => {
    try{
      req.category = await categories.findById(req.params.id);
      next();
    } catch (error) {
      res.setHeader('Content-type','application/json');
      res.status(404).send(JSON.stringify({message: 'Категория не найдена'}));
    }
  }

  const updateCategory = async (req,res,next) => {
    try{
     req.category = await categories.findByIdAndUpdate(req.params.id, req.body);
     next();
    } catch(error) {
      res.setHeader('Content-type','application/json');
      res.status(400).send(JSON.stringify({message: 'Ошибка обновления категории'}))
    }
  }

  const deleteCategory = async (req,res,next) => {
    try{
     req.game = await games.findByIdAndDelete(req.params.id);
     next();
    } catch(error) {
      res.setHeader('Content-type','application/json');
      res.status(400).send(JSON.stringify({message: 'Ошибка удаления категории'}))
    };
  };

  const checkEmptyName = async (req, res, next) => {
    if (
      !req.body.name
    ) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
    } else {
        next();
    }
}
  
module.exports = checkEmptyName;
module.exports = checkIsCategoryExists;
module.exports = deleteCategory;
module.exports = updateCategory
module.exports = findCategoryById;
module.exports = findAllCategories; 
module.exports = createCategory;