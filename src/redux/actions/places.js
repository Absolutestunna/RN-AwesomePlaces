import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    place: placeName
  }
}

export const deletePlace = () => {
  return {
    type: DELETE_PLACE,
  }
}


export const selectPlace = (selKey) => {
  return {
    type: SELECT_PLACE,
    placeKey: selKey
  }
}

export const deselectPlace = () => {
  return {
    type: DESELECT_PLACE,
  }
}
