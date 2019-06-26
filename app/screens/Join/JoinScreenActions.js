import { url, toQuery } from '../../util/url';
import { headers as connectionHeaders, socket } from '../../config/connection';


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

export function joinToGame(code) {
    return (dispatch, getState) => {
        const { user } = getState();
        const { player: playerToken } = user.get('tokens');
        const URL = url(`/game/${code}/join`);
        dispatch({ type: 'JOIN_REQUEST' });
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
                    socket.emit(`joinGame`, {
                        player: { nickname: user.get('nickname') },
                        game: { id: code }
                    });
                }
            })
            .catch(error => dispatch({
                type: 'JOIN_REQUEST_FAILURE',
                payload: { errorMessage: error.message }
            }));
    }
}

export default {
    createPlayer,
    joinToGame,
};