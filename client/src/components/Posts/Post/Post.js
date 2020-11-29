import React from 'react';

//font등 styles 불러오기
import useStyles from './styles';

//component 생성
const Post = () => {
    const classes = useStyles();
    
    return(
        <h1>
            POST
        </h1>
    );
}

export default Post;