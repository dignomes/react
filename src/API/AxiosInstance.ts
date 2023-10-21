import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://stock-api-test.apps.cluster-qcwp9.gcp.redhatworkshops.io';
});

export default instance;
