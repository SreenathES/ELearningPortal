require('dotenv').config();
const sequelize = require('./db');

const Cart = require('../models/cart');
const CartItems = require('../models/cartItems');
const Certificate = require('../models/certificate');
const Course = require('../models/course');
const CourseCategory = require('../models/courseCategory');
const CourseContent = require('../models/courseContent');
const Language = require('../models/languages');
const Otp = require('../models/otp');
const Payment = require('../models/payment');
const PaymentMethod = require('../models/paymentMethod');
const Role = require('../models/role');
const User = require('../models/user');
const UserCourseEnrollment = require('../models/cart');
const UserCourseFeedback = require('../models/userCourseFeedback');
const UserCourseProgress = require('../models/userCourseProgress');
const UserDetails = require('../models/cart');
const UserRole = require('../models/cart');

sequelize.sync({alter: true});