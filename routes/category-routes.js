const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const category = await Category.findAll({ include: [Product] })
  res.json(category)
})

router.get('/categories/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const category = await Category.findById(req.params.id, { include: [Product] })
})

router.post('/categories', (req, res) => {
  // create a new category
  const category = await Category.create({
    ...req.body
  })
})

router.put('/categories/:id', (req, res) => {
  // update a category by its `id` value
  const category = await Category.findByIdAndUpdate(req.params.id, { include: [Product] })
})

router.delete('/categories/:id', (req, res) => {
  // delete a category by its `id` value
})

module.exports = router
