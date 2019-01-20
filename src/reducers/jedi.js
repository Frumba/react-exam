export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FINISH':
      return [...action.payload, ...state];
    default:
      return state;
  }
};
