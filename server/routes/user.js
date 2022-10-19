const { User, validate } = require('../models/users');
const bcrypt = require('bcrypt');

const router = require ('express').Router();


router.get('/', async(req,res,next)=>{
    let users;
    try {
        users = await User.find();
    } catch (error) {
        console.log(error)
    }
    if(!users){
        res.status(404).send({ message: "No user found"});
    }
    return res.status(200).json({ users });
})



router.post('/', async(req, res)=>{
     try {
        const { error } = validate(req.body);
        if(error)
            return res.status(400).send({ message: error.details[0].message});

        const user = await User.findOne({ email: req.body.email });
        if(user)
            return res.status(409).send({ message: "User with given email already exist!"});

        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).send({ message:"User created succesfully" })
     } catch (error) {
        res.status(500).send({ message: 'Internal Server Error'})        
     }
})

module.exports = router;