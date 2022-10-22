const getBlogs = (req, res) => {
  res.status(200).json({ messege: "My first blog" });
};

const setBlog = (req, res) => {
  res.status(200).json({ messege: "set blog" });
};

const updateBlog = (req, res) => {
  res.status(200).json({ messege: `Update blog ${req.params.id}` });
};

const deleteBlog = (req, res) => {
  res.status(200).json({ messege: `delete blog ${req.params.id}` });
};

module.exports = {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
};
