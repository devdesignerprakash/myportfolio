const { authenticateUser } = require("../services/authService");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await authenticateUser(email, password);
    res.status(200).json({ msg: "logged in Successfully", token, user });
  } catch (error) {
    res
      .status(
        error.message === "Invalid credentials" ||
          error.message === "User not found"
          ? 401
          : 500
      )
      .json({
        message: error.message,
      });
  }
};
module.exports = { loginController };
