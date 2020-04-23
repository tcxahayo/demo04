
import { combineReducers } from 'redux';
import inputReducer from '../page/input/reducer';
import listRecuder from '../page/list/reducer';

export const defaultState = {      //默认数据
    data: ['星期一', '星期二'],
    value: '',
    index: '',
    username: '',
    visible: false,
    list: []
}


const reducer = combineReducers({
    // inputReducer,
    listRecuder
})

export default reducer;