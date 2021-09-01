const bcryptjs = require("bcryptjs");
const router = require("express").Router();
const db = require("../model/all_model");
const { isValid, makeJwt } = require('../utils/div');




router.get("/", (req, res) => {
  res.status(200).json({ message: "please register" })
})

router.post("/register", (req, res) => {
  const credentials = req.body;
  console.log(req.body)
  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;
    // hash the password
    const hash = bcryptjs.hashSync(credentials.password, rounds);
    credentials.password = hash;


    db.add(credentials)
      .then(user => {
        res.status(201).json({ data: user, message: "role: 1=instructor 2=client" });
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ message: "Credentials must be unique", error });
      });
  } else {
    res.status(400).json({
      message: "please provide username and password",
    });
  }
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("req.body",req.body)
  if (isValid(req.body)) {
   
    db.getBy({ username })
   
      .then(([user]) => {
        console.log("Inside login",user)
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = makeJwt(user);
          res.status(200).json({ message: 'logged in', token, role: user.role });
        }
        else{
          res.status(401).json({message:"Error username"})
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Error loggin in', error: err.message });
      });
  } else {
    res.status(404).json({ error: 'please provide username and password' });
  }
});

router.get("/logout", async (req, res, next) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        next(err)
      } else {
        res.status(204).end()
      }
    })
  } catch (err) {
    next(err)
  }
})


module.exports = router;