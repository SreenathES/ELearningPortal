const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('./routes/user.routes');
const instructorRoutes = require('./routes/instructor.routes');
const adminRoutes = require('./routes/admin.routes');
const studentRoutes = require('./routes/student.routes');

const app = express();

app.use(cors());
app.use('/', userRoutes);
app.use('/instructor', instructorRoutes);
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);

app.listen(process.env.DEV_PORT);