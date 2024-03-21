import { Model, Schema } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },

    }
)

const User = Model("user", userSchema);