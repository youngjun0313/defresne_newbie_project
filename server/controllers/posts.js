import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

//call back function을 일일이 처리하기 귀찮아서 따로 처리해주는 폴더를 만들었음 -> controllers
//status값이 200번대면 오류 x, 400번대면 오류 o
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//submit하면 정보를 db에 올림
export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

//정보 수정용 함수
export const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;
    
    //id가 잘못 된 경우
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, { ...post, id }, { new: true });

    res.json(updatedPost);
}

//정보 지우기용 함수
export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}