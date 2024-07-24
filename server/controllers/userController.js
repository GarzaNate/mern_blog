import User from "../models/User.js";

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// // Create user
// const createUser = async (req, res) => {
//     try {
//         const user = await User.create(req.body);
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// Update user
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const signOut = (req, res, next) => {
    try {
        res
            .clearCookie('accessToken')
            .status(200)
            .json({ message: 'Logged out successfully' })
    } catch (error) {
        next(error);
    }
    ;
}

export { getUsers, getUserById, updateUser, deleteUser, signOut };
