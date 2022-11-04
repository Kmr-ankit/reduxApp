const inititalState = 0;
export function reducerIncOrDec(state = inititalState, action) {
  switch (action.type) {
    case "increase":
      return state + 1;
    case "decrease":
      return state - 1;
    default:
      return state;
  }
}
