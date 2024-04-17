/* tslint:disable */
/* eslint-disable */
/**
 * The Plaid API
 * The Plaid REST API. Please see https://plaid.com/docs/api for more details.
 *
 * The version of the OpenAPI document: 2020-09-14_1.503.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { EmploymentVerification } from './EmploymentVerification';
import {
    EmploymentVerificationFromJSON,
    EmploymentVerificationFromJSONTyped,
    EmploymentVerificationToJSON,
} from './EmploymentVerification';

/**
 * EmploymentVerificationGetResponse defines the response schema for `/employment/verification/get`.
 * @export
 * @interface EmploymentVerificationGetResponse
 */
export interface EmploymentVerificationGetResponse {
    [key: string]: any | any;
    /**
     * A list of employment verification summaries.
     * @type {Array<EmploymentVerification>}
     * @memberof EmploymentVerificationGetResponse
     */
    employments: Array<EmploymentVerification>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof EmploymentVerificationGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the EmploymentVerificationGetResponse interface.
 */
export function instanceOfEmploymentVerificationGetResponse(value: object): boolean {
    if (!('employments' in value)) return false;
    if (!('request_id' in value)) return false;
    return true;
}

export function EmploymentVerificationGetResponseFromJSON(json: any): EmploymentVerificationGetResponse {
    return EmploymentVerificationGetResponseFromJSONTyped(json, false);
}

export function EmploymentVerificationGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmploymentVerificationGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'employments': ((json['employments'] as Array<any>).map(EmploymentVerificationFromJSON)),
        'request_id': json['request_id'],
    };
}

export function EmploymentVerificationGetResponseToJSON(value?: EmploymentVerificationGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'employments': ((value['employments'] as Array<any>).map(EmploymentVerificationToJSON)),
        'request_id': value['request_id'],
    };
}
