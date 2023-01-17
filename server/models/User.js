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
        friends: {
            type: Array,
            default: [],
        },
        picturePath: {
            type: String,
            default: ""
        },
        location: String,
        occupation: String,
        impressions: Number,
    },
    { timestamps: true }
)

const User = mongoose.model("User", UserScehma);

export default User;