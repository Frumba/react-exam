export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_JEDI_FINISH':
      return [...state, ...action.payload];
    case 'ADD_JEDI_FINISH':
      return [...state, action.payload];
    default:
      return state;
  }
};
