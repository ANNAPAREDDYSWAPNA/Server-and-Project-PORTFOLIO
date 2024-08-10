// FILENAME : "APP.JS"
const express = require('express');
const mongoose = require('mongoose')
const UserRouter = require('./src/routes/userRoutes');
const ServerRouter = require('./src/routes/serverRoutes');
const ProjectRouter = require('./src/routes/projectRoutes');
const DeveloperRouter = require('./src/routes/developerRoutes');
const app=express();
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
//Routes
app.use('/',UserRouter);
app.use('/',ServerRouter);
app.use('/',ProjectRouter);
app.use('/',DeveloperRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect('mongodb+srv://sindhujasri2131:U6RsDdqWR9t8hHQP@cluster0.ya2w3tb.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0')
.then(() => app.listen(5000))
.then(() =>
console.log("Connected to Database")
)
.catch((err) => console.log(err));


// const user = require("./src/models/user")
// const express = require('express');
// const mongoose = require('mongoose')
// //const UserRouter = require('./src/routes/userRoutes');
// const ServerRouter = require('./src/routes/serverRoutes')
// const app = express();
// const cors = require("cors");
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(cors());
// app.use('/', ServerRouter);
// //Routes
// //app.use('/',UserRouter);
//     .then(() => app.listen(5000))
//     .then(() =>
//         console.log("Connected to Database")
//     )
//     .catch((err) => console.log(err));



// const express = require("express");
// const bodyParser = require("body-parser");
// const InitiateMongoServer = require("./src/config/db");
// const cors = require("cors");
// const UserRouter = require('./src/routes/userRoutes');
// // Initiate Mongo Server
// // InitiateMongoServer();

// const app = express();

// // PORT
// const PORT = process.env.PORT || 4000;

// // Middleware
// app.use(bodyParser.json());
// //cors
app.use(cors());
// app.use('/', UserRouter);

// app.get("/", (req, res) => {
//   res.json({ message: "API Working" });
// });


// app.listen(PORT, (req, res) => {
//   console.log(`Server Started at PORT ${PORT}`);
// });