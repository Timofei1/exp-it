import * as types from './actionTypes';

export const setInfo = info => ({
    type: types.SET_INFO,
    info
});

export const setModalActive = modalInfo => ({
    type: types.SET_MODAL_ACTIVE,
    modalInfo
});

export const closeModal = () => ({
    type: types.CLOSE_MODAL
});



// WEBPACK FOOTER //
// ./src/js/store/info/actions.js