import axios from 'axios';

import { AxiosPayloadType } from './apiServiceTypes';

export const callAxiosAPIWithoutUserCredential = async (payload: AxiosPayloadType) => {
    const response = await axios({
        validateStatus: (status_code) => true,
        ...payload,
    });

    return response;
};

export const callAxiosAPIWithUserCredential = () => {};
