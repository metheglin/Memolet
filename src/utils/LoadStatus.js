const REQUEST_STATUS = {
  WAITING: "WAITING",
  LOADING: "LOADING",
  LOADED: "LOADED",
}

const RESPONSE_STATUS = {
  NONE: "NONE",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
}

export default class LoadStatus {

  constructor() {
    this.reset()
  }

  reset() {
    this.requestState = REQUEST_STATUS.WAITING
    this.responseState = RESPONSE_STATUS.NONE
    return this
  }

  setRequestSent() {
    this.requestState = REQUEST_STATUS.LOADING
    this.responseState = RESPONSE_STATUS.NONE
    return this
  }

  /**
   * @param response: response object of fetch
   */
  setRequestReceived( response ) {
    this.requestState = REQUEST_STATUS.LOADED
    if ( response ) {
      this.responseState = response.ok ? 
        RESPONSE_STATUS.SUCCESS :
        RESPONSE_STATUS.ERROR
      this.response = response
    }
    return this
  }

  // get requestState() { return this.requestState }
  // get responseState() { return this.responseState }

  isLoaded() {
    return this.requestState == REQUEST_STATUS.LOADED
  }

  isLoading() {
    return this.requestState == REQUEST_STATUS.WAITING ||
      this.requestState == REQUEST_STATUS.LOADING
  }

  isSuccess() {
    return this.requestState == REQUEST_STATUS.LOADED &&
      this.responseState == RESPONSE_STATUS.SUCCESS
  }

}