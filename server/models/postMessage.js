import mongoose from 'mongoose';

//db의 데이터 관리를 더 쉽게하기 위해서 schema를 지정한다.
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

//model의 첫번째 인자를 단수로 지정하게 되면 자동으로 collection 이름은 s가 붙여진 collecion으로 인식한다.
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;