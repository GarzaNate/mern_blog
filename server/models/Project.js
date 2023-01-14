import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: String,
        picturePath: String,
    }
);