export default (state, action) => {
  switch(action.type) {
    case "WIDTHDRAW_5000":
      console.log(state.totalAmount);
      return {
        ...state,
        totalAmount: state.totalAmount - 5000
      }
      break;
    case "WIDTHDRAW_10000":
      console.log(state.totalAmount);
      return {
        ...state,
        totalAmount: state.totalAmount - 10000
      }
      break;
    case "GIVE_ALL":
      console.log(state.totalAmount);
      return {
        ...state,
        totalAmount: action.payload.value
      }
      break;
    default:
      return state;
  }
}