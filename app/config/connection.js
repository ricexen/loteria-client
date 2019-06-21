import { CLIENT_KEY } from 'react-native-dotenv';

export const clientKey = CLIENT_KEY;

export const headers = {
    clientKey: { Authorization: `ClientKey ${clientKey}` },
    default: { 'Content-Type': 'application/x-www-form-urlencoded', }
};

const connection = {
    clientKey,
    headers,
};

export default {
    connection,
};