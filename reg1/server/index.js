const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const UserModel=require('./models/User')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/user")

app.get("/getEmail/:email", (req, res) => {
    const { email } = req.params;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user); 
            } else {
                res.json(null); 
            }
        })
        .catch(err => {
            console.error("Error fetching user details:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

app.post("/login", (req,res) => {
    const {email,password} = req.body;
    UserModel.findOne({email:email})
    .then(user=> {
        if(user) {
            if(user.password===password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record found  ")
        }
    })
})

app.post('/register', (req, res) => {
    const { email } = req.body;

    UserModel.findOne({ email: email })
        .then(existingUser => {
            if (existingUser) {
                res.status(409).json({ error: "Email already exists" });
            } else {
                UserModel.create(req.body)
                    .then(newUser => res.json(newUser))
                    .catch(err => res.status(500).json({ error: "Internal Server Error" }));
            }
        })
        .catch(err => res.status(500).json({ error: "Internal Server Error" }));
});




app.listen(3001, () => {
    console.log("Server isss running")
})