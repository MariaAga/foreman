import immutable from 'seamless-immutable';
import * as types from '../../consts';
import { bookmarks } from '../../reducers/bookmarks/bookmarks.fixtures';

export const initialState = immutable({
  bookmarks: {
    hosts: { errors: null, results: [] },
    showModal: false,
  },
});

export const requestData = {
  url: '/api/bookmarks',
  searchRegex: /\/api\/bookmarks\?search=.{13}hosts/,
  controller: 'hosts',
  response: { results: bookmarks },
};

const requestAction = {
  type: types.BOOKMARKS_REQUEST,
  payload: { controller: 'hosts' },
};

export const onFailureActions = [
  requestAction,
  {
    payload: { controller: 'hosts' },
    subtype: 'BOOKMARKS',
    type: 'API_GET',
    url: '/api/bookmarks?search=controller%3Dhosts&per_page=100',
  },
  {
    payload: {
      error: new Error('Request failed with status code 422'),
      payload: { controller: 'hosts' },
    },
    type: 'BOOKMARKS_FAILURE',
  },
];

export const onSuccessActions = [
  requestAction,
  {
    payload: { controller: 'hosts' },
    subtype: 'BOOKMARKS',
    type: 'API_GET',
    url: '/api/bookmarks?search=controller%3Dhosts&per_page=100',
  },
  {
    payload: {
      results: bookmarks,
      controller: 'hosts',
    },
    type: types.BOOKMARKS_SUCCESS,
  },
];
