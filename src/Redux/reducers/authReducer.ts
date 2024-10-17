import { LOG_IN } from '../types/auth';

const initialState = {
    loggedInUser: null,
};

const reducer = (state = initialState, action: { type: string; payload: any }) => {
    if (action.type === LOG_IN) {
        return {
            ...state,
            loggedInUser: action.payload,
        };
    }

    return state;
};

export default reducer;
