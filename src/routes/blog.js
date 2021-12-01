const express = require("express");
const router = express.Router();
const { BlogPost } = require("../models/blogPost");

const testPost = new BlogPost({
    title: "Test Post",
    seo: { meta: "test" },
    tags: ["test", "test2"],
    content: "This is a test posttt",
    shortContent: "This is a test post",
  });



router.get("/", (req, res) => {
  BlogPost.find({}, (err, posts) => {
    res.send(posts);
  });
});

router.post("/", (req, res) => {
    // const post = new  BlogPost({
    //     title: "Test Post",
    //     seo: {meta: "test"},
    //     tags: ["test", "test2"],
    //     content: "This is a test posttt",
    //     shortContent: "This is a test post",
    // })
    // post.save()
  
    testPost.save();
  
    // console.log(req.body);
    // res.send(req.body)
  });



module.exports = router;
