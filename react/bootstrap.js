/**
 * Created by horat1us on 3/30/17.
 */

import config from 'config';
const accessToken = localStorage.getItem('accessToken');

window.config = config;
window.config.online = false;
window.config.accessToken = window.config.accessToken || accessToken;

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Yii2 back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.baseURL = config.baseURL;

if(window.config.accessToken) {
    window.axios.default.headers = {
        'Api-Token': accessToken,
    };
}

window.axios.get('/')
    .then(response => {
        const {data} = response;
        if ('status' in data && 'version' in data) {
            window.config.online = true;
            console.log(`${config.baseURL} is ${data.status} with version ${data.version}`);
        } else if (config.debug) {
            console.warn(`Unexpected answer from ${config.baseURL}`);
        }
    })
    .catch(error => {
        console.error(`Unable to receive answer from ${config.baseURL}`);
    });