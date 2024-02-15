// controller.js

const User = require('../models/user');
const knex = require('../config/knex').knex;

const createData = async (req, res, next) => {
  try {
    const newData = await User.forge(req.body).save();
    res.json(newData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const readData = async (req, res) => {
  try {
    // Validate request parameter
    const result = await knex("users_materialized_view");
    console.log(result);

    if (!req.params.id) {
      return res.status(400).json({ error: 'Invalid request' });
    }
    // here I am using Materialized_View.
    const data = await User.findDataFromMaterializedView(req.params.id);
    if (data) {
      res.json(data);
    } else {
      res.status(404).json({ error: 'Data not found' });
      console.log('Data not found' );
    }
  } catch (err) {
    console.error(err); // Log error
    res.status(500).json({ error: err.message }); // Send error response
  }
};


const updateData = async (req, res, next) => {
  try {
    const user = await User.where({ id: req.params.id }).fetch();
    user.set(req.body);

    const updatedUser = await user.save();

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const deleteData = async (req, res, next) => {
  try {
    const deletedUser = await User.where({ id: req.params.id }).destroy();

    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(er);
  }
};


module.exports = { createData, readData, updateData, deleteData };
