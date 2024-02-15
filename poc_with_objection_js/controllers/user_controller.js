const User = require('../models/user');

const createUser = async (req, res) => {

  try {
    const { userName, password, age } = req.body;

    const user = await User.query().insert({ userName, password, age });

    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};

const getUsers = async (req, res) => {
    try {
        const user= await User.query();
        console.log(user);
        res.json(user);
    } catch (error) {
        console.log(`getting error=> ${error}`);

    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.query().where({ id: req.params.id }).patch(req.body);
        res.json("updated sucessfully...");
        
    } catch (error) {
        console.log(error);
    }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.query().delete().where({ id: req.params.id });
    res.json({
        success: true,
        message: "user was deleted"
    });
    console.log(`this user was deleted: ${user}`);
    
  } catch (error) {
    console.log(error);
    
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};