
import { connection } from '../config';

export const toQuery = (o) => Object.keys(o).map(k => `${k}=${o[k]}`).join('&');
export const url = (path, queryParams = undefined) => `${connection.apiHost}${path}${queryParams ? `?${toQuery(queryParams)}` : ''}`;

export default url;
