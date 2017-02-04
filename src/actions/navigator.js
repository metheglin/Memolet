import React, { Component } from 'react'
import * as types from '../constants/ActionTypes';

export function takePenUp() {
  return {
    type: types.TAKE_PEN_UP,
  }
}

export function takePenDown() {
  return {
    type: types.TAKE_PEN_DOWN,
  }
}

export function writeDown(text) {
  return (dispatch) => {
    postMemo(text)(dispatch)
    return {
      type: types.WRITE_DOWN,
    }
  }
}

export function writeDownCompleted( response ) {
  return {
    type: types.WRITE_DOWN_COMPLETED,
    response: response,
  }
}

function postMemo(text) {

  return dispatch => {
    return fetch('https://develop.moco.metheglin.jp/v1/memos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token 0f3a2f8566c845c7a5df62075c2de687'
      },
      body: JSON.stringify({
        content: text,
      })
    }).then((response) => {
      console.log(response)
      console.log("=================<<<<<<<<<<< postmemo resu")
      if (response.ok) {
        return response.json()
      }
      throw Error( response )
    }).then((json) => {
      console.log("write down compleed okokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokokok")
      dispatch(writeDownCompleted(json))
    }).catch((error) => {
      console.log("test test popopopo")
      console.log(error)
    })
  }
}
