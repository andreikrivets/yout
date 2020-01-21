import { useState }  from 'react';
import getSearchResults from './SearchQuery';

export default class Events {
  constructor(resultClass, value, pageToken) {
    this.class = resultClass;
    this.value = value;
    this.pageToken = pageToken;
    this.currentResultsPosition = 1;
  }

  init() {

  }
}
