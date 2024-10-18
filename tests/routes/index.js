const {Router} = require('express');
const {helloWorld, hello} = require("../controllers/index.js")
const User = require('../models/User.js')

const router = Router();

router.get("/hello", helloWorld);
router.get('/hello/:name', hello);

router.post('/users', async (req, res)=>{
  await User.create(req.body) //should be validated
  res.status(201).json({message: "created"})
})

router.get('/users', async (req, res)=>{
  const users = await User.find({}).lean();
  res.status(200).json(users);
})

router.delete('/users', async (req, res)=>{
  await User.deleteMany({});
  res.status(204).send();
})

module.exports = {
  router
}