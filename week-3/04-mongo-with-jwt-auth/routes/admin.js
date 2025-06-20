const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db');
require('dotenv').config();
const JWT = require('jsonwebtoken');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password)
        return res.status(411).json({ msg: "Username & password is required (via body)" });

    // console.log(username, password);
    try {
        const adminUser = await Admin.create({
            username: username,
            password: password
        });
        console.log(adminUser);
        return res.status(200).json({
            msg: "Admin created"
        });
    } catch (err) {
        // console.log(err);
        return res.status(411).json({
            msg: err
        });
    }

});

router.post('/signin', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const adminUser = await Admin.findOne({ username:username, password:password });
    // console.log(adminUser);
    if (adminUser) {
        const token = JWT.sign({ username }, process.env.JWT_SECRET);
        return res.status(200).json({
            msg: "Here is your token please paste it in postman headers in autherization",
            token: token
        });

    } else {
        return res.status(411).json({
            msg: "Invalid Email id & Password"
        });
    }
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    //     Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
    //   Output: { message: 'Course created successfully', courseId: "new course id" }
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    if (!title || !description || !price) {
        return res.status(411).json({
            msg: "Title, Descrption & Price is mandatory!!"
        });
    }

    await Course.create({ title: title, description: description, price: price, imageLink: imageLink });

    res.status(200).json({
        msg: "Course created"
    });

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const course = await Course.find({});

    res.status(200).json({
        Courses: course
    });

});

module.exports = router;