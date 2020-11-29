import * as api from '../api';

//action을 정의하는 함수들
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error);
    }
}