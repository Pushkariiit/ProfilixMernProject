const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

require('./db/conn');

app.use(express.json());

const User = require('./models/userSchema');

const PORT = process.env.PORT;

// const middleware=((req,res,next)=>{
//     console.log("First complete the process within middleware");
//     next();  // next nhi likhenge to wo ruka rhega middlware pr next use krne se wo chla jayega next page pr
// })

app.use(require('./router/auth'));

app.get('/',(req,res)=>{
    res.send("Hello World"); 
});
 
// app.get('/about',middleware,(req,res)=>{
//     res.send("About us page");  
// });
// app.get('/contact',(req,res)=>{
//     //res.cookie('test','pushkar');
//     res.send("Contact us page");
// });
// app.get('/login',(req,res)=>{
//     res.send("Login page");
// });
// app.get('/register',(req,res)=>{
//     res.send("Register page");
// });

app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`);
})