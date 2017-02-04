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

const rootReducer = combineReducers({
  navigator,
  memo_list
})

export default rootReducer
