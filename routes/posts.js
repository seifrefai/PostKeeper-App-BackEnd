import express from 'express'
import { getPosts,createPost,deletePost,updatePost,likePost } from '../controllers/posts.js'

const router= express.Router()
//these are our routes and they can be reached by going to : http://localhost:8000/posts
router.get('/',getPosts)
router.post('/',createPost)
//Here we add :id to our route, since we need to know the id in order to perform the patch and delete operations
router.patch('/:id',updatePost)
router.patch('/:id/likePost', likePost);
router.delete('/:id',deletePost)
export default router;