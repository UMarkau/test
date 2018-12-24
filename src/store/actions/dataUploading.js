import * as actionTypes from './actionTypes';

export const dataUploading = (data, mappedData) => {
    return {
        type: actionTypes.DATA_UPLOADING,
        data,
        mappedData
    };
};