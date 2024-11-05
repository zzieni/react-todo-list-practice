// action value
const ADD_TODO = 'ADD_TODO';

// action creator 만들어서 export(컨포넌트에서 사용할 수 있도록)
export const add_todo = (payload) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

// state 초기값 설정
const initalSate = [
  { id: 1, title: 'react 공부' },
  { id: 2, title: 'redux 공부' },
];

const todos = (state = initalSate, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todos;
