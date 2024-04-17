// main.js

// Capstone 2: Express
"use strict";

// 앱 설정
const express = require("express"),
    app = express(),
    layouts = require("express-ejs-layouts"),
    homeController = require('./controllers/homeController'),
    errorController = require('./controllers/errorController');

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

/**
 * Listing 12.7 (p. 179)
 * ejs 레이아웃 렌더링
 */
app.use(layouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Confetti Cuisine!");
});
app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignup);
app.post("/contact", homeController.postedContactForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
    console.log(`Server at:http://localhost:${app.get("port")}`);
});
