import { REGISTRATION_SUCCESS, REGISTRATION_FAIL } from '../constants/action-types';

const regReducer = (state = { error: null}, action) => {
    
    switch(action.type) {
        case REGISTRATION_SUCCESS: {
            return {...state};
        }
        case REGISTRATION_FAIL: {
            return {
                error: action.payload
            }            
        }
        default: {
            return {...state};
        }
    }
}

export default regReducer;