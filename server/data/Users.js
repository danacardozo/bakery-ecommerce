import bcrypt from "bcryptjs";

const Users = [
    {
        name: "Random Admin",
        email: "random@admin.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin: true,
    },
    {
        name: "Random User",
        email: "random@user.com",
        password: bcrypt.hashSync("123456",10),
    },
 ];
  
  export default Users;