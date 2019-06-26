import { fromJS } from 'immutable';

const INIT_STATE = {
    loading: false,
    error: false,
    errorMessage: '',
    sheets: [],
    sheet: [[], [], [], []],
    game: [[], [], [], []],
    lastPlay: [null, null],
};

export const loteriaGameReducer = (state = fromJS(INIT_STATE), action) => {
    switch (action.type) {
        case 'SHEETS_REQUEST':
        case 'CHOOSE_SHEET_REQUEST':
        case 'FILL_SPACE_REQUEST':
            return state.merge({ loading: true });
        case 'SHEETS_REQUEST_FAILURE':
        case 'CHOOSE_SHEET_REQUEST_FAILURE':
        case 'FILL_SPACE_FAILURE':
            return state.merge({
                loading: false,
                error: true,
                errorMessage: action.payload.errorMessage
            });
        case 'SHEETS_REQUEST_SUCCESS':
            return state.merge({
                loading: false,
                sheets: action.payload.sheets,
            });
        case 'CHOOSE_SHEET_SUCCESS':
            return state.merge({
                loading: false,
                sheet: action.payload.sheet,
            });
        case 'FILL_SPACE_SUCCESSS':
            return state.merge({
                loading: false,
                lastPlay: [action.payload.x, action.payload.y],
            });
    }

    return state;
}

export default loteriaGameReducer;