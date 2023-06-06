const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authenticate = require('../middleware/authenticate');

const cookieParser = require('cookie-parser');

router.use(cookieParser());


router.get('/', (req, res) => {
    res.send('Hello mai authentication wala');
});


router.post('/register', async (req, res) => {
    console.log('Received registration request');
    console.log(req.body);

    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz fill all the fields" });
    }
    try {

        const exist = await User.findOne({ email: email });

        if (exist) {
            console.log('Email already exists');
            return res.status(422).json({ error: "Email already exist" });
        }
        else if (password != cpassword) {
            console.log('Password not matching');
            return res.status(422).json({ error: "passowrd not matching" });
        }
        else {

            const user = new User({ name, email, phone, work, password, cpassword });



            const result = await user.save();



            res.status(201).json({ message: "User registered Successfully" });
        }

    } catch (err) {
        console.log(err);
    }
});


// router.post('/signin', async (req, res) => {

//     try {

//         const { email, password, cpassword } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error: "Plz fill all the details " });
//         }

//         const userlogin = await User.findOne({ email: email });


//         if (userlogin) {

//             const isMatch = await bcrypt.compare(password, userlogin.password);

//             const token = await userlogin.generateAuthToken();
//             console.log(token);

//             res.cookie('jwtoken', token, {
//                 expires: new Date(Date.now() + 25892000000),
//                 httpOnly: true
//             }).json({ message: "successfully signed in" });

//             console.log(req.cookies);
//             if (!isMatch) {
//                 res.status(400).json({ error: "password error" });
//             }
//         }
//         if (!userlogin) {
//             res.status(400).json({ error: "invalid credentials" });
//         }


//         res.status(201).json({ message: "succesfully signin" });
//         console.log(email);


//     } catch (err) {
//         console.log(err);
//     }
// });

router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: "Please fill in all the details" });
      }
  
      const user = await User.findOne({ email: email });
  
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      const token = await user.generateAuthToken();
      console.log(token);
  
      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true
      });
  
      res.json({ message: "Successfully signed in" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Server error" });
    }
  });
  

router.get('/about', authenticate, (req, res) => {
    console.log("About us page");
    res.send(req.rootUser);
});


router.get('/getdata', authenticate, (req, res) => {
    console.log("GetData");
    res.send(req.rootUser);
});

// router.post('/contact', authenticate, async (req, res) => {
//     try {
//         const { name, email, phone, message } = req.body;

//         if (!name || !email || !phone || !message) {
//             console.log("error in form filling");  
//             return res.json({ error: "plz fill all the fields properly" });
//         }

//         const userContact = await User.findOne({ _id: req.userID });

//         console.log("i run");

//         if (userContact) {
//             const userMessage = await userContact.addMessage(name, email, phone, message);

//             await userMessage.save();

//             res.status(201).json({ message: "message send" });
//         }

//     } catch (err) {
//         console.log(err);
//     }
// });

router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        console.log(req.body); // Log the request payload

        if (!name || !email || !phone || !message) {
            console.log('error in form filling');
            return res.json({ error: 'Please fill all the fields properly' });
        }

        const userContact = await User.findOne({ _id: req.userID });

        console.log('I ran');

        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({ message: 'Message sent' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/logout',(req, res) => {
    console.log("logout");
    res.clearCookie("jwtoken",{path:'/'});
    res.status(200).send("logout");
});
module.exports = router;


//router.post('/register',(req,res)=>{
// console.log("mai registeration wala page");
// res.json({message:req.body});

// const {name,email}=req.body;
// console.log(name);              // ye console me name show krega after clicking on send in POSTMAN

// console.log(email);

// const {name,email,phone,work,password,cpassword} = req.body;

// if(!name||!email||!phone||!work||!password||!cpassword){
//     return res.status(422).json({error:"Plz fill all the fields"});
// }

// User.findOne({email:email}).then((exist)=>{
//     if(exist){
//         return res.status(422).json({error:"Email already exist"});
//     }
//     const user = new User({name,email,phone,work,password,cpassword});

//     user.save().then(()=>{
//         res.status(200).json({message:"User Registered Successfully"});
//     }).catch((err)=>{
//         res.status(500).json({error:"Invalid Registration"});
//     })
// }).catch((err)=>{
//     console.log(err);
// })
//})