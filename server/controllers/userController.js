import User from "../models/User.js";

const getUser = async (req, res) => {
    try {
        const user = await User.post
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}
const getUserId = async (req, res) => {

}

export { createUser, getUser, getUserId };