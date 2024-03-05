//router

const express = require('express');
const post = require('../models/post');
const router = express.Router();

router.get('',async (req,res)=>{
    const posts = await post.find();
    res.json(posts);
});

router.get('/:id', async (req, res) => {
    const Post = await post.findById(req.params.id);
    res.json(Post);
});

router.post('/addPost', async (req, res) => {
    const { name, content } = req.body;
    const newPost = new post({ name, content });
    await newPost.save();
    res.status(201).send('post added successfully');

});

router.put('/update/:id', async (req, res) => {
    const { name, content } = req.body;
    await post.findByIdAndUpdate(req.params.id, { name, content }, { new: true });
    res.status(201).send('post updated successfully');
});

router.delete('/:id', async (req, res) => {
    await post.findByIdAndDelete(req.params.id);
    res.status(201).send('post deleted successfully');
});


module.exports = router;