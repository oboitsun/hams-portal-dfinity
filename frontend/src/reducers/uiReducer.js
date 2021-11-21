const initialState = {
  user: null,
  showModal: false,
};
const SET_USER = "SET_USER";
const SHOW_MODAL = "SHOW_MODAL";
export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, showModal: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export const setUser = (payload) => ({ type: SET_USER, payload });
export const setShowModal = (payload) => ({ type: SHOW_MODAL, payload });
