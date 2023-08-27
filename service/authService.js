const jwtUtil = require("../Utils/jwt");
const userService = require("./userService")

const register = async(userdata)=>{
    let user = await userService.getUser({ email: userdata.email });
    if (user) throw 'User already exists';
    user = await userService.addUser(userdata);
    const token = jwtUtil.generateToken({
      id: user.id,
      email: user.email,
    });
    return { token };
}

const login = async(userdata)=>{
    let user = await userService.getUser({ email: userdata.email });
    if (!user) throw 'User not exists';
    if (user.password !== userdata.password) throw 'Password is incorrect';
    const token = jwtUtil.generateToken({
      id: user.id,
      email: user.email,
    });
    return { token };
}

const accessToken = (token)=>{
    const payload = jwtUtil.verifyToken(token);
    const {id,email} = payload;
    return jwtUtil.generateToken({ id, email});
}

const authService = {register,login,accessToken};

module.exports = authService;