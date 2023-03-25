const { Router } = require("express");
const router = Router();
const {
  getUsers,
  addUser,
  deleteUser,
  editUser,
  login,
  logout,
} = require("../controllers/auth");
const { validationMiddleware } = require("../middlewares/validator-middleware");

router.get("/get-users", getUsers);
router.post("/register", validationMiddleware, addUser);
router.delete("/delete-user/:id", deleteUser);
router.put("/edit-user/:id", editUser);
router.post("/login", validationMiddleware, login);
router.get("/logout", logout);

module.exports = router;
