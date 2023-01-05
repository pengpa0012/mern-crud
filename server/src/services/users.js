const Users = require("../models/Users")

exports.getAllUsers = async () => {
  try {
    const results = await Users.find()

    return results
  } catch (err) {
    return []
  }
}

exports.createUser = async (username, email) => {
  try {
    await Users.insertMany({
      username,
      email
    })

    return { username, email }
  } catch(err) {
    return false
  }
}

exports.updateUser = async (_id, username, email) => {
   try {
    await Users.updateOne({_id}, {$set: {username, email}})

    return {id: _id, username, email}
  } catch(err) {
    console.log(err)
    return false
  }
}

exports.deleteUser = async (_id) => {
  try {
    await Users.deleteOne({_id})

    return _id
  } catch(err) {
    return false
  }
}