import {
  LOAD_AUTHORS_SUCCESS
} from './actionTypes'

import authorApi from '../api/mockAuthorApi'

export function getAllAuthorsSuccess(authors) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    authors
  }
}

export function getAllAuthors() {
  return dispatch => {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(getAllAuthorsSuccess)
    }).catch(error => {
      throw(error)
    })
  }
}
