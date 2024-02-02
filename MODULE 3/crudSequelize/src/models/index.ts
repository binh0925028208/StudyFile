import information from "./infor.model";
import User from "./user.model";

const createTable = () => {
  User.sync().then(() => {
    console.log("User Created");
  });
  information.sync().then(() => {
    console.log("Information Created");
  });
};

export default createTable;
