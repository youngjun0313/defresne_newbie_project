import React, { useImperativeHandle } from 'react';

import { TextField, Button, Typography, Paper} from '@material-ui/core';

//font등 styles 불러오기
import useStyles from './styles';

//component 생성
const Form = () => {
    const classes = useStyles();
    const handleSubmit = () => {

    }

    return(
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
                <Typography varient="h6">
                    Creating a Memory
                </Typography>

            </form>
        </Paper>
    );
}

export default Form;