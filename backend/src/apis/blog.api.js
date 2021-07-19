const blogApi = require('express').Router();
const blogController = require('../controllers/blog.controller');

// @Note: temp API
blogApi.post('/add', blogController.postAddBlog);

blogApi.get('/blog-list', blogController.getBlogList);

blogApi.get('/blog-html', blogController.getBlogHtml);

module.exports = blogApi;
