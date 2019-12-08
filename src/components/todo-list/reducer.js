export default function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      // return current state if empty
      if (!action.payload) {
        return state;
      }
      // return current state if duplicate
      if (state.usersData.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        usersData: [...state.usersData, action.payload],
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
