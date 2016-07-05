'use strict';

export var endpoint = '';
if (process.env.ENV === 'build') {
  endpoint = '/api';
} else {
  endpoint = 'http://localhost:8080/api';
}
