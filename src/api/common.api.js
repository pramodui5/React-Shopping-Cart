import fetch from "fetch-retry";

class CommonApi {
  static fetch(url, config = {
    method: "GET",
    headers: {
      Accept: "application/json"
    },
    retryOn: [403]
  }, actionType) {
    return (dispatch, getState) => {
      dispatch({ type: actionType.REQUEST, isFetching: true });
      return fetch(url, config)
      .then( res => res.json())
      .then(res => {
        dispatch({ type: actionType.SUCCESS, isFetching: false, data: res});
        return res;
      })
      .catch(err => {
        if (err) {
          dispatch({ type: actionType.FAILURE, isFetching: false, error: err });
          return new Error(err)
        }
      });
    }

  }
}

export default CommonApi;
