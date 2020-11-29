import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//posts.js로 부터 export된 애를 받아온다.
import postRoutes from './routes/posts.js';

//app instance 형성
const app = express();

//라우터가 /posts인 경우 postRoutes가 처리한다.
app.use('/posts', postRoutes);

//PORT 설정
const PORT = process.env.PORT | 5000;

//사진을 데이터로 전달받을 거기 때문에 아래와 같이 badyParser를 설정한다.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//mongodb를 연결할 때 어떤 db를 사용해주는지 명시해준다.
//두번째 인자는 에러 방지용으로 해둠
mongoose.connect('mongodb://localhost/todolist', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log("server connected successfully")
        })
    })
    .catch((err) => {
        console.log(err);
    });
//에러 방지용
mongoose.set('useFindAndModify', false);
const db = mongoose.connection;
