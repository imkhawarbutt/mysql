require('dotenv').config()
const Users = require('../models/Users')
const bcrypt = require('bcrypt');
const base64 = require('js-base64');
const jwt = require('jsonwebtoken');
const url = require('url');

const { param } = require('../routes');


const account = (req, res) => {
    res.render('signup', { title: 'Signup', session: req.session, message: req.query.message, username: req.query.username });
}
const signUp = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    const userExist = await Users.findOne({ 'table': 'users_nodejs', 'key': 'email', 'val': email });

    if (userExist.length > 0) {
        let originalString = '{"firstName": "' + firstName + '","lastName": "' + lastName + '",  "email":"' + email + '", "message":"Error: User Already Exist with "}';
        const base64String = base64.encode(originalString);
        res.redirect(url.format({
            pathname: '/account',
            query: {
                q: base64String
            }
        }));
    }
    else {

        const hashPassword = await bcrypt.hash(password, 10);


        const newUser = await Users.create({ email: email, password: hashPassword, firstName: firstName, lastName: lastName });

        const token = jwt.sign({ email: email, id: newUser.insertId }, process.env.SECRET_KEY);

        console.log(token);

        res.send("Account Created Successfully");
        //res.redirect('dashboard');
    }



}

const signIn = (req, res) => {

    res.send("Tryin to Signin")
}

const dashboard = (req, res) => {

}

const userSearch = async (req, res) => {


    if (!req.body.name)
        val = "";
    else
        val = req.body.name;


    const userList = await Users.findOne({ 'table': 'users_nodejs', 'key': 'email', 'val': val });


    //     const userList = await getUsers(key);


    res.render('index', { title: 'Search Engine', session: req.session, keyword: req.body.name, data: userList });


}

module.exports = { signIn, signUp, account, dashboard, userSearch }
