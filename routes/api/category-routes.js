const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
  const allCategories = await Category.findAll(
    {
      include: {
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }
    }
  );
    res.status(200).json(allCategories)
} 
    catch(err) {
      console.log(err)
      res.status(500).json(err);
    };
});

router.get('/:id', async (req, res) => {
    try{
        const oneCategory = await Category.findOne(
          { where:{
            id: req.params.id
          },
            include:{
            model: Product,
            attributes:['id', 'product_name', 'price', 'stock', 'category_id']
          }}
        );
          res.status(200).json(oneCategory)}
        catch(err) {
          console.log(err)
          res.status(500).json(err)
        }
});

router.post('/', async (req, res) => {
  try{
    const postCategory = await Category.create({
      category_name: req.body.category_name
    })
      res.status(200).json(postCategory)
  }
  catch(err) {
    console.log(err)
    res.status(500).json(err)
  }

});

router.put('/:id', async (req, res) => {
  try{
    const updateCategory = await Category.update(req.body, {
      where:{
        id: req.params.id
      }
    })
    res.status(200).json(updateCategory)
  }
  catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const deleteCategory = await Category.destroy(
      {
      where:{
        id: req.params.id
      }

    })
    res.status(200).json(deleteCategory)

  }
  catch(err){
    console.log(err)
    res.status(500).json(err)
  }
});

module.exports = router;
