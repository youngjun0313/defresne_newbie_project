import { combineReducers } from 'redux';

import posts from './posts';

export default combineReducers({
    //key랑 value랑 같아서 그냥 하나만 써도 됨.
    posts
});