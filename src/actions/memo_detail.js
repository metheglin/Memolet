// import React, { Component } from 'react'
import * as types from '../constants/ActionTypes';

export function selectMemo( id ) {
  return (dispatch, getState) => {
    var state = getState()
    var attributes = {}
    var items = state.memo_list.items
    
    // console.log(id,
    //   items.find(function(i){
    //   return i.id == 2
    // }))
    if ( items ) {
      attributes = items.find(function(item){
        return item.id == id
      })
    }
    return dispatch({
      type: types.SELECT_MEMO,
      attributes: attributes,
    })
  }
}