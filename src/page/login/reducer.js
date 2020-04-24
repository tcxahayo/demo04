import { LOGIN } from '../../store/actionType';
const defalutState = {
    username:''
}

export default (state = defalutState, action) => {
   if(action.type === LOGIN){
       let  newState = Object.assign({},state,{username:action.value});
       return newState;
   }
   return state;
}