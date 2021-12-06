let TdeletRed = ((state, action) => {
    switch (action.type) {
      case "deleting": {
        return [action.payload,...state];
      }
      default: {
        return state;
      }
    }
  });
  
  export default TdeletRed;
  