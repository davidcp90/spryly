'use strict';
export var endpoint = '';
if (process.env.ENV === 'build') {
 endpoint = 'http://spryly.co/api';
} else {
 endpoint = 'http://localhost:8080/api';
}
