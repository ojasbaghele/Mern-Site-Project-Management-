const UsersModel = require("../model/userSchema");

//TODO: HOME Page Of Site =>
async function home_page(req, res) {
    try {
        res
            .status(200)
            .send("Welcome to home_page....");

    } catch (error) {
        console.log(error);
    }
}

//TODO: Register The user if not already registered =>
async function register(req, res) {
    // console.log(req.body);
    try {
        const { name, email, mobile } = req.body;
        const Reg_userExist = await UsersModel.findOne({ email: email });
        if (Reg_userExist) {
            return res.status(400).json({ massage: "User already registered" });
        }
        const userCreated = await UsersModel.create({ name, email, mobile });
        res.status(200).json({ message: userCreated });

    } catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
}

//TODO: Check if userdata is stored in database, Check if email & password are correct =>
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const Log_userExist = await UsersModel.findOne({ email: email });
        if (!Log_userExist) {
            return res.status(404).json({ message: "User does not exist in Database" });
        } else {
            if (Log_userExist.password === password) {
                console.log("User Login Successfully");
                return res.status(200).json({ message: "User LOgin Successfully" });
                
            } else {
                console.log("Wrong Password");
                return res.status(404).json({ message: "Password did not Match" });
            }
        }
    } catch (err) {
        console.log("User Not Found");
        return res.status(404).json({ message: "User Not Found" });
    }
}

module.exports = { home_page, register, login };