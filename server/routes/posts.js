import express from 'express';
import { getPosts, createPosts, updatePost } from '../controllers/posts.js'; 

const router = express.Router();

router.get('/', getPosts);
//정보를 올리기 위함
router.post('/', createPosts);
//정보를 수정하기 위함
router.patch('/:id', updatePost);


export default router;