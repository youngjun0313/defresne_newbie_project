import React, { useEffect } from 'react';

//사용할 ui를 import함
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

//component의 state의 변화를 줄 때 useDispatch를 사용한다.
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

//Post component 불러오기
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

//font등 styles 불러오기
import useStyles from './styles';

//우유 사진 불러오기
import memories from './images/milky.jpg';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container maxWidth = "lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={memories} alt = "memories" height = "60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems = "stretch" spacing = {3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/> 
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>

                    </Grid>
                </Container>

            </Grow>

        </Container>
    )
}

export default App;