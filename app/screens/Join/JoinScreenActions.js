import { url, toQuery } from '../../util/url';
import { headers as connectionHeaders } from '../../config/connection';

export function joinToGame(code) {
    return (dispatch, getState) => {
        const { user } = getState();
        const playerToken = user.get('token');
        const URL = url(`/game/${code}/join`);
        fetch(URL, {
            method: 'POST',
            headers: { Authorization: `Bearer ${playerToken}`, }
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    dispatch({
                        type: 'JOIN_REQUEST_SUCCESS',
                        payload: { token: result.token, }
                    });
                }
            })
            .catch(error => dispatch({
                type: 'JOIN_REQUEST_FAILURE',
                payload: { errorMessage: error.message }
            }));
    }
}

export function createPlayer(nickname) {
    return (dispatch) => {
        dispatch({ type: 'CREATE_PLAYER_REQUEST' });
        const URL = url('/player/create');
        const body = toQuery({ nickname });
        fetch(URL, {
            method: 'POST',
            body,
            headers: { ...connectionHeaders.default, ...connectionHeaders.clientKey },
        })
            .then(response => response.json())
            .then(response => {
                if (response.success) {
                    dispatch({
                        type: 'CREATE_PLAYER_REQUEST_SUCCESS',
                        payload: { ...response.player, },
                    });
                } else {
                    dispatch({
                        type: 'CREATE_PLAYER_REQUEST_FAILURE',
                        payload: { errorMessage: response.message },
                    });
                }
            })
            .catch(error => dispatch({
                type: 'CREATE_PLAYER_REQUEST_FAILURE',
                payload: { errorMessage: 'LOL!', error },
            }));

    }
}

export default {
    createPlayer,
    joinToGame,
};