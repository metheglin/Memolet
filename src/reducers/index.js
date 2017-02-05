import {combineReducers} from 'redux'
// import entities from '../reducers/entities'
// import player from '../reducers/player'
// import playlists from '../reducers/playlists'
// import playlist from '../reducers/playlist'
import * as types from '../constants/ActionTypes'

import LoadStatus from '../utils/LoadStatus'

const initialState = { pen: false }
const initialMemoListState = {
  loadStatus: new LoadStatus(),
}
const initialMemoDetailState = {
  attributes: {},
}

function navigator(state = initialState, action) {
  switch (action.type) {
  case types.TAKE_PEN_UP:
    return Object.assign({}, state, {
      pen: true
    })
  case types.TAKE_PEN_DOWN:
    return Object.assign({}, state, {
      pen: false
    })
  case types.WRITE_DOWN:
    return Object.assign({}, state, {

    })
  case types.WRITE_DOWN_COMPLETED:
    return Object.assign({}, state, {

    })
  default:
    return state
  }
}

function memo_list(state = initialMemoListState, action) {
  switch( action.type ) {
    case types.LOAD_MEMOS:
      return Object.assign({}, state, {
        loadStatus: state.loadStatus.setRequestSent()
      })
    case types.RECEIVE_MEMOS:
      return Object.assign({}, state, {
        loadStatus: state.loadStatus.setRequestReceived( action.response ),
        items: action.items,
      })
    default:
      return state
  }
}

function memo_detail(state = initialMemoDetailState, action) {
  // console.log("koko kokko ko kko ko memo_detail !~~~~~~~~~~~!!!!!!!!!!!!~~~~~~~~~~~~!!!!!!!~~~~~~~~")
  // console.log(action.type)
  switch( action.type ) {
    case types.SELECT_MEMO:
      console.log("RECEIVE SELECT MEMO!!!!!!!!!!!!!!!!!!!! &&&&&&&& %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% yes")
      console.log(Object.assign({}, state, {
        attributes: action.attributes,
      }))
      return Object.assign({}, state, {
        attributes: action.attributes,
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  navigator,
  memo_list,
  memo_detail
})

export default rootReducer
