const mongoose = require('mongoose');



const blogSchema = new mongoose.Schema({
    title: String,
    seo: Object,
    tags: Array,
    content: String,
    shortContent: String,
    images: Array,
    created: {type: Date, default: Date.now}
});

const BlogPost = new mongoose.model('BlogPost', blogSchema);

exports.BlogPost = BlogPost;