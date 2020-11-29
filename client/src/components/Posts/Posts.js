import React from 'react';

import { useSelector } from 'react-redux';

import Post from './Post/Post';
//font등 styles 불러오기
import useStyles from './styles';

//component 생성
const Posts = () => {
    const posts = useSelector((state) => (state.posts));
    const classes = useStyles();

    console.log(posts);

    return(
        <>
            <h1>POSTS</h1>
            <Post/>
            <Post/>
        </>
    );
}

export default Posts;