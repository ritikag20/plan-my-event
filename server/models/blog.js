const mongoose = require('mongoose');

const blogSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        published: Boolean
    },
    { timestamps: true }
);

blogSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;