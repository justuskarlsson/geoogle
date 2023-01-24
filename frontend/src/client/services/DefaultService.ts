/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body___nearest_k_post } from '../models/Body___nearest_k_post';
import type { NearestKResponse } from '../models/NearestKResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     *  
     * @returns any Successful Response
     * @throws ApiError
     */
    public static get(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/',
        });
    }

    /**
     *  
     * @param formData 
     * @returns NearestKResponse Successful Response
     * @throws ApiError
     */
    public static nearestKPost(
formData: Body___nearest_k_post,
): CancelablePromise<NearestKResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/nearest-k',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                422: `Validation Error`,
            },
        });
    }

}
