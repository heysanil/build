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
import type { CreditSession } from './CreditSession';
import {
    CreditSessionFromJSON,
    CreditSessionFromJSONTyped,
    CreditSessionToJSON,
} from './CreditSession';

/**
 * CreditSessionsGetResponse defines the response schema for `/credit/sessions/get`
 * @export
 * @interface CreditSessionsGetResponse
 */
export interface CreditSessionsGetResponse {
    [key: string]: any | any;
    /**
     * A list of Link sessions for the user. Sessions will be sorted in reverse chronological order.
     * @type {Array<CreditSession>}
     * @memberof CreditSessionsGetResponse
     */
    sessions?: Array<CreditSession>;
    /**
     * A unique identifier for the request, which can be used for troubleshooting. This identifier, like all Plaid identifiers, is case sensitive.
     * @type {string}
     * @memberof CreditSessionsGetResponse
     */
    request_id: string;
}

/**
 * Check if a given object implements the CreditSessionsGetResponse interface.
 */
export function instanceOfCreditSessionsGetResponse(value: object): boolean {
    if (!('request_id' in value)) return false;
    return true;
}

export function CreditSessionsGetResponseFromJSON(json: any): CreditSessionsGetResponse {
    return CreditSessionsGetResponseFromJSONTyped(json, false);
}

export function CreditSessionsGetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditSessionsGetResponse {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'sessions': json['sessions'] == null ? undefined : ((json['sessions'] as Array<any>).map(CreditSessionFromJSON)),
        'request_id': json['request_id'],
    };
}

export function CreditSessionsGetResponseToJSON(value?: CreditSessionsGetResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        'sessions': value['sessions'] == null ? undefined : ((value['sessions'] as Array<any>).map(CreditSessionToJSON)),
        'request_id': value['request_id'],
    };
}
