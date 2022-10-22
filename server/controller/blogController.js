// const asyncHandler = require("express-async-handler");

// const Blog = require("../models/blogs");
// const User = require("../models/users");

// const getBlogs = asyncHandler(async (req, res) => {
//   const blogs = await Blog.find({ user: req.body.id });

//   res.status(200).json(blogs);
// });

// const setBlog = asyncHandler(async (req, res) => {
//   const blog = await Blog.create({
//     user: req.user.id,
//     title: req.body.title,
//     content: req.body.content,
//   });

//   res.status(200).json(blog);
// });

// const updateBlog = asyncHandler(async (req, res) => {
//   const blog = await Blog.findById(req.params.id);

//   if (!blog) {
//     res.status(400);
//   }

//   const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });

//   res.status(200).json(updatedBlog);
// });

// const deleteBlog = asyncHandler(async (req, res) => {
//   const blog = await Blog.findById(req.params.id);

//   if (!blog) {
//     res.status(400);
//   }

//   await blog.remove();

//   res.status(200).json({ id: req.params.id });
// });

// module.exports = {
//   getBlogs,
//   setBlog,
//   updateBlog,
//   deleteBlog,
// };
