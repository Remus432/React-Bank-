export const withdraw5000 = (value) => {
  return {
    type: "WIDTHDRAW_5000",
    payload: {
      value
    }
  }
}


export const withdraw10000 = (value) => {
  return {
    type: "WIDTHDRAW_10000",
    payload: {
      value
    }
  }
}


export const giveAll = () => {
  return {
    type: "GIVE_ALL",
    payload: {
      value: 0
    }
  }
}