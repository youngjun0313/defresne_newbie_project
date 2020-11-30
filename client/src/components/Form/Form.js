import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

//font등 styles 불러오기
import useStyles from './styles';

import { createPost, updatePost } from '../../actions/posts';

//component 생성
const Form = ({ currentId, setCurrentId }) => {
    //data형식 지정
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const classes = useStyles();
    const dispatch = useDispatch();
    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));

    //...클릭시 정보가 다시 form에 담긴다.
    useEffect(() => {
        //post가 null이 아닌경우
        if(post)
            setPostData(post);
    }, [post])

    //event handler라고 보면됨
    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: ''});
    }

    const handleSubmit = (e) => {
        //화면의 새로고침을 막는 것
        e.preventDefault();

        //currentId가 null이 아니면
        if(currentId) {
            dispatch(updatePost(currentId, postData));
        } else { 
            dispatch(createPost(postData));
        }
        clear();
    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {`${classes.root} ${classes.form}`} onSubmit = {handleSubmit}>
                <Typography varient="h5">
                    기억에 남는 순간을 기록하세요
                </Typography>
                <TextField name="creator" varient="outlined" label="Creator" fullWidth value = {postData.creator} onChange = {(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" varient="outlined" label="Title" fullWidth value = {postData.title} onChange = {(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" varient="outlined" label="Message" fullWidth value = {postData.message} onChange = {(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" varient="outlined" label="Tags" fullWidth value = {postData.tags} onChange = {(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className = {classes.fileInput}> <FileBase type = "file" multiple = {false} onDone = {({base64}) => setPostData({ ...postData, selectedFile: base64})} /></div>
                <Button className={classes.buttonSubmit} varient="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button varient="contained" color="secondary" size="small" onClick = { clear } fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;