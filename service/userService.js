const User = require('../models/user')

const addUser = async (userData) => {
  try {
    const {email,password } = userData;
    const newUser = await User.create({email,password });
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUser = async (condition) => {
  try {
    const user = await User.findOne({ where: condition });
    return user;
  } catch (error) {
    throw error;
  }
};

const getUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw error;
  }
};

const userService = { addUser, getUser, getUsers };

module.exports = userService;
