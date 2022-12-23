const router = require("express").Router();
const { User, validate } = require("../models/User");
// const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER
// router.post("/register", async (req, res) => {
//   const newUser = new User({
//     username: req.body.username,
//     email: req.body.email,
//     password: CryptoJS.AES.encrypt(
//       req.body.password,
//       process.env.PASS_SEC
//     ).toString(),
//   });

//   try {
//     const savedUser = await newUser.save();
//     res.status(201).json(savedUser);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


router.post("/register", async (req, res) => {
  const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
          req.body.password,
          process.env.PASS_SEC
        ).toString(),
      });
  try {
      const { error } = validate(req.body);
      if (error) return res.status(400).send(error.details[0].message);
      const savedUser = await newUser.save();
          res.status(201).json(savedUser);

      // const user = await new User(req.body).save();

      // res.send(user);
  } catch (error) {
      res.send("An error occured");
      console.log(error);
  }
});
//LOGIN

router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                name: req.body.name
            }
        );

        !user && res.status(401).json("Wrong User Name");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

});
module.exports = router;