const mongoose = require("mongoose");
const User = require("./users.js");
const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  { timestamps: true }
);
module.exports = mongoose.model("Blog", blogSchema);
