import * as actionTypes from '../actions/actionTypes';

const initialState = {
    commonData: [],
    favorites: []
};

const dataUploading = (state, action) => {
    const mappedData = action.mappedData;
    let oldMappedData = new Map(mappedData);
    mappedData.set(action.data.id, action.data);
    let targetObj = mappedData.get(action.data.id);
    if (oldMappedData.get(action.data.id)) {
        let oldPrice = oldMappedData.get(action.data.id).price;
        let price = mappedData.get(action.data.id).price;
        if (price > oldPrice) {
            targetObj.up = true;
        } else if (price < oldPrice) {
            targetObj.up = false;
        } else {
            targetObj.up = `noChange`;
        }
    } else {
        targetObj.up = `noChange`;
    }
    if (state.favorites.some(item => item.id === action.data.id)) {
        targetObj.favorite = true;
    } else {
        targetObj.favorite = false;
    }
    const commonData = [...mappedData.values()].sort((a,b) => a.favorite < b.favorite ? 1 : -1);

    return {
        ...state,
        commonData
    };
};

const addToFavorite = (state, action) => {
    const commonData = [...state.commonData];
    const target = commonData.find(item => item.id === action.id);
    const favorites = [...state.favorites, target];

    return {
        ...state,
        favorites
    };
};

const removeFromFavorite = (state, action) => {
    const favorites = [...state.favorites];
    const filteredFavorites = favorites.filter(item => item.id !== action.id);

    return {
        ...state,
        favorites: filteredFavorites
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DATA_UPLOADING: return dataUploading(state, action);
        case actionTypes.ADD_TO_FAVORITES: return addToFavorite(state, action);
        case actionTypes.REMOVE_FROM_FAVORITES: return removeFromFavorite(state, action);
        default: return state;
    }
};

export default reducer;