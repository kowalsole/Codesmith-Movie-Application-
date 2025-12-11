import User from "../schema/model.js";

//create and save new use into the database
const userController = {
  createUser: (req, res, next) => {
    //pull out the username, email, password from req.body
    const { username, email, password } = req.body;

    //validate input
    if (!username || !password || !email) {
      return next({
        log: "UserController.createUser: Missing required fields",
        status: 400,
        message: { err: "Username, email, and password are required." },
      });
    }

    User.create({ username, password, email }, (err, user) => {
      if (err) {
        return next({
          log: "UserController.createUser: Error creating user",
          status: 500,
          message: { err: "An error occured while creating the user." },
        });
      } else {
        //save the user info in res.locals
        res.locals.user = user.id;
        return next();
      }
    });
  },

  getAllUsers: (req, res, next) => {
    User.find({}, (err, users) => {
      // error handling for express global middleware to catch
      if (err) {
        return next({
          log: "UserController.getAllUsers: Error retrieving users",
          status: 500,
          message: { err: "An error occurred while retrieving users." },
        });
      }
      //store received users in res.locals
      res.locals.users = users;
      return next();
    });
  },
};

export default userController;
