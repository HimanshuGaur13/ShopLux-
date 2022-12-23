// const { User } = require("../models/PasswordReset");
const Token = require("../models/Token");
const sendEmail = require("../utils/sendEmail");
const {User} =require('../models/User')
const crypto = require("crypto");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const schema = Joi.object({ email: Joi.string().email().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).send("user with given email doesn't exist");

        let token = await Token.findOne({ userId: user._id });
        if (!token) {
            token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
        }

        const link = `http://localhost:3000/newP/${user._id}/${token.token}`;
        await sendEmail(user.email, "Password reset", link);

        res.send("password reset link sent to your email account");
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});



router.post("/:userId/:token", async (req, res) => {
    try {
        const schema = Joi.object({ password: Joi.string().required() });
        const { error } = schema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send("invalid link or expired");

        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link or expired");
        user.password = req.body.password;
        await user.save();
        await token.delete();
        res.send("password reset sucessfully.");
    
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
});


router.get("/tok/:id", async (req, res) => {
    try {
      const token = await Token.findById(req.params.id);
      res.status(200).json(token);
    } catch (err) {`  `
      res.status(500).json(err);
    }
  });
module.exports = router;