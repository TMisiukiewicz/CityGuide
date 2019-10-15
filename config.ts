import Config from 'react-native-config';

const config = {
    api: {
        host: Config.API_HOST
    },
    map: {
        token: Config.MAPBOX_TOKEN
    }
};

export default config;