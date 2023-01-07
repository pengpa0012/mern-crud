const express = require("express")
const { getAllUsers, createUser, updateUser, deleteUser } = require("../services/users")
const router = express.Router()

router.get("/getAllUsers", async (req, res) => {
  const result = await getAllUsers()
  return {message: "test response"}

  if(result) {
    res.status(200).send(result)
  } else res.status(500).send({message: "error"})
})

router.post("/createUser", async (req, res) => {
  const { username, email } = req.body

  const result = await createUser(username, email)

  if(result) {
    res.status(200).send(result)
  } else res.status(500).send({message: "error"})

})

router.post("/updateUser", async (req, res) => {
  const { id, username, email } = req.body

  const result = await updateUser(id, username, email)

  if(result) {
    res.status(200).send(result)
  } else res.status(500).send({message: "error"})
})

router.post("/deleteUser", async (req, res) => {
  const { id } = req.body

  const result = await deleteUser(id)

  if(result) {
    res.status(200).send(result)
  } else res.status(500).send({message: "error"})
})



module.exports = router