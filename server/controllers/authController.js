import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/errorHandler.js";

export const signUp = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });

    } catch (error) {
        next(error);
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        // checking email
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));
        // checking password
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));
        // asign token to user
        const token =  jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        // seperate password from user object to not send it to the client
        const { password: hashedPassword, ...user } = validUser._doc;
        // set cookie expiration date
        const expireDate = new Date(Date.now() + 3600000);
        // send token in a cookie, respond with user object
        res.cookie('accessToken', token, { httpOnly: true, expires: expireDate }).status(200).json(user);

    } catch (error) {
        next(error);
    }
}