import * as actionTypes from './actionTypes';

export const addToFavorites = id => {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        id
    };
};

export const removeFromFavorites = id => {
    return {
        type: actionTypes.REMOVE_FROM_FAVORITES,
        id
    };
};