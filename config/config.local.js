import envConfig from 'envConfig';

const config = {
    baseURL: 'http://localhost:8000/',
    debug: true,
};

Object.assign(config, envConfig || {});

export default config;