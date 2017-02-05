// import React, { Component } from 'react'
import * as types from '../constants/ActionTypes';

export function loadMemos() {
  return dispatch => {
    fetchMemos()(dispatch)
    return {
      type: types.LOAD_MEMOS,
    }
  }
}

export function receiveMemos( data ) {
  return {
    type: types.RECEIVE_MEMOS,
    response: data.response,
    items: data.items,
  }
}

function fetchMemos() {
  return ( dispatch ) => {
    var _response = null;
    return fetch('https://develop.moco.metheglin.jp/v1/memos', {
      headers: {
        'Authorization': 'Token 0f3a2f8566c845c7a5df62075c2de687'
      }
    }).then((response) => {
      _response = response

      if( response.ok ) {
        return response.json()
      }
      throw new Error('Network response was not ok.');
    }).then((json) => {
      dispatch(receiveMemos({
        response: _response,
        items: json
      }))
    }).catch((error) => {
      console.log(error)
    })
    
  }
}
