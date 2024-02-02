import User from "./user.model";

const createTable = () => {
  User.sync().then(() => {
    console.log("User created");
  });
};

export default createTable;
