import { INCREASE, DECREASE, INCBYAMOOUNT, GETAPI } from '../types/types';

export const increase = () => {
  return {
    type: INCREASE
  }
}

export const decrease = () => {
  return {
    type: DECREASE
  }
}

export const incByAmount = (amount) => {
  return {
    type: INCBYAMOOUNT,
    amount: amount
  }
}

export const getAPI = () => (dispach: any) => {
  let url = "https://facebook.github.io/react-native/movies.json"
  let result = fetch(url).then((data) => {
    data.json().then((dataJson) => {
      return dispach({
        type: GETAPI,
        data: dataJson,
      })
    })
  })
}
