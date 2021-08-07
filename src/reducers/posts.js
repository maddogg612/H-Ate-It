const reducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      //console.log([...postMessage, action.payload]);
      return [...postMessage, action.payload];
    default:
      return state;
  }
};

export default reducer;
