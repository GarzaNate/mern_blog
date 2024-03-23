import { mongoose, Schema } from 'mongoose';

// validate email helper function
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: [validateEmail, "Please enter a valid email address"],
        },
        password: {
            type: String,
            required: true,
        },
        bio: {
            type: String,
        },

        // model references
        posts: [{
            type: Schema.Types.ObjectId,
            ref: "Blog"
        }],
        comments: [{
            type: Schema.Types.ObjectId,
            ref: "Comment",
        }],

    },
    {timestamps: true}
)

const User = mongoose.model('User', userSchema);

export default User;