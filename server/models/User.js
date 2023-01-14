import mongoose, { Schema } from "mongoose";
import { validateEmail } from "../utils/helpers.js";

const UserScehma = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            validate: [validateEmail, "Please enter a valid email"],
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        favoriteProjects: {
            type: Array,
            default: []
        }
    },
    { timestamps: true }
)

const User = mongoose.Model("User", UserScehma);

export default User;