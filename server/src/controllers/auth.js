const db = require("../db");

//  Add user;
const addUser = async (req, res) => {
  const { user_name, email, password, location } = req.body;

  // const hashedPassword = await hash(password, 10); // ? Intrebare
  try {
    await db.query(
      "INSERT INTO users( user_name, email, password, location) VALUES ( ?, ?, ?, ?)",
      [user_name, email, password, location]
    );
    return res.status(201).json({
      message: "The registration was successful",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

//  Get all users;
const getUsers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return res.status(200).json({
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//  Delete user by id;
const deleteUser = async (req, res) => {
  const id = req.params.id;

  await db.query("DELETE FROM users WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting user");
    } else if (result.affectedRows === 0) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send("User deleted successfully");
    }
  });
};

//  Edite user by id;
const editUser = async (req, res) => {
  const id = req.params.id;
  const { user_name, email, password, location } = req.body;
  await db.query(
    "UPDATE users SET user_name=?, email=?, password=?, location=? WHERE id=?",
    [user_name, email, password, location, id],
    (err, res) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating user");
      } else {
        res.status(200).send("User updated successfully");
      }
    }
  );
};

//  Login by email and password;
const login = async (req, res) => {
  let { email, password } = req.body;

  const [row] = await db.query(
    `SELECT * FROM users WHERE email = ? AND password = ?`,
    [email, password]
  );

  if (row) {
    try {
      req.session.userId = row[0].id;
      req.session.loggedIn = true;

      return res
        .cookie("session", req.session.id, {
          maxAge: 24 * 60 * 60 * 1000, // 1 day duration
          httpOnly: true,
        })
        .json({
          success: true,
          message: "Logged in succefully",
        });
    } catch (error) {
      return res.status(500).json({
        message: "Invalid email or password",
      });
    }
  }
};
//  Logou;
const logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out succefully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
module.exports = {
  getUsers,
  addUser,
  deleteUser,
  editUser,
  login,
  logout,
};
