import express from 'express';
import { getPosts, createPosts, updatePost, deletePost } from '../controllers/posts.js'; 

const router = express.Router();

router.get('/', getPosts);
//정보를 올리기 위함
router.post('/', createPosts);
//정보를 수정하기 위함
router.patch('/:id', updatePost);
//정보를 지우기 위함
router.delete('/:id', deletePost);



export default router;