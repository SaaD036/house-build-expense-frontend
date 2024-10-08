import { Method } from 'axios';

export type AxiosPayloadType = {
    url: string;
    method: Method;
    data?: any;
    header?: any;
};
