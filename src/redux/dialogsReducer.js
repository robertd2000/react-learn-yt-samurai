const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
  dialogs: [
    { id: 1, name: 'Jonathan' },
    { id: 2, name: 'Joseph' },
    { id: 3, name: 'Dio' },
    { id: 4, name: 'Jotaro' },
    { id: 5, name: 'Josuke' },
    { id: 6, name: 'Jorno' },
    { id: 7, name: 'Kars' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'Hi' },
    { id: 4, message: 'Hi' },
    { id: 5, message: 'Hi' },
    { id: 6, message: 'Yo' },
    { id: 7, message: 'Yo' },
    { id: 8, message: 'Yo' },
    { id: 9, message: 'Yo' },
  ],
};

export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 11,
        message: action.newMessageBody,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    default:
      return state;
  }
};

export const addMessage = (newMessageBody) => ({
  type: ADD_MESSAGE,
  newMessageBody,
});
