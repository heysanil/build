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
 * PaymentProfileGetRequest defines the request schema for `/payment_profile/get`
 * @export
 * @interface PaymentProfileGetRequest
 */
export interface PaymentProfileGetRequest {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     * @type {string}
     * @memberof PaymentProfileGetRequest
     */
    client_id?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     * @type {string}
     * @memberof PaymentProfileGetRequest
     */
    secret?: string;
    /**
     * A payment profile token associated with the Payment Profile data that is being requested.
     * @type {string}
     * @memberof PaymentProfileGetRequest
     */
    payment_profile_token: string;
}

/**
 * Check if a given object implements the PaymentProfileGetRequest interface.
 */
export function instanceOfPaymentProfileGetRequest(value: object): boolean {
    if (!('payment_profile_token' in value)) return false;
    return true;
}

export function PaymentProfileGetRequestFromJSON(json: any): PaymentProfileGetRequest {
    return PaymentProfileGetRequestFromJSONTyped(json, false);
}

export function PaymentProfileGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentProfileGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'client_id': json['client_id'] == null ? undefined : json['client_id'],
        'secret': json['secret'] == null ? undefined : json['secret'],
        'payment_profile_token': json['payment_profile_token'],
    };
}

export function PaymentProfileGetRequestToJSON(value?: PaymentProfileGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'client_id': value['client_id'],
        'secret': value['secret'],
        'payment_profile_token': value['payment_profile_token'],
    };
}

