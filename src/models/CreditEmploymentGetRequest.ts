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
/**
 * CreditEmploymentGetRequest defines the request schema for `/credit/employment/get`.
 * @export
 * @interface CreditEmploymentGetRequest
 */
export interface CreditEmploymentGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof CreditEmploymentGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof CreditEmploymentGetRequest
     */
    secret?: string;
    /**
     * The user token associated with the User data is being requested for.
     * @type {string}
     * @memberof CreditEmploymentGetRequest
     */
    user_token: string;
}

/**
 * Check if a given object implements the CreditEmploymentGetRequest interface.
 */
export function instanceOfCreditEmploymentGetRequest(value: object): boolean {
    if (!('user_token' in value)) return false;
    return true;
}

export function CreditEmploymentGetRequestFromJSON(json: any): CreditEmploymentGetRequest {
    return CreditEmploymentGetRequestFromJSONTyped(json, false);
}

export function CreditEmploymentGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditEmploymentGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'user_token': json['user_token'],
    };
}

export function CreditEmploymentGetRequestToJSON(value?: CreditEmploymentGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'user_token': value['user_token'],
    };
}

