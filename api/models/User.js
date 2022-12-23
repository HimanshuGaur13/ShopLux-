// // const mongoose = require("mongoose");

// // const UserSchema = new mongoose.Schema(
// //   {
// //     username: { type: String, required: true, unique: true },
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true },
// //     isAdmin: {
// //       type: Boolean,
// //       default: false,
// //     },
// //     // img:{ type : String}
// //   },
// //   { timestamps: true }
// // );
// // module.exports = mongoose.model("Userdata", UserSchema);


const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema);

const validate = (user) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
    return schema.validate(user);
};

module.exports = { User, validate };