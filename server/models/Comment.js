import { mongoose, Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        content: {
            type: String,
            required: true,
        },
        blogPost: {
            type: Schema.Types.ObjectId,
            ref: "Blog",
            required: true,
        },
        creationDate: {
            type: Date,
            default: Date.now
        },
        likes: {
            type: Number,
            default: 0,
        },
        dilikes: {
            type: Number,
            default: 0,
        },
    }
)

const Comment = mongoose.model("comment", commentSchema);

export default Comment;