import { SET_INTERNET_OFF, SET_INTERNET_ON, SET_TOKEN, REMOVE_TOKEN } from './actionType'

export const onInternetOff = () => {
    return {
        type: SET_INTERNET_OFF,
    };
};

export const onInternetOn = () => {
    return {
        type: SET_INTERNET_ON,
    };
};

export const onSetToken = (payload:any) => {
    return {
        type: SET_TOKEN,
        payload
    };
};
export const onRemoveToken = () => {
    return {
        type: REMOVE_TOKEN,
    };
};