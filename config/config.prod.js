import envConfig from 'envConfig';

const config = {
    baseURL: 'https://wearesho.com/',
    debug: false,
};

Object.assign(config, envConfig || {});

export default config;