const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const JWT = require('jsonwebtoken');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password)
        return res.status(411).json({ msg: "Username & password is required (via body)" });

    await User.create({ username: username, password: password });

    res.status(200).json({
        msg: "User created"
    });

});

router.post('/signin', async (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const user = await User.findOne({ username: username, password: password });
    
    if (!user) {
        return res.status(411).json({
            msg: "Invalid Email id & Password"
        });
    }

    const token = JWT.sign({ username }, process.env.JWT_SECRET);
    return res.status(200).json({
        msg: "Here is your token please paste it in postman headers in autherization",
        token: token
    });

});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});

    res.status(200).json({
        msg: "List of available courses",
        courses: courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    //TO Fix : same user cant buy the same course again.
    const courseId = req.params.courseId;
    const username = req.headers['username'];

    console.log(courseId);

    try {

        const updatedRecord = await User.updateOne({
            username: username
        },
            {
                "$push": { purchasedCourses: courseId }

            });
        console.log(updatedRecord);

        res.status(200).json({
            msg: "Course purchased"
        });

    } catch (err) {
        return res.status(411).json({
            msg: "Invalid courseID",
            solution: "Get all courses and copy _id for the course you wish to buy & send it)"
        });
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username: req.headers['username']
    });
    console.log(user);
    console.log(user.purchasedCourses);

    const purchasedCourses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.status(200).json({
        msg: "Here are your purchased courses",
        courses: purchasedCourses
    });

});

module.exports = router