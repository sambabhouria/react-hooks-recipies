export default function reducer(state, action) {
  console.log("Dispatched action type ==> ", action.type);
  console.log("Dispatched action payload  ==> ", action.payload);
  switch (action.type) {
    case "ADD_USER":
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.usersData.name.includes(action.payload.name)) {
        return state;
      }

      return {
        ...state,
        usersData: [
          ...state.usersData,
          { id: action.payload.id, name: action.payload.name },
        ],
      };

    case "COMPLETE":
      return {
        ...state,
        usersData: state.usersData.filter(t => t !== action.payload),
      };
    default:
      return state;
  }
}
