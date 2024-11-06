/* eslint-disable indent */
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { Method } from 'axios';

import { callAxiosAPIWithoutUserCredential } from '../apiServices/calAPPI';
import { buildURL } from '../apiServices/buildURL';
import authAPIs from '../apiServices/APIs/authAPIs.json';

import { LOG_IN } from '../types/auth';

import { HTTP_STATUS_CODE } from '../../Constants/HTTP';
import ValidationError from '../../ErrorHandlers/ValidationError';

export const login =
    (email: string, password: string) =>
    async (dispatch: Dispatch<{ type: string; payload: any }>) => {
        try {
            const { path, method } = authAPIs.LOGIN;
            const loginResponse = await callAxiosAPIWithoutUserCredential({
                url: buildURL(path),
                method: method as Method,
                data: {
                    email,
                    password,
                },
            });

            if (loginResponse.status === HTTP_STATUS_CODE.NOT_FOUND) {
                throw new ValidationError('No user found with this credential');
            } else if (loginResponse.status === HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
                throw new ValidationError('Internal server error');
            }

            dispatch({
                type: LOG_IN,
                payload: '',
            });
        } catch (error) {
            if (error instanceof Error) {
                toast(error.message.toString());
            }
        }
    };
