import axios from 'axios';
import { getOrGenerateGuid } from './GuidManager';

const userGuid = getOrGenerateGuid();

axios.defaults.headers.common['X-User-GUID'] = userGuid;

const axiosInstance = axios.create({
    baseURL: 'https://stock-api-test.apps.cluster-qcwp9.gcp.redhatworkshops.io'
});

export default axiosInstance;
