const User = require("../../models/users");

// This function for updateStatus.
const updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // Update the task's status
    const user = await User.where({ id: id }).fetch();
    if (!user) {
      throw new Error("User not found");
    }
   //  user.set({
   //    name: name,
   //    email: email,
   //    password: password,
   //  });
    await new User()
      .where({ id })
      .save({ name: name, email: email, password: password }, {method: 'update'});

    return res
      .status(200)
      .json({ message: "User is updated successfully...!" });
  } catch (error) {
    console.error("Error updating task status:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = updateStatus;
