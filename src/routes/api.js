const express = require('express');
const route = express.Router();

const blogController = require('../controllers/blogController');
const blogDetailsController = require('../controllers/blogDetailsController');
const commentController = require('../controllers/commentController');
const messageController = require('../controllers/messageController');
const portfolioController = require('../controllers/portfolioController');
const productController = require('../controllers/productController');
const profitController = require('../controllers/profitController');
const projectController = require('../controllers/projectController');
const serviceController = require('../controllers/serviceController');
const titleController = require('../controllers/titleController');


// BlogRoute
route.get("/createBlog", blogController.createBlog );
route.get("/readBlog", blogController.readBlog );
route.get("/deleteBlog", blogController.deleteBlog );
route.get("/updateBlog", blogController.updateBlog );


// Blog Details Route
route.get("/createBlogDetails", blogDetailsController.createDetailsBlog );
route.get("/readBlogDetails", blogDetailsController.readDetailsBlog );
route.get("/deleteBlogDetails", blogDetailsController.deleteDetailsBlog );
route.get("/updateBlogDetails", blogDetailsController.updateDetailsBlog );


// Comment Route
route.get("/createComment", commentController.createComment );
route.get("/readComment", commentController.readComment );
route.get("/deleteComment", commentController.deleteComment );
route.get("/updateComment", commentController.updateComment );


// Message Route
route.get("/createMessage", messageController.createMessage );
route.get("/readMessage", messageController.readMessage );
route.get("/deleteMessage", messageController.deleteMessage );
route.get("/updateMessage", messageController.updateMessage );

// Portfolio Route
route.get("/createPortfolio", portfolioController.createPortfolio);
route.get("/readPortfolio", portfolioController.readPortfolio);
route.get("/deletePortfolio", portfolioController.deletePortfolio);
route.get("/updatePortfolio", portfolioController.updatePortfolio);

// Product Route
route.get("/createProduct", productController.createProduct);
route.get("/readProduct", productController.readProduct);
route.get("/deleteProduct", productController.deleteProduct);
route.get("/updateProduct", productController.updateProduct);

// Profit Route
route.get("/createProfit", profitController.createProfit);
route.get("/readProfit", profitController.readProfit);
route.get("/deleteProfit", profitController.deleteProfit);
route.get("/updateProfit", profitController.updateProfit);


// Project Route
route.get("/createProject", projectController.createProject );
route.get("/readProject", projectController.readProject );
route.get("/deleteProject", projectController.deleteProject );
route.get("/updateProject", projectController.updateProject);


// Service Route
route.get("/createService", serviceController.createService );
route.get("/readService", serviceController.readService );
route.get("/deleteService", serviceController.deleteService );
route.get("/updateService", serviceController.updateService);

//Title Route
route.get("/createTitle", titleController.createTitle );
route.get("/readTitle", titleController.readTitle );
route.get("/deleteTitle", titleController.deleteTitle );
route.get("/updateTitle", titleController.updateTitle);




module.exports= route