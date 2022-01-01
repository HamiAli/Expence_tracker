
let TraansactionRed = ((state, action) => {
  switch (action.type) {
    case "Add": {
      return [action.payload,...state];
    }
    case "DELETE": {
      return state.filter((item, index)=>index!==state.indexOf(action.payload,...state));
    }
    default: {
      return state;
    }
  }
});

export default TraansactionRed;
