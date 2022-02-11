import { combineReducers} from 'redux';
import count from './countReducer';

const rootReducer = combineReducers({
    count: count
});

export default rootReducer;