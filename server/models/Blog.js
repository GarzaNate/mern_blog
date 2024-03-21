import { Model, Schema } from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        featuredImage: {
            type: String,
        },
        creationDate: {
            type: Date,
            default: Date.now,
        },
        modifiedDate: {
            type: Date,
            default: Date.now,
        },
        comments: {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
        likes: {
            type: Number,
            default: 0,
        },
        dislikes: {
            type: Number,
            default: 0,
        },
    }
)

const Blog = Model("blog", blogSchema);

export default Blog;