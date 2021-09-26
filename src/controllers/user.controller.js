
const { User, Todo } = require('../database');

//  create a user
async function addUser(req, res) {
  try {
    const { username, name, email, phone } = req.body;

    const user = await User.create({
      username,
      name,
      email,
      phone
    });

    res.status(201).json({ message: 'created user', user });

  } catch (error) {

    console.log(error);
    res.status(500).json({ error });
  }
}

// get todos of a user
async function getTodos(req, res) {
  try {
    const { id } = req.params;

    const todos = await Todo.find({ user: id }).populate('user')

    res.status(201).json({ todos });
  } catch (error) {

  }
}

module.exports = { addUser, getTodos };