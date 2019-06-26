import io from 'socket.io-client';
import { CLIENT_KEY } from 'react-native-dotenv';
import { API_HOST, SOCKET_HOST } from 'react-native-dotenv';

export const clientKey = CLIENT_KEY;
export const apiHost = API_HOST;

export const headers = {
    clientKey: { Authorization: `ClientKey ${clientKey}` },
    default: { 'Content-Type': 'application/x-www-form-urlencoded', }
};

export const socket = io.connect(`${SOCKET_HOST}/games/loteria`);

export const connection = {
    clientKey,
    headers,
    apiHost,
    socket,
};

export default {
    connection,
};