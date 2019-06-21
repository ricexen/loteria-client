import { fromJS } from 'immutable';
import { Loteria } from './models/loteria';

const INIT_STATE = {
    loading: false,
    error: false,
    fase: Loteria.Fase['NONE'],
    errorMessage: '',
    joined: false,
    nickname: '',
    token: ''
};

export const userReducer = (state = fromJS(INIT_STATE), action) => {
    switch (action.type) {
        case 'JOIN_REQUEST':
        case 'CREATE_PLAYER_REQUEST':
            return state.merge({
                loading: true,
                error: false,
                joined: false,
            });
        case 'CREATE_PLAYER_REQUEST_FAILURE':
        case 'JOIN_REQUEST_FAILURE':
            return state.merge({
                loading: false,
                error: true,
                errorMessage: action.payload.message
            });
        case 'CREATE_PLAYER_REQUEST_SUCCESS':
            return state.merge({
                locading: false,
                token: action.payload.token,
                nickname: action.payload.nickname,
            });
        case 'JOIN_REQUEST_SUCCESS':
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