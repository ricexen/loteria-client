
import { constants } from '../config';

export const toQuery = (o) => Object.keys(o).map(k => `${k}=${o[k]}`).join('&');
export const url = (path, queryParams = undefined) => `${constants.apiHost}${path}${queryParams ? `?${toQuery(queryParams)}` : ''}`;

export default url;
