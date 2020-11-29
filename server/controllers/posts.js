import PostMessage from '../models/postMessage.js';

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