require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
// console.log(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI);

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});



// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }]
});

const CourseSchema = new mongoose.Schema({ 
    title: String, 
    description: String, 
    price: Number, 
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}