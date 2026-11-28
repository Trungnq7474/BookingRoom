const express = require("express");
const router = express.Router();

const { login, getUser, addUser, editUser, deleteUser} = require("../controllers/userController.js")

router.post("/login", login);
router.get("/", getUser);
router.post("/", addUser);
router.put("/:user_id", editUser);
router.delete("/:user_id", deleteUser);

module.exports = router;