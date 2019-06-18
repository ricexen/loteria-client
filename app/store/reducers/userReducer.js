import { fromJS } from 'immutable';

const INIT_STATE = {
    loading: false,
    error: false,
    errorMessage: '',
    joined: false,
    nickname: '',
    token: ''
};

export const userReducer = (state = fromJS(INIT_STATE), action) => {
    switch (action.type) {
        case 'REQUEST_JOIN':
            return state.merge({ loading: true });
        case 'REQUEST_JOIN_FAILURE':
            return state.merge({
                loading: false,
                error: true,
                errorMessage: action.payload.message
            });
        case 'REQUEST_JOIN_SUCCESS':
            return state.merge({
                loading: false,
                joined: true,
                nickname: action.payload.nickname,
                token: action.payload.token
            });
        default:
            return state;
    }
}

export default userReducer;